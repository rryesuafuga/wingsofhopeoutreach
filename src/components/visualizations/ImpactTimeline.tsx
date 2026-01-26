'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { TIMELINE_EVENTS, CB_SAFE_COLORS } from '@/lib/constants';

const typeColors: Record<string, string> = {
  milestone: CB_SAFE_COLORS[0],
  program: CB_SAFE_COLORS[1],
  achievement: CB_SAFE_COLORS[2],
  partnership: CB_SAFE_COLORS[4],
};

const typePatterns: Record<string, string> = {
  milestone: 'circle',
  program: 'square',
  achievement: 'diamond',
  partnership: 'triangle',
};

export default function ImpactTimeline() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const containerWidth = containerRef.current.clientWidth;
    const width = containerWidth;
    const height = 450;
    const margin = { top: 60, right: 30, bottom: 80, left: 30 };

    svg.attr('width', width).attr('height', height);

    const events = TIMELINE_EVENTS.map((e, i) => ({
      ...e,
      index: i,
      date: new Date(e.year, ['January','February','March','April','May','June','July','August','September','October','November','December'].indexOf(e.month)),
    }));

    const xScale = d3
      .scaleTime()
      .domain([
        d3.min(events, (d) => d.date)!,
        d3.max(events, (d) => d.date)!,
      ])
      .range([margin.left + 40, width - margin.right - 40]);

    const yBaseline = height / 2;

    // Timeline axis line
    svg
      .append('line')
      .attr('x1', margin.left)
      .attr('x2', width - margin.right)
      .attr('y1', yBaseline)
      .attr('y2', yBaseline)
      .attr('stroke', '#e2e8f0')
      .attr('stroke-width', 3)
      .attr('stroke-linecap', 'round');

    // Animated progress line
    svg
      .append('line')
      .attr('x1', margin.left)
      .attr('x2', margin.left)
      .attr('y1', yBaseline)
      .attr('y2', yBaseline)
      .attr('stroke', '#14b8a6')
      .attr('stroke-width', 3)
      .attr('stroke-linecap', 'round')
      .transition()
      .duration(2000)
      .ease(d3.easeQuadOut)
      .attr('x2', width - margin.right);

    // Event groups
    const eventGroups = svg
      .selectAll('.event')
      .data(events)
      .join('g')
      .attr('class', 'event')
      .style('cursor', 'pointer');

    // Connector lines
    eventGroups
      .append('line')
      .attr('x1', (d) => xScale(d.date))
      .attr('x2', (d) => xScale(d.date))
      .attr('y1', yBaseline)
      .attr('y2', (d, i) => (i % 2 === 0 ? yBaseline - 60 : yBaseline + 60))
      .attr('stroke', (d) => typeColors[d.type])
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '4,4')
      .style('opacity', 0)
      .transition()
      .delay((_, i) => 500 + i * 200)
      .duration(500)
      .style('opacity', 0.6);

    // Event dots
    eventGroups
      .append('circle')
      .attr('cx', (d) => xScale(d.date))
      .attr('cy', yBaseline)
      .attr('r', 0)
      .attr('fill', (d) => typeColors[d.type])
      .attr('stroke', 'white')
      .attr('stroke-width', 3)
      .attr('class', 'timeline-dot')
      .transition()
      .delay((_, i) => 500 + i * 200)
      .duration(400)
      .attr('r', 8);

    // Event cards
    const cardWidth = 140;
    const cardHeight = 70;

    const cards = eventGroups
      .append('g')
      .attr('transform', (d, i) => {
        const x = xScale(d.date) - cardWidth / 2;
        const y = i % 2 === 0 ? yBaseline - 60 - cardHeight - 10 : yBaseline + 70;
        return `translate(${x},${y})`;
      })
      .style('opacity', 0);

    cards
      .transition()
      .delay((_, i) => 700 + i * 200)
      .duration(500)
      .style('opacity', 1);

    // Card backgrounds
    cards
      .append('rect')
      .attr('width', cardWidth)
      .attr('height', cardHeight)
      .attr('rx', 8)
      .attr('fill', 'white')
      .attr('stroke', (d) => typeColors[d.type])
      .attr('stroke-width', 1.5)
      .attr('filter', 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))');

    // Card type indicator
    cards
      .append('rect')
      .attr('width', cardWidth)
      .attr('height', 4)
      .attr('rx', 2)
      .attr('fill', (d) => typeColors[d.type]);

    // Card month/year
    cards
      .append('text')
      .attr('x', 10)
      .attr('y', 22)
      .style('font-size', '10px')
      .style('font-weight', '700')
      .style('fill', (d) => typeColors[d.type])
      .style('text-transform', 'uppercase')
      .style('letter-spacing', '0.05em')
      .text((d) => `${d.month} ${d.year}`);

    // Card title
    cards
      .append('text')
      .attr('x', 10)
      .attr('y', 40)
      .style('font-size', '11px')
      .style('font-weight', '600')
      .style('fill', '#1e293b')
      .each(function (d) {
        const text = d3.select(this);
        const title = d.title;
        if (title.length > 22) {
          text.text(title.slice(0, 20) + '...');
        } else {
          text.text(title);
        }
      });

    // Card description snippet
    cards
      .append('text')
      .attr('x', 10)
      .attr('y', 56)
      .style('font-size', '9px')
      .style('fill', '#64748b')
      .each(function (d) {
        const text = d3.select(this);
        const desc = d.description;
        if (desc.length > 30) {
          text.text(desc.slice(0, 28) + '...');
        } else {
          text.text(desc);
        }
      });

    // Hover interactions
    eventGroups
      .on('mouseenter', function (_, d) {
        d3.select(this).select('circle').transition().duration(200).attr('r', 12);
        d3.select(this).select('g').transition().duration(200).style('opacity', 1);
      })
      .on('mouseleave', function () {
        d3.select(this).select('circle').transition().duration(200).attr('r', 8);
      });

    // Accessibility titles
    eventGroups
      .append('title')
      .text((d) => `${d.month} ${d.year}: ${d.title} - ${d.description}`);

    // Legend
    const legend = svg
      .append('g')
      .attr('transform', `translate(${margin.left + 10}, ${height - 30})`);

    const types = Object.entries(typeColors);
    types.forEach(([type, color], i) => {
      const g = legend
        .append('g')
        .attr('transform', `translate(${i * 130}, 0)`);

      g.append('circle')
        .attr('r', 5)
        .attr('fill', color);

      g.append('text')
        .attr('x', 12)
        .attr('y', 4)
        .style('font-size', '11px')
        .style('fill', '#64748b')
        .style('text-transform', 'capitalize')
        .text(type);
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-auto">
      <svg
        ref={svgRef}
        role="img"
        aria-label="Timeline showing key milestones and events in Wings of Hope Outreach history from 2024 to 2025"
        className="min-w-[700px]"
      />
      {/* Screen reader accessible version */}
      <div className="sr-only">
        <h3>Organization Timeline Events:</h3>
        <ol>
          {TIMELINE_EVENTS.map((event) => (
            <li key={event.title}>
              {event.month} {event.year} - {event.title}: {event.description} (Type: {event.type})
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
