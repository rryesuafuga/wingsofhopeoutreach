'use client';

import { useInView } from 'react-intersection-observer';
import { Heart, MapPin, Target, Users } from 'lucide-react';
import { IMPACT_STATS } from '@/lib/constants';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const iconMap: Record<string, typeof Heart> = {
  heart: Heart,
  'map-pin': MapPin,
  target: Target,
  users: Users,
};

export default function ImpactStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-20 overflow-hidden" aria-label="Impact Statistics">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 pattern-dots opacity-5" />

      <div className="relative z-10 container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-primary-300">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Making a Real Difference
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto" />
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_STATS.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Heart;
            return (
              <div
                key={stat.label}
                className={`text-center group transition-all duration-700 ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary-200" aria-hidden="true" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <div className="text-primary-200 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
