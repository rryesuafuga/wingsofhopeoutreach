'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { PROGRAMS, CB_SAFE_COLORS } from '@/lib/constants';

interface ProgramData {
  name: string;
  value: number;
  color: string;
  icon: string;
  id: string;
}

export default function ProgramWheel() {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [activeProgram, setActiveProgram] = useState<ProgramData | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const container = svgRef.current.parentElement;
    if (!container) return;
    const width = Math.min(container.clientWidth, 600);
    const height = width;
    const radius = width / 2 - 40;

    svg.attr('width', width).attr('height', height).attr('viewBox', `0 0 ${width} ${height}`);

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const data: ProgramData[] = PROGRAMS.map((p, i) => ({
      name: p.shortTitle,
      value: p.impact.beneficiaries,
      color: CB_SAFE_COLORS[i % CB_SAFE_COLORS.length],
      icon: p.icon,
      id: p.id,
    }));

    const pie = d3
      .pie<ProgramData>()
      .value((d) => d.value)
      .padAngle(0.03)
      .sort(null);

    const arc = d3
      .arc<d3.PieArcDatum<ProgramData>>()
      .innerRadius(radius * 0.45)
      .outerRadius(radius * 0.85)
      .cornerRadius(6);

    const hoverArc = d3
      .arc<d3.PieArcDatum<ProgramData>>()
      .innerRadius(radius * 0.42)
      .outerRadius(radius * 0.9)
      .cornerRadius(6);

    const labelArc = d3
      .arc<d3.PieArcDatum<ProgramData>>()
      .innerRadius(radius * 0.65)
      .outerRadius(radius * 0.65);

    // Arcs
    const arcs = g
      .selectAll('.arc')
      .data(pie(data))
      .join('g')
      .attr('class', 'arc');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => d.data.color)
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .attr('class', 'program-wheel-arc')
      .style('opacity', 0.9)
      .on('mouseenter', function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', hoverArc as never)
          .style('opacity', 1);

        setActiveProgram(d.data);

        if (tooltipRef.current) {
          tooltipRef.current.style.opacity = '1';
          tooltipRef.current.style.left = `${event.offsetX + 10}px`;
          tooltipRef.current.style.top = `${event.offsetY - 40}px`;
        }
      })
      .on('mousemove', function (event) {
        if (tooltipRef.current) {
          tooltipRef.current.style.left = `${event.offsetX + 10}px`;
          tooltipRef.current.style.top = `${event.offsetY - 40}px`;
        }
      })
      .on('mouseleave', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', arc as never)
          .style('opacity', 0.9);

        setActiveProgram(null);
        if (tooltipRef.current) {
          tooltipRef.current.style.opacity = '0';
        }
      })
      .transition()
      .duration(1000)
      .attrTween('d', function (d) {
        const interpolate = d3.interpolate(
          { startAngle: d.startAngle, endAngle: d.startAngle },
          d
        );
        return function (t) {
          return arc(interpolate(t)) || '';
        };
      });

    // Labels
    arcs
      .append('text')
      .attr('transform', (d) => `translate(${labelArc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .style('font-size', '11px')
      .style('font-weight', '600')
      .style('fill', 'white')
      .style('pointer-events', 'none')
      .style('opacity', 0)
      .text((d) => d.data.name)
      .transition()
      .delay(1000)
      .duration(500)
      .style('opacity', 1);

    // Center text
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('y', -10)
      .style('font-size', '18px')
      .style('font-weight', '700')
      .style('font-family', "'Playfair Display', serif")
      .style('fill', '#0f172a')
      .text('8');

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('y', 14)
      .style('font-size', '11px')
      .style('font-weight', '500')
      .style('fill', '#64748b')
      .text('Programs');

    // Accessibility: add descriptions
    arcs
      .append('title')
      .text(
        (d) =>
          `${d.data.name}: ${d.data.value} beneficiaries`
      );
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-center">
        <svg
          ref={svgRef}
          role="img"
          aria-label="Interactive program wheel showing 8 programs and their relative beneficiary counts"
          className="max-w-full"
        />
      </div>
      <div
        ref={tooltipRef}
        className="d3-tooltip"
        style={{ opacity: 0, transition: 'opacity 0.2s' }}
      >
        {activeProgram && (
          <>
            <div className="font-bold">
              {activeProgram.icon} {activeProgram.name}
            </div>
            <div className="text-slate-300 text-xs mt-1">
              {activeProgram.value.toLocaleString()} beneficiaries
            </div>
          </>
        )}
      </div>
      {/* Legend for screen readers */}
      <div className="sr-only">
        <h3>Program beneficiary data:</h3>
        <ul>
          {PROGRAMS.map((p) => (
            <li key={p.id}>
              {p.shortTitle}: {p.impact.beneficiaries} beneficiaries
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
