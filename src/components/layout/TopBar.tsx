'use client';

import { SITE_CONFIG } from '@/lib/constants';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary-900 text-primary-100 text-sm hidden md:block">
      <div className="container-custom flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label={`Email us at ${SITE_CONFIG.email}`}
          >
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{SITE_CONFIG.email}</span>
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label={`Call us at ${SITE_CONFIG.phone}`}
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{SITE_CONFIG.phone}</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{SITE_CONFIG.address}</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
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
              className="hover:text-white transition-colors p-1"
              aria-label={`Visit our ${label} page`}
            >
              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
