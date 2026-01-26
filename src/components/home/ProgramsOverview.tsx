'use client';

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { PROGRAMS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function ProgramsOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section-padding bg-slate-50 pattern-grid" aria-label="Our Programs">
      <div className="container-custom">
        <SectionHeading
          subtitle="What We Do"
          title="Our Programs"
          description="We deliver comprehensive programs across 8 key areas, reaching thousands of beneficiaries in communities across Uganda."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, i) => (
            <Link
              key={program.id}
              href={`/programs#${program.id}`}
              className={`group relative bg-white rounded-xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: program.color }}
                aria-hidden="true"
              />

              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ backgroundColor: program.lightColor }}
                  aria-hidden="true"
                >
                  {program.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                    {program.shortTitle}
                  </h3>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {program.impact.beneficiaries}+ beneficiaries
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {program.description}
              </p>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/programs">
            <Button variant="outline" size="lg" className="gap-2">
              View All Programs
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
