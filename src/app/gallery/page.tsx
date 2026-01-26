'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn, Filter } from 'lucide-react';
import { GALLERY_IMAGES, CB_SAFE_COLORS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

const categories = [
  'All',
  'Healthcare',
  'Education',
  'Vocational Training',
  'Agriculture',
  'Foster Care',
  'Economic Empowerment',
  'Counseling',
  'Spiritual',
  'Events',
];

// Generate placeholder visual content for gallery items
const galleryItems = GALLERY_IMAGES.map((img, i) => ({
  ...img,
  color: CB_SAFE_COLORS[i % CB_SAFE_COLORS.length],
  pattern: ['circles', 'squares', 'triangles', 'lines'][i % 4],
}));

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = galleryItems.filter(
    (img) => selectedCategory === 'All' || img.category === selectedCategory
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Gallery Hero">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-200 text-sm font-medium mb-6 border border-white/10">
            Visual Stories
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Moments captured from our programs, events, and community outreach
            activities across Uganda.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-20 md:top-24 z-30" aria-label="Gallery filters">
        <div className="container-custom">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
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
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white" aria-label="Photo Gallery">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">
                No photos found for this category.
              </p>
            </div>
          ) : (
            <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => openLightbox(i)}
                  className={`group relative rounded-xl overflow-hidden aspect-[4/3] transition-all duration-700 focus:ring-2 focus:ring-primary-500 ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    backgroundColor: item.color + '15',
                  }}
                  aria-label={`View: ${item.alt}`}
                >
                  {/* Decorative pattern background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}22 0%, ${item.color}44 50%, ${item.color}22 100%)`,
                    }}
                  />
                  <div className="absolute inset-0 pattern-grid opacity-30" />

                  {/* Central icon area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: item.color + '20',
                        border: `2px solid ${item.color}40`,
                      }}
                    >
                      <span className="text-4xl" aria-hidden="true">
                        {
                          {
                            Healthcare: '🏥',
                            Education: '📚',
                            'Vocational Training': '🔧',
                            Agriculture: '🌾',
                            'Foster Care': '🏠',
                            'Economic Empowerment': '💼',
                            Counseling: '💬',
                            Spiritual: '✝️',
                            Events: '🎉',
                          }[item.category]
                        }
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Category label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span
                      className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-8"
          role="dialog"
          aria-label="Image lightbox"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          <div className="max-w-3xl w-full">
            <div
              className="aspect-[16/10] rounded-2xl overflow-hidden relative"
              style={{
                backgroundColor:
                  filtered[lightboxIndex]?.color + '20',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${
                    filtered[lightboxIndex]?.color
                  }33 0%, ${filtered[lightboxIndex]?.color}55 100%)`,
                }}
              />
              <div className="absolute inset-0 pattern-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-32 h-32 rounded-3xl flex items-center justify-center"
                  style={{
                    backgroundColor:
                      filtered[lightboxIndex]?.color + '30',
                    border: `2px solid ${filtered[lightboxIndex]?.color}50`,
                  }}
                >
                  <span className="text-6xl" aria-hidden="true">
                    {
                      {
                        Healthcare: '🏥',
                        Education: '📚',
                        'Vocational Training': '🔧',
                        Agriculture: '🌾',
                        'Foster Care': '🏠',
                        'Economic Empowerment': '💼',
                        Counseling: '💬',
                        Spiritual: '✝️',
                        Events: '🎉',
                      }[filtered[lightboxIndex]?.category ?? '']
                    }
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-medium">
                {filtered[lightboxIndex]?.alt}
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Category: {filtered[lightboxIndex]?.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
