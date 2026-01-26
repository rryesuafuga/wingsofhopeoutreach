'use client';

import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  MapPin,
} from 'lucide-react';
import { PROGRAMS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

function ProgramCard({
  program,
  index,
}: {
  program: (typeof PROGRAMS)[number];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isReversed = index % 2 === 1;

  return (
    <div
      id={program.id}
      ref={ref}
      className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Visual side */}
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div
          className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          style={{ backgroundColor: program.lightColor }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 pattern-grid opacity-30" />

          {/* Central icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-xl"
              style={{
                backgroundColor: program.color + '22',
                border: `2px solid ${program.color}44`,
              }}
            >
              <span className="text-6xl" aria-hidden="true">{program.icon}</span>
            </div>
          </div>

          {/* Stats badges */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-600" aria-hidden="true" />
              <span className="text-sm font-bold text-slate-800">
                {program.impact.beneficiaries}+ beneficiaries
              </span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary-600" aria-hidden="true" />
              <span className="text-sm font-bold text-slate-800">
                {program.impact.communities} communities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className={`${isReversed ? 'lg:order-1' : ''}`}>
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4"
          style={{
            backgroundColor: program.lightColor,
            color: program.color,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: program.color }}
            aria-hidden="true"
          />
          {program.category.replace(/_/g, ' ')}
        </div>

        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
          {program.title}
        </h2>

        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
          {program.description}
        </p>

        <div className="space-y-3 mb-8">
          <h3 className="font-semibold text-slate-800 text-sm uppercase tracking-wider">
            Key Objectives
          </h3>
          {program.objectives.map((obj) => (
            <div key={obj} className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 mt-0.5 shrink-0"
                style={{ color: program.color }}
                aria-hidden="true"
              />
              <span className="text-slate-700">{obj}</span>
            </div>
          ))}
        </div>

        <Link href="/get-involved">
          <Button className="gap-2">
            Support This Program
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Programs Hero">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-200 text-sm font-medium mb-6 border border-white/10">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our Programs
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive programs across 8 key areas, transforming lives and
            building resilient communities in Uganda.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 md:top-20 z-30" aria-label="Program navigation">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {PROGRAMS.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md"
                style={{
                  backgroundColor: program.lightColor,
                  color: program.color,
                }}
              >
                <span aria-hidden="true">{program.icon}</span> {program.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white" aria-label="All Programs">
        <div className="container-custom space-y-24">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-slate-50" aria-label="Programs Summary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Reach"
            title="Programs at a Glance"
            description="A snapshot of our collective impact across all programs."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Beneficiaries', value: '2,920+' },
              { label: 'Active Programs', value: '8' },
              { label: 'Communities Reached', value: '18+' },
              { label: 'Program Categories', value: '13' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-100"
              >
                <div className="text-3xl font-heading font-bold text-primary-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
