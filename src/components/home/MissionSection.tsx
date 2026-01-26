'use client';

import { useInView } from 'react-intersection-observer';
import { Heart, Users, Shield, BookOpen } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

const pillars = [
  {
    icon: Heart,
    title: 'Compassion',
    description:
      'We are driven by deep care for the most vulnerable — orphans, widows, youth, and underserved communities in Uganda.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: BookOpen,
    title: 'Empowerment',
    description:
      'Through education, vocational training, and economic programs, we equip individuals with skills for sustainable livelihoods.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'We build strong communities through healthcare, counseling, agriculture, and spiritual development programs.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Transparency, sound governance, and financial accountability guide every aspect of our operations.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function MissionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-white" aria-label="Our Mission">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Mission"
          title="Inspiring Hope, Transforming Lives"
          description="Wings of Hope Outreach exists to transform the lives of vulnerable children, youth, and communities in Uganda through holistic programs spanning education, health, economic empowerment, and spiritual growth."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                hover
                variant="bordered"
                className={`text-center transition-all duration-700 ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 ${pillar.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                >
                  <Icon className={`w-8 h-8 ${pillar.color}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
