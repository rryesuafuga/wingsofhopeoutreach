'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100'
          : 'bg-white shadow-sm'
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label={`${SITE_CONFIG.name} - Home`}
          >
            <Image
              src="/WOHO.png"
              alt=""
              width={48}
              height={48}
              className="h-10 w-10 md:h-12 md:w-12"
              priority
            />
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-primary-800 text-base md:text-lg leading-tight">
                Wings of Hope
              </div>
              <div className="text-xs text-primary-600 tracking-wide font-medium">
                Outreach
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname === link.href
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-slate-600 hover:text-primary-700 hover:bg-primary-50/50'
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/get-involved" className="hidden md:block">
              <Button size="sm" className="gap-2">
                <Heart className="w-4 h-4" aria-hidden="true" />
                Donate Now
              </Button>
            </Link>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white/98 backdrop-blur-md z-40 transition-all duration-300',
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
        aria-hidden={!isMenuOpen}
      >
        <div className="container-custom py-6 space-y-2 overflow-y-auto max-h-full">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block px-4 py-3 rounded-xl text-lg font-medium transition-all',
                pathname === link.href
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-slate-700 hover:bg-slate-50'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <Link href="/get-involved">
              <Button className="w-full gap-2" size="lg">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
