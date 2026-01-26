'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Calendar,
  MapPin,
  FileText,
  Shield,
  Eye,
  Target,
  Award,
  Users,
  BookOpen,
  Heart,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { LEADERSHIP, SITE_CONFIG } from '@/lib/constants';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description:
      'Serving the most vulnerable with love, dignity, and respect.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Maintaining transparency, accountability, and sound governance.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Building strong, resilient communities through collaborative action.',
  },
  {
    icon: BookOpen,
    title: 'Empowerment',
    description:
      'Equipping individuals with knowledge, skills, and resources.',
  },
  {
    icon: Eye,
    title: 'Hope',
    description:
      'Inspiring belief in a brighter future for every person we serve.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Striving for the highest quality in all our programs and services.',
  },
];

export default function AboutPage() {
  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden" aria-label="About Hero">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-200 text-sm font-medium mb-6 border border-white/10">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Discover the journey, mission, and people behind Wings of Hope Outreach.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white" aria-label="Our Story">
        <div className="container-custom">
          <div
            ref={storyRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
              storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Image / Logo side */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-100 to-secondary-100" />
                <div className="absolute inset-4 rounded-2xl bg-white shadow-xl flex items-center justify-center p-8">
                  <Image
                    src="/WOHO.png"
                    alt="Wings of Hope Outreach logo — a cross with a dove carrying an olive branch"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold">
                  Est. 2024
                </div>
                <div className="absolute -bottom-4 -left-4 bg-secondary-500 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold">
                  Uganda
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-primary-600">
                Our Beginning
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                Founded on Faith, Driven by Purpose
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Wings of Hope Outreach Limited was officially incorporated on{' '}
                  <strong className="text-slate-800">June 11, 2024</strong>, in
                  the Republic of Uganda as a Company Limited by Guarantee
                  without Share Capital. Registration number:{' '}
                  <strong className="text-slate-800">{SITE_CONFIG.registration}</strong>.
                </p>
                <p>
                  Founded by a group of visionary women — <strong className="text-slate-800">Gabula Hannah</strong>,{' '}
                  <strong className="text-slate-800">Nyende Proscovia</strong>, and{' '}
                  <strong className="text-slate-800">Mutesi Eunice</strong> — the
                  organization was born from a shared conviction that every
                  vulnerable child, youth, and community deserves access to
                  education, healthcare, economic opportunity, and spiritual
                  guidance.
                </p>
                <p>
                  Based in <strong className="text-slate-800">Entebbe, Uganda</strong>,
                  Wings of Hope Outreach operates across 18+ communities,
                  delivering 13 comprehensive programs that address the holistic
                  needs of the people we serve.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: 'Founded', value: 'June 2024' },
                  { icon: MapPin, label: 'Location', value: 'Entebbe, Uganda' },
                  { icon: FileText, label: 'Reg. No.', value: '800346...' },
                  { icon: Target, label: 'Programs', value: '13 Active' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                    >
                      <Icon
                        className="w-5 h-5 text-primary-600 shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-xs text-slate-500 font-medium">
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-slate-800">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 gradient-primary relative overflow-hidden" aria-label="Vision and Mission">
        <div className="absolute inset-0 pattern-dots opacity-5" />
        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-primary-100 leading-relaxed text-lg">
                A Uganda where every vulnerable child, youth, and community has
                access to quality education, healthcare, economic opportunity,
                and spiritual growth — living with dignity and hope.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-primary-100 leading-relaxed text-lg">
                To transform the lives of vulnerable children, youth, and
                communities through comprehensive programs in education,
                healthcare, economic empowerment, foster care, counseling,
                agriculture, and spiritual development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white" aria-label="Core Values">
        <div className="container-custom">
          <SectionHeading
            subtitle="What Guides Us"
            title="Our Core Values"
            description="These principles form the foundation of everything we do at Wings of Hope Outreach."
          />
          <div
            ref={valuesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  hover
                  variant="bordered"
                  className={`text-center transition-all duration-700 ${
                    valuesInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                    <Icon
                      className="w-7 h-7 text-primary-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-50" aria-label="Leadership">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our People"
            title="Leadership Team"
            description="Meet the dedicated individuals leading Wings of Hope Outreach's mission."
          />
          <div
            ref={teamRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {LEADERSHIP.map((person, i) => (
              <Card
                key={person.name}
                hover
                className={`text-center transition-all duration-700 ${
                  teamInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-200 to-secondary-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-heading font-bold text-primary-700">
                    {person.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900">
                  {person.name}
                </h3>
                <p className="text-primary-600 font-medium text-sm mb-3">
                  {person.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {person.bio}
                </p>
                <div className="mt-3 flex items-center justify-center gap-1 text-xs text-slate-500">
                  <MapPin className="w-3 h-3" aria-hidden="true" />
                  {person.location}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
