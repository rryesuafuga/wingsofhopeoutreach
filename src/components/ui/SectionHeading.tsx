'use client';

import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        'mb-12 md:mb-16 transition-all duration-700',
        align === 'center' ? 'text-center' : 'text-left',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            'inline-block text-sm font-bold tracking-widest uppercase mb-3',
            light ? 'text-primary-300' : 'text-primary-600'
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          'font-heading font-bold',
          light ? 'text-white' : 'text-slate-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg max-w-3xl leading-relaxed',
            align === 'center' && 'mx-auto',
            light ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          'mt-6 h-1 w-20 rounded-full',
          align === 'center' && 'mx-auto',
          light
            ? 'bg-gradient-to-r from-primary-400 to-secondary-400'
            : 'bg-gradient-to-r from-primary-500 to-secondary-500'
        )}
      />
    </div>
  );
}
