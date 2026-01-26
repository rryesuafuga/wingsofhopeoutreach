'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { RESOURCE_FLOW_DATA, CB_SAFE_COLORS } from '@/lib/constants';

interface SankeyNode {
  name: string;
  x0?: number;
  x1?: number;
  y0?: number;
  y1?: number;
  sourceLinks?: SankeyLink[];
  targetLinks?: SankeyLink[];
  value?: number;
  index?: number;
}

interface SankeyLink {
  source: SankeyNode;
  target: SankeyNode;
  value: number;
  width?: number;
  y0?: number;
  y1?: number;
}

export default function SankeyDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const containerWidth = containerRef.current.clientWidth;
    const width = containerWidth;
    const height = 500;
    const margin = { top: 20, right: 120, bottom: 20, left: 120 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.attr('width', width).attr('height', height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Simple sankey layout
    const nodeWidth = 20;
    const nodePadding = 12;

    // Build nodes
    const nodes: SankeyNode[] = RESOURCE_FLOW_DATA.nodes.map((n) => ({
      ...n,
      sourceLinks: [],
      targetLinks: [],
      value: 0,
    }));

    // Build links
    const links: SankeyLink[] = RESOURCE_FLOW_DATA.links.map((l) => ({
      source: nodes[l.source],
      target: nodes[l.target],
      value: l.value,
    }));

    // Associate links with nodes
    links.forEach((link) => {
      link.source.sourceLinks!.push(link);
      link.target.targetLinks!.push(link);
    });

    // Calculate node values
    nodes.forEach((node) => {
      node.value = Math.max(
        d3.sum(node.sourceLinks!, (l) => l.value),
        d3.sum(node.targetLinks!, (l) => l.value)
      );
    });

    // Arrange nodes in columns
    const columns: SankeyNode[][] = [[], [], [], []];
    nodes.forEach((node, i) => {
      if (i < 4) columns[0].push(node);
      else if (i < 10) columns[1].push(node);
      else columns[2].push(node);
    });

    // Add final column
    if (columns[2].length > 4) {
      columns[3] = columns[2].splice(4);
    } else {
      // Reorganize: sources (0-3), programs (4-9), beneficiaries (10-13)
      columns[0] = nodes.slice(0, 4);
      columns[1] = nodes.slice(4, 10);
      columns[2] = nodes.slice(10, 14);
      columns.length = 3;
    }

    const columnCount = columns.length;
    const columnSpacing = innerWidth / (columnCount - 1);

    // Position nodes
    columns.forEach((col, ci) => {
      const totalValue = d3.sum(col, (n) => n.value!);
      const totalPadding = (col.length - 1) * nodePadding;
      const availableHeight = innerHeight - totalPadding;
      let y = 0;

      col.forEach((node) => {
        const nodeHeight = (node.value! / totalValue) * availableHeight;
        node.x0 = ci * columnSpacing;
        node.x1 = node.x0 + nodeWidth;
        node.y0 = y;
        node.y1 = y + Math.max(nodeHeight, 10);
        y = node.y1! + nodePadding;
      });

      // Center column vertically
      const colHeight = y - nodePadding;
      const offset = (innerHeight - colHeight) / 2;
      col.forEach((node) => {
        node.y0! += offset;
        node.y1! += offset;
      });
    });

    // Calculate link positions
    columns.forEach((col) => {
      col.forEach((node) => {
        let sy = node.y0!;
        node.sourceLinks!.sort((a, b) => a.target.y0! - b.target.y0!);
        node.sourceLinks!.forEach((link) => {
          const nodeH = node.y1! - node.y0!;
          link.width = (link.value / node.value!) * nodeH;
          link.y0 = sy + link.width / 2;
          sy += link.width;
        });

        let ty = node.y0!;
        node.targetLinks!.sort((a, b) => a.source.y0! - b.source.y0!);
        node.targetLinks!.forEach((link) => {
          const nodeH = node.y1! - node.y0!;
          const w = (link.value / node.value!) * nodeH;
          link.y1 = ty + w / 2;
          ty += w;
        });
      });
    });

    // Color scale for nodes
    const nodeColor = (node: SankeyNode, i: number) => {
      return CB_SAFE_COLORS[i % CB_SAFE_COLORS.length];
    };

    // Draw links
    const linkGroup = g.append('g').attr('class', 'links');

    linkGroup
      .selectAll('path')
      .data(links)
      .join('path')
      .attr('class', 'sankey-link')
      .attr('d', (d) => {
        const x0 = d.source.x1!;
        const x1 = d.target.x0!;
        const xi = d3.interpolateNumber(x0, x1);
        const x2 = xi(0.5);
        const x3 = xi(0.5);

        return `M${x0},${d.y0}
                C${x2},${d.y0} ${x3},${d.y1} ${x1},${d.y1}`;
      })
      .attr('stroke', (d) => {
        const si = nodes.indexOf(d.source);
        return CB_SAFE_COLORS[si % CB_SAFE_COLORS.length];
      })
      .attr('stroke-width', (d) => Math.max(d.width || 1, 2))
      .style('opacity', 0)
      .transition()
      .delay((_, i) => 500 + i * 50)
      .duration(800)
      .style('opacity', 1)
      .attr('stroke-opacity', 0.35);

    // Draw nodes
    const nodeGroup = g.append('g').attr('class', 'nodes');

    const nodeElements = nodeGroup
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'sankey-node');

    nodeElements
      .append('rect')
      .attr('x', (d) => d.x0!)
      .attr('y', (d) => d.y0!)
      .attr('width', nodeWidth)
      .attr('height', (d) => Math.max(d.y1! - d.y0!, 4))
      .attr('fill', (d, i) => nodeColor(d, i))
      .attr('rx', 4)
      .attr('ry', 4)
      .style('opacity', 0)
      .transition()
      .delay((_, i) => i * 80)
      .duration(600)
      .style('opacity', 0.9);

    // Node labels
    nodeElements
      .append('text')
      .attr('x', (d) => {
        const col = columns.findIndex((c) => c.includes(d));
        if (col === 0) return d.x0! - 8;
        if (col === columns.length - 1) return d.x1! + 8;
        return d.x0! + nodeWidth / 2;
      })
      .attr('y', (d) => (d.y0! + d.y1!) / 2)
      .attr('text-anchor', (d) => {
        const col = columns.findIndex((c) => c.includes(d));
        if (col === 0) return 'end';
        if (col === columns.length - 1) return 'start';
        return 'middle';
      })
      .attr('dominant-baseline', 'central')
      .style('font-size', '11px')
      .style('font-weight', '600')
      .style('fill', '#334155')
      .text((d) => d.name)
      .style('opacity', 0)
      .transition()
      .delay((_, i) => 800 + i * 50)
      .duration(400)
      .style('opacity', 1);

    // Hover interactions
    nodeElements
      .on('mouseenter', function (_, d) {
        // Highlight connected links
        linkGroup
          .selectAll('path')
          .transition()
          .duration(200)
          .attr('stroke-opacity', (l: unknown) => {
            const link = l as SankeyLink;
            return link.source === d || link.target === d ? 0.6 : 0.1;
          });
      })
      .on('mouseleave', function () {
        linkGroup
          .selectAll('path')
          .transition()
          .duration(200)
          .attr('stroke-opacity', 0.35);
      });

    // Column labels
    const columnLabels = ['Funding Sources', 'Programs', 'Beneficiaries'];
    columns.forEach((_, ci) => {
      if (ci < columnLabels.length) {
        g.append('text')
          .attr('x', ci * columnSpacing + nodeWidth / 2)
          .attr('y', -8)
          .attr('text-anchor', 'middle')
          .style('font-size', '12px')
          .style('font-weight', '700')
          .style('fill', '#0f766e')
          .style('text-transform', 'uppercase')
          .style('letter-spacing', '0.1em')
          .text(columnLabels[ci]);
      }
    });

    // Accessibility
    nodeElements
      .append('title')
      .text(
        (d) =>
          `${d.name}: ${d.sourceLinks!.length} outgoing connections, ${d.targetLinks!.length} incoming connections`
      );
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-auto">
      <svg
        ref={svgRef}
        role="img"
        aria-label="Sankey diagram showing the flow of resources from funding sources through programs to beneficiaries"
        className="min-w-[600px]"
      />
      <div className="sr-only">
        <h3>Resource Flow:</h3>
        <p>
          Funding from Donations, Grants, Fundraising, and Partnerships flows
          through Education, Healthcare, Economic Empowerment, Foster Care,
          Counseling, and Agriculture programs to reach Children, Youth,
          Families, and Communities.
        </p>
      </div>
    </div>
  );
}
