'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { CB_SAFE_COLORS } from '@/lib/constants';

interface MapPoint {
  name: string;
  lat: number;
  lng: number;
  programs: string[];
  beneficiaries: number;
  color: string;
}

const communityData: MapPoint[] = [
  { name: 'Kitala', lat: 0.2986, lng: 32.4794, programs: ['Education', 'Healthcare'], beneficiaries: 450, color: CB_SAFE_COLORS[0] },
  { name: 'Wakiso Town', lat: 0.4044, lng: 32.4594, programs: ['Economic Empowerment', 'Counseling'], beneficiaries: 320, color: CB_SAFE_COLORS[1] },
  { name: 'Nansana', lat: 0.3650, lng: 32.5278, programs: ['Foster Care', 'Education'], beneficiaries: 280, color: CB_SAFE_COLORS[2] },
  { name: 'Entebbe', lat: 0.0512, lng: 32.4637, programs: ['Healthcare', 'Agriculture'], beneficiaries: 200, color: CB_SAFE_COLORS[3] },
  { name: 'Kira', lat: 0.3893, lng: 32.6422, programs: ['Vocational Training'], beneficiaries: 180, color: CB_SAFE_COLORS[4] },
  { name: 'Mukono', lat: 0.3533, lng: 32.7554, programs: ['Agriculture', 'Education'], beneficiaries: 350, color: CB_SAFE_COLORS[5] },
  { name: 'Gayaza', lat: 0.4381, lng: 32.6067, programs: ['Healthcare', 'Counseling'], beneficiaries: 260, color: CB_SAFE_COLORS[6] },
  { name: 'Kasangati', lat: 0.4269, lng: 32.5928, programs: ['Education', 'Foster Care'], beneficiaries: 190, color: CB_SAFE_COLORS[7] },
  { name: 'Nabweru', lat: 0.3600, lng: 32.5400, programs: ['Economic Empowerment'], beneficiaries: 150, color: CB_SAFE_COLORS[0] },
  { name: 'Ssabagabo', lat: 0.2567, lng: 32.5600, programs: ['Agriculture', 'Vocational Training'], beneficiaries: 220, color: CB_SAFE_COLORS[1] },
];

export default function CommunityMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const containerWidth = containerRef.current.clientWidth;
    const width = containerWidth;
    const height = 450;

    svg.attr('width', width).attr('height', height);

    // Create a simple geographic projection centered on Uganda/Wakiso
    const projection = d3
      .geoMercator()
      .center([32.55, 0.33])
      .scale(width * 80)
      .translate([width / 2, height / 2]);

    // Background
    svg
      .append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#faf6f5')
      .attr('rx', 12);

    // Grid lines for reference
    for (let i = 0; i < 20; i++) {
      svg
        .append('line')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('y1', (height / 20) * i)
        .attr('y2', (height / 20) * i)
        .attr('stroke', '#e5d4ce')
        .attr('stroke-width', 0.5);
      svg
        .append('line')
        .attr('x1', (width / 20) * i)
        .attr('x2', (width / 20) * i)
        .attr('y1', 0)
        .attr('y2', height)
        .attr('stroke', '#e5d4ce')
        .attr('stroke-width', 0.5);
    }

    // Title
    svg
      .append('text')
      .attr('x', 20)
      .attr('y', 30)
      .style('font-size', '14px')
      .style('font-weight', '700')
      .style('fill', '#54302a')
      .text('Communities We Serve');

    svg
      .append('text')
      .attr('x', 20)
      .attr('y', 48)
      .style('font-size', '11px')
      .style('fill', '#64748b')
      .text('Wakiso District & surrounding areas, Uganda');

    // Scale for point sizes
    const rScale = d3
      .scaleSqrt()
      .domain([0, d3.max(communityData, (d) => d.beneficiaries)!])
      .range([6, 24]);

    // Pulse rings
    const pulseGroup = svg.append('g').attr('class', 'pulses');

    communityData.forEach((point) => {
      const [x, y] = projection([point.lng, point.lat]) || [0, 0];

      pulseGroup
        .append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', rScale(point.beneficiaries))
        .attr('fill', 'none')
        .attr('stroke', point.color)
        .attr('stroke-width', 1)
        .attr('opacity', 0)
        .transition()
        .delay(Math.random() * 2000)
        .duration(2000)
        .attr('r', rScale(point.beneficiaries) + 15)
        .attr('opacity', 0)
        .transition()
        .duration(0)
        .attr('r', rScale(point.beneficiaries))
        .attr('opacity', 0.3)
        .transition()
        .duration(2000)
        .attr('r', rScale(point.beneficiaries) + 15)
        .attr('opacity', 0)
        .on('end', function repeat() {
          d3.select(this)
            .attr('r', rScale(point.beneficiaries))
            .attr('opacity', 0.3)
            .transition()
            .duration(2000)
            .attr('r', rScale(point.beneficiaries) + 15)
            .attr('opacity', 0)
            .on('end', repeat);
        });
    });

    // Connection lines between communities
    for (let i = 0; i < communityData.length; i++) {
      for (let j = i + 1; j < communityData.length; j++) {
        const p1 = projection([communityData[i].lng, communityData[i].lat]);
        const p2 = projection([communityData[j].lng, communityData[j].lat]);
        if (p1 && p2) {
          const dist = Math.sqrt(
            (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2
          );
          if (dist < 150) {
            svg
              .append('line')
              .attr('x1', p1[0])
              .attr('y1', p1[1])
              .attr('x2', p2[0])
              .attr('y2', p2[1])
              .attr('stroke', '#d4b5ab')
              .attr('stroke-width', 1)
              .attr('stroke-dasharray', '4,4')
              .attr('opacity', 0.4);
          }
        }
      }
    }

    // Community points
    const points = svg
      .selectAll('.community-point')
      .data(communityData)
      .join('g')
      .attr('class', 'community-point')
      .attr('transform', (d) => {
        const [x, y] = projection([d.lng, d.lat]) || [0, 0];
        return `translate(${x},${y})`;
      })
      .style('cursor', 'pointer');

    // Point circles
    points
      .append('circle')
      .attr('r', 0)
      .attr('fill', (d) => d.color)
      .attr('stroke', 'white')
      .attr('stroke-width', 2.5)
      .attr('opacity', 0.85)
      .transition()
      .delay((_, i) => 300 + i * 100)
      .duration(600)
      .ease(d3.easeBackOut)
      .attr('r', (d) => rScale(d.beneficiaries));

    // Labels
    points
      .append('text')
      .attr('y', (d) => -rScale(d.beneficiaries) - 6)
      .attr('text-anchor', 'middle')
      .style('font-size', '10px')
      .style('font-weight', '600')
      .style('fill', '#334155')
      .text((d) => d.name)
      .style('opacity', 0)
      .transition()
      .delay((_, i) => 800 + i * 100)
      .duration(400)
      .style('opacity', 1);

    // Hover interactions
    points
      .on('mouseenter', function (_, d) {
        d3.select(this)
          .select('circle')
          .transition()
          .duration(200)
          .attr('r', rScale(d.beneficiaries) + 4)
          .attr('opacity', 1);

        setSelectedPoint(d);
      })
      .on('mouseleave', function (_, d) {
        d3.select(this)
          .select('circle')
          .transition()
          .duration(200)
          .attr('r', rScale(d.beneficiaries))
          .attr('opacity', 0.85);

        setSelectedPoint(null);
      });

    // Accessibility
    points
      .append('title')
      .text(
        (d) =>
          `${d.name}: ${d.beneficiaries} beneficiaries, Programs: ${d.programs.join(', ')}`
      );
  }, []);

  return (
    <div className="relative">
      <div ref={containerRef} className="w-full">
        <svg
          ref={svgRef}
          role="img"
          aria-label="Map showing community locations served by Wings of Hope Outreach in the Wakiso district of Uganda"
          className="rounded-xl"
        />
      </div>

      {/* Info panel */}
      {selectedPoint && (
        <div className="absolute top-4 right-4 bg-white rounded-xl shadow-xl p-4 max-w-xs border border-slate-100 z-10">
          <h4 className="font-heading font-bold text-slate-900 text-lg">
            {selectedPoint.name}
          </h4>
          <p className="text-sm text-slate-600 mt-1">
            <strong>{selectedPoint.beneficiaries}</strong> beneficiaries
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {selectedPoint.programs.map((p) => (
              <span
                key={p}
                className="text-xs px-2 py-1 rounded-full bg-primary-50 text-primary-700 font-medium"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="sr-only">
        <h3>Community Locations:</h3>
        <ul>
          {communityData.map((c) => (
            <li key={c.name}>
              {c.name}: {c.beneficiaries} beneficiaries, Programs:{' '}
              {c.programs.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
