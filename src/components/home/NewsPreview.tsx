'use client';

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar } from 'lucide-react';
import { NEWS_ARTICLES } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function NewsPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const latestArticles = NEWS_ARTICLES.slice(0, 3);

  return (
    <section className="section-padding bg-slate-50" aria-label="Latest News">
      <div className="container-custom">
        <SectionHeading
          subtitle="Latest Updates"
          title="News & Stories"
          description="Stay informed about our latest programs, community impact, and organizational milestones."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article, i) => (
            <Link
              key={article.id}
              href={`/news`}
              className={`group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image placeholder with gradient */}
              <div className="h-48 relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${
                      ['#0f766e', '#d97706', '#7c3aed'][i]
                    }22 0%, ${
                      ['#0f766e', '#d97706', '#7c3aed'][i]
                    }44 100%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30" aria-hidden="true">
                    {['🏥', '🎓', '💼'][i]}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full text-primary-700">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime={article.date}>
                    {formatDate(article.date)}
                  </time>
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/news">
            <Button variant="outline" size="lg" className="gap-2">
              All News & Updates
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
