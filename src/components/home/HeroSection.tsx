'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Heart, ChevronDown, Play } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 pattern-grid opacity-20" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary-500/10 blur-3xl" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container-custom py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-200 text-sm font-medium mb-6 border border-white/10">
              Inspiring Hope, Transforming Lives
            </span>
          </div>

          <h1
            className={`font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Empowering
            <span className="block text-gradient bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 bg-clip-text text-transparent">
              Vulnerable Communities
            </span>
            in Uganda
          </h1>

          <p
            className={`text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Supporting children, youth, and communities through education,
            healthcare, economic empowerment, and holistic development programs
            across Uganda.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Link href="/get-involved">
              <Button variant="white" size="lg" className="gap-2 w-full sm:w-auto">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Support Our Mission
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              >
                <Play className="w-5 h-5" aria-hidden="true" />
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" aria-hidden="true" />
      </div>
    </section>
  );
}
