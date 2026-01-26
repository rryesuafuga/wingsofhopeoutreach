'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Heart,
  ArrowUp,
} from 'lucide-react';
import { SITE_CONFIG, PROGRAMS } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative" role="contentinfo">
      {/* Donation CTA Strip */}
      <section className="gradient-primary py-16" aria-label="Call to action">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Make a Difference Today
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
            Your generosity can transform lives. Join us in bringing hope to
            vulnerable children, youth, and communities in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button variant="white" size="lg" className="gap-2">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Donate Now
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-slate-900 text-slate-300">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/WOHO.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 brightness-0 invert"
                />
                <div>
                  <div className="font-heading font-bold text-white text-lg">
                    Wings Of Hope Outreach
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                {SITE_CONFIG.description}
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
                  { icon: Twitter, href: SITE_CONFIG.social.twitter, label: 'Twitter' },
                  { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
                  { icon: Youtube, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
                  { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label={`Visit our ${label} page`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-heading font-bold text-white text-lg mb-6">
                Our Programs
              </h3>
              <ul className="space-y-3">
                {PROGRAMS.slice(0, 6).map((program) => (
                  <li key={program.id}>
                    <Link
                      href={`/programs#${program.id}`}
                      className="text-sm hover:text-primary-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500" aria-hidden="true" />
                      {program.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="font-heading font-bold text-white text-lg mb-6">
                Get Involved
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Make a Donation', href: '/get-involved' },
                  { label: 'Volunteer With Us', href: '/get-involved' },
                  { label: 'Partner With Us', href: '/get-involved' },
                  { label: 'Sponsor a Child', href: '/get-involved' },
                  { label: 'Latest News', href: '/news' },
                  { label: 'Photo Gallery', href: '/gallery' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-primary-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-500" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-bold text-white text-lg mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-start gap-3 text-sm hover:text-primary-400 transition-colors group"
                  >
                    <Mail className="w-4 h-4 mt-0.5 text-primary-400 group-hover:text-primary-300" aria-hidden="true" />
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-start gap-3 text-sm hover:text-primary-400 transition-colors group"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-primary-400 group-hover:text-primary-300" aria-hidden="true" />
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary-400" aria-hidden="true" />
                  <span>{SITE_CONFIG.address}</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <p className="text-xs text-slate-400">
                  Registration No: {SITE_CONFIG.registration}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Company Limited By Guarantee
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Republic of Uganda
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name} Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
