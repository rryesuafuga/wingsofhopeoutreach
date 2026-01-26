'use client';

import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import {
  Heart,
  MapPin,
  Target,
  Users,
  TrendingUp,
  Award,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Card from '@/components/ui/Card';

const ProgramWheel = dynamic(
  () => import('@/components/visualizations/ProgramWheel'),
  { ssr: false }
);
const ImpactTimeline = dynamic(
  () => import('@/components/visualizations/ImpactTimeline'),
  { ssr: false }
);
const SankeyDiagram = dynamic(
  () => import('@/components/visualizations/SankeyDiagram'),
  { ssr: false }
);
const ImpactBarChart = dynamic(
  () => import('@/components/visualizations/ImpactBarChart'),
  { ssr: false }
);
const CommunityMap = dynamic(
  () => import('@/components/visualizations/CommunityMap'),
  { ssr: false }
);

const dashboardStats = [
  { icon: Heart, label: 'Total Lives Impacted', value: 2920, suffix: '+', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: MapPin, label: 'Communities Served', value: 18, suffix: '+', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Target, label: 'Active Programs', value: 13, suffix: '', color: 'text-primary-600', bg: 'bg-primary-50' },
  { icon: Users, label: 'Active Volunteers', value: 85, suffix: '+', color: 'text-violet-600', bg: 'bg-violet-50' },
  { icon: TrendingUp, label: 'Growth Rate', value: 150, suffix: '%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Award, label: 'Success Rate', value: 94, suffix: '%', color: 'text-amber-600', bg: 'bg-amber-50' },
];

export default function ImpactPage() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Impact Hero">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-200 text-sm font-medium mb-6 border border-white/10">
            Measuring What Matters
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our Impact
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Interactive data visualizations showcasing how Wings of Hope Outreach
            is transforming lives and communities across Uganda.
          </p>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="py-16 bg-white" aria-label="Impact Dashboard">
        <div className="container-custom">
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {dashboardStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.label}
                  variant="bordered"
                  padding="sm"
                  className={`text-center transition-all duration-700 ${
                    statsInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon className={`w-5 h-5 ${stat.color}`} aria-hidden="true" />
                  </div>
                  <div className="text-2xl font-heading font-bold text-slate-900">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Wheel */}
      <section className="section-padding bg-slate-50" aria-label="Program Distribution">
        <div className="container-custom">
          <SectionHeading
            subtitle="Program Distribution"
            title="Programs at a Glance"
            description="Explore our 8 key program areas and their relative reach. Hover over each segment to learn more."
          />
          <div className="max-w-2xl mx-auto">
            <ProgramWheel />
          </div>
        </div>
      </section>

      {/* Impact Bar Chart */}
      <section className="section-padding bg-white" aria-label="Beneficiary Impact">
        <div className="container-custom">
          <SectionHeading
            subtitle="By the Numbers"
            title="Beneficiaries by Program"
            description="A comparison of beneficiary reach across all our program areas, showing the breadth of our impact."
          />
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-6">
            <ImpactBarChart />
          </div>
        </div>
      </section>

      {/* Community Map */}
      <section className="section-padding bg-slate-50" aria-label="Community Reach">
        <div className="container-custom">
          <SectionHeading
            subtitle="Geographic Reach"
            title="Communities We Serve"
            description="Explore the communities across Wakiso District and surrounding areas where our programs are making an impact."
          />
          <div className="max-w-4xl mx-auto">
            <CommunityMap />
          </div>
        </div>
      </section>

      {/* Resource Flow (Sankey) */}
      <section className="section-padding bg-white" aria-label="Resource Flow">
        <div className="container-custom">
          <SectionHeading
            subtitle="Resource Allocation"
            title="How Resources Flow"
            description="This diagram shows how funding from various sources flows through our programs to reach beneficiaries. Hover over nodes to highlight connections."
          />
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 p-6">
            <SankeyDiagram />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50" aria-label="Organization Timeline">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones & Achievements"
            description="Key milestones, program launches, and achievements in our journey of inspiring hope and transforming lives."
          />
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <ImpactTimeline />
          </div>
        </div>
      </section>

      {/* Colorblind Accessibility Note */}
      <section className="py-12 bg-primary-50" aria-label="Accessibility Information">
        <div className="container-custom text-center">
          <h3 className="font-heading font-bold text-primary-900 text-xl mb-3">
            Accessibility-First Visualizations
          </h3>
          <p className="text-primary-700 max-w-2xl mx-auto text-sm leading-relaxed">
            All visualizations use a colorblind-safe palette (IBM Design) with
            distinct patterns, shapes, and labels. Data is also available as
            accessible text for screen readers. We strive for WCAG 2.1 AA
            compliance in every visualization.
          </p>
        </div>
      </section>
    </>
  );
}
