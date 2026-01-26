'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, Tag, Search } from 'lucide-react';
import { NEWS_ARTICLES } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import Card from '@/components/ui/Card';

const categories = [
  'All',
  'Healthcare',
  'Education',
  'Economic Empowerment',
  'Foster Care',
  'Agriculture',
  'Milestone',
];

const categoryColors: Record<string, string> = {
  Healthcare: '#D97706',
  Education: '#0F766E',
  'Economic Empowerment': '#7C3AED',
  'Foster Care': '#DC2626',
  Agriculture: '#DB2777',
  Milestone: '#2563EB',
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredArticles = NEWS_ARTICLES.filter((a) => {
    const matchesCategory =
      selectedCategory === 'All' || a.category === selectedCategory;
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" aria-label="News Hero">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-200 text-sm font-medium mb-6 border border-white/10">
            Stay Updated
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            News & Updates
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            The latest stories, updates, and milestones from Wings of Hope
            Outreach.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 md:top-20 z-30" aria-label="Article filters">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                aria-label="Search articles"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-white" aria-label="News Articles">
        <div className="container-custom">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, i) => (
                <Card
                  key={article.id}
                  hover
                  padding="none"
                  className={`group overflow-hidden transition-all duration-700 ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Image */}
                  <div className="h-52 relative overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${
                          categoryColors[article.category] || '#0F766E'
                        }22 0%, ${
                          categoryColors[article.category] || '#0F766E'
                        }44 100%)`,
                      }}
                    />
                    <div className="absolute inset-0 pattern-grid opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Tag
                          className="w-10 h-10"
                          style={{ color: categoryColors[article.category] || '#0F766E' }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: categoryColors[article.category] || '#0F766E',
                          color: 'white',
                        }}
                      >
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
                    <h3 className="font-heading font-bold text-slate-900 text-lg mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                      Read full story
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
