'use client';

import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

const stories = [
  {
    quote:
      'Wings of Hope Outreach gave my children a chance to go back to school. We now have hope for a brighter future.',
    name: 'Sarah M.',
    role: 'Mother of 3, Wakiso',
    program: 'Education',
  },
  {
    quote:
      'The vocational training program taught me tailoring skills. I now run my own small business and support my family.',
    name: 'Joseph K.',
    role: 'Youth Trainee, Age 22',
    program: 'Vocational Training',
  },
  {
    quote:
      'Through the microfinance savings group, I was able to start a small poultry farm. My income has tripled.',
    name: 'Grace N.',
    role: 'Women\'s Group Member',
    program: 'Economic Empowerment',
  },
];

export default function StoriesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-white" aria-label="Success Stories">
      <div className="container-custom">
        <SectionHeading
          subtitle="Stories of Hope"
          title="Lives We Have Touched"
          description="Real stories from the communities we serve, showing the transformative power of hope and compassion."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <Card
              key={story.name}
              variant="bordered"
              hover
              padding="lg"
              className={`relative transition-all duration-700 ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <Quote
                className="w-10 h-10 text-primary-200 mb-4"
                aria-hidden="true"
              />
              <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-lg" aria-hidden="true">
                    {story.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {story.name}
                  </div>
                  <div className="text-sm text-slate-500">{story.role}</div>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <span className="text-xs font-bold tracking-wider uppercase text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {story.program}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
