'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { PROGRAMS, CB_SAFE_COLORS } from '@/lib/constants';

export default function ImpactBarChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const containerWidth = containerRef.current.clientWidth;
    const width = containerWidth;
    const height = 400;
    const margin = { top: 30, right: 30, bottom: 80, left: 60 };

    svg.attr('width', width).attr('height', height);

    const data = PROGRAMS.map((p, i) => ({
      name: p.shortTitle,
      beneficiaries: p.impact.beneficiaries,
      communities: p.impact.communities,
      color: CB_SAFE_COLORS[i % CB_SAFE_COLORS.length],
    }));

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.3);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.beneficiaries)! * 1.1])
      .range([height - margin.bottom, margin.top]);

    // Grid lines
    svg
      .append('g')
      .attr('class', 'grid')
      .selectAll('line')
      .data(y.ticks(5))
      .join('line')
      .attr('x1', margin.left)
      .attr('x2', width - margin.right)
      .attr('y1', (d) => y(d))
      .attr('y2', (d) => y(d))
      .attr('stroke', '#e2e8f0')
      .attr('stroke-dasharray', '4,4');

    // X axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll('text')
      .style('font-size', '11px')
      .style('font-weight', '500')
      .style('fill', '#64748b')
      .attr('transform', 'rotate(-35)')
      .attr('text-anchor', 'end');

    svg.selectAll('.domain').attr('stroke', '#e2e8f0');

    // Y axis
    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(
        d3
          .axisLeft(y)
          .ticks(5)
          .tickFormat((d) => d.toString())
          .tickSize(0)
      )
      .selectAll('text')
      .style('font-size', '11px')
      .style('fill', '#64748b');

    // Y axis label
    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', 15)
      .attr('text-anchor', 'middle')
      .style('font-size', '11px')
      .style('font-weight', '600')
      .style('fill', '#64748b')
      .text('Beneficiaries');

    // Bars
    const bars = svg
      .selectAll('.bar')
      .data(data)
      .join('g')
      .attr('class', 'bar');

    bars
      .append('rect')
      .attr('x', (d) => x(d.name)!)
      .attr('y', height - margin.bottom)
      .attr('width', x.bandwidth())
      .attr('height', 0)
      .attr('fill', (d) => d.color)
      .attr('rx', 4)
      .attr('ry', 4)
      .style('opacity', 0.85)
      .transition()
      .duration(1000)
      .delay((_, i) => i * 100)
      .ease(d3.easeBackOut)
      .attr('y', (d) => y(d.beneficiaries))
      .attr('height', (d) => height - margin.bottom - y(d.beneficiaries));

    // Value labels on bars
    bars
      .append('text')
      .attr('x', (d) => x(d.name)! + x.bandwidth() / 2)
      .attr('y', (d) => y(d.beneficiaries) - 8)
      .attr('text-anchor', 'middle')
      .style('font-size', '11px')
      .style('font-weight', '700')
      .style('fill', '#334155')
      .text((d) => d.beneficiaries)
      .style('opacity', 0)
      .transition()
      .delay((_, i) => 1000 + i * 100)
      .duration(400)
      .style('opacity', 1);

    // Community count indicators (circles above bars)
    bars
      .append('circle')
      .attr('cx', (d) => x(d.name)! + x.bandwidth() / 2)
      .attr('cy', (d) => y(d.beneficiaries) - 25)
      .attr('r', 0)
      .attr('fill', (d) => d.color)
      .attr('opacity', 0.3)
      .transition()
      .delay((_, i) => 1200 + i * 100)
      .duration(400)
      .attr('r', (d) => d.communities);

    // Hover effects
    bars
      .on('mouseenter', function (_, d) {
        d3.select(this)
          .select('rect')
          .transition()
          .duration(200)
          .style('opacity', 1);
      })
      .on('mouseleave', function () {
        d3.select(this)
          .select('rect')
          .transition()
          .duration(200)
          .style('opacity', 0.85);
      });

    // Accessibility
    bars
      .append('title')
      .text(
        (d) =>
          `${d.name}: ${d.beneficiaries} beneficiaries across ${d.communities} communities`
      );
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <svg
        ref={svgRef}
        role="img"
        aria-label="Bar chart showing beneficiary counts across all 8 programs"
      />
      <div className="sr-only">
        <h3>Program Impact Data:</h3>
        <ul>
          {PROGRAMS.map((p) => (
            <li key={p.id}>
              {p.shortTitle}: {p.impact.beneficiaries} beneficiaries in{' '}
              {p.impact.communities} communities
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
