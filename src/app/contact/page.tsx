'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Contact Hero">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-200 text-sm font-medium mb-6 border border-white/10">
            Reach Out
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            We would love to hear from you. Get in touch with our team for inquiries,
            partnerships, or to learn more about our work.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-white" aria-label="Contact Information and Form">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Our Location</h3>
                    <p className="text-slate-600 text-sm mt-1">
                      {SITE_CONFIG.address}
                    </p>
                    <p className="text-slate-500 text-sm">Republic of Uganda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-secondary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-primary-600 hover:text-primary-700 text-sm mt-1 block"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-primary-600 hover:text-primary-700 text-sm mt-1 block"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-violet-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Office Hours</h3>
                    <p className="text-slate-600 text-sm mt-1">
                      Monday - Friday: 8:00 AM - 5:00 PM (EAT)
                    </p>
                    <p className="text-slate-500 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Follow Us</h3>
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
                      className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors text-slate-600"
                      aria-label={`Visit our ${label} page`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="bordered" padding="lg">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                      Thank you for reaching out. Our team will review your message and
                      get back to you within 24-48 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="mt-6"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            id="contact-name"
                            {...register('name', { required: 'Name is required' })}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your full name"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            {...register('phone')}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="+256 755 529 003"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-1">
                            Subject *
                          </label>
                          <select
                            id="contact-subject"
                            {...register('subject', { required: 'Subject is required' })}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="donation">Donation</option>
                            <option value="volunteer">Volunteering</option>
                            <option value="partnership">Partnership</option>
                            <option value="sponsorship">Child Sponsorship</option>
                            <option value="media">Media & Press</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.subject && (
                            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          {...register('message', { required: 'Message is required' })}
                          rows={6}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Tell us how we can help..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>
                      <Button type="submit" size="lg" className="gap-2">
                        <Send className="w-5 h-5" aria-hidden="true" />
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50" aria-label="Location Map">
        <div className="container-custom">
          <SectionHeading
            subtitle="Find Us"
            title="Our Location"
            description="P.O. BOX 702144, Entebbe, Uganda."
          />
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="h-96 bg-primary-50 flex items-center justify-center relative">
              <div className="absolute inset-0 pattern-grid opacity-30" />
              <div className="relative z-10 text-center">
                <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-heading font-bold text-slate-900 text-xl mb-2">
                  Wings of Hope Outreach
                </h3>
                <p className="text-slate-600">
                  P.O. BOX 702144, Entebbe, Uganda
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Entebbe+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
