'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import {
  Heart,
  HandHeart,
  Users,
  Building2,
  Baby,
  ArrowRight,
  CheckCircle2,
  Globe,
  Mail,
  Phone,
  DollarSign,
  Banknote,
  CreditCard,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const involvementOptions = [
  {
    id: 'donate',
    icon: Heart,
    title: 'Make a Donation',
    subtitle: 'Support our mission financially',
    description:
      'Your financial contribution directly supports vulnerable children, healthcare programs, education initiatives, and community development in Uganda.',
    benefits: [
      'Tax-deductible contributions',
      '100% goes to programs',
      'Monthly or one-time options',
      'Impact reports provided',
    ],
    color: 'text-red-600',
    bg: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    id: 'volunteer',
    icon: HandHeart,
    title: 'Volunteer With Us',
    subtitle: 'Give your time and skills',
    description:
      'Join our team of dedicated volunteers. Whether on-site in Uganda or remotely, your skills and time make a real difference.',
    benefits: [
      'Flexible scheduling options',
      'Remote & on-site roles',
      'Training provided',
      'Certificate of service',
    ],
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    borderColor: 'border-primary-200',
  },
  {
    id: 'partner',
    icon: Building2,
    title: 'Partner With Us',
    subtitle: 'Institutional partnerships',
    description:
      'Organizations, churches, businesses, and NGOs can partner with us to amplify impact through collaborative programs and shared resources.',
    benefits: [
      'Co-branded initiatives',
      'Joint impact reporting',
      'Strategic alignment',
      'Shared resources & expertise',
    ],
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'sponsor',
    icon: Baby,
    title: 'Sponsor a Child',
    subtitle: 'Transform a young life',
    description:
      'Provide education, healthcare, nutrition, and emotional support to a specific child through our sponsorship program.',
    benefits: [
      'Personal connection with child',
      'Regular progress updates',
      'Letters & photos exchanged',
      'Covers education & healthcare',
    ],
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    borderColor: 'border-violet-200',
  },
];

const donationAmounts = [25, 50, 100, 250, 500, 1000];

interface VolunteerFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState('donate');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { ref: optionsRef, inView: optionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VolunteerFormData>();

  const onSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Get Involved Hero">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-200 text-sm font-medium mb-6 border border-white/10">
            Make a Difference
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Get Involved
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            There are many ways to support our mission. Whether through
            donations, volunteering, partnerships, or child sponsorship — your
            contribution matters.
          </p>
        </div>
      </section>

      {/* Involvement Options */}
      <section className="section-padding bg-white" aria-label="Ways to Get Involved">
        <div className="container-custom">
          <SectionHeading
            subtitle="Ways to Help"
            title="Choose How You Want to Help"
            description="Every contribution, big or small, helps us bring hope to vulnerable communities in Uganda."
          />

          <div
            ref={optionsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {involvementOptions.map((option, i) => {
              const Icon = option.icon;
              const isActive = activeTab === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  className={`text-left p-6 rounded-xl border-2 transition-all duration-500 ${
                    isActive
                      ? `${option.borderColor} shadow-lg scale-[1.02]`
                      : 'border-slate-200 hover:border-slate-300'
                  } ${
                    optionsInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  aria-pressed={isActive}
                >
                  <div className={`w-12 h-12 ${option.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${option.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
                    {option.title}
                  </h3>
                  <p className="text-sm text-slate-500">{option.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'donate' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                    Make a Donation
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {involvementOptions[0].description}
                  </p>
                  <div className="space-y-3">
                    {involvementOptions[0].benefits.map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" aria-hidden="true" />
                        <span className="text-slate-700">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Card variant="bordered" padding="lg">
                  <h4 className="font-heading font-bold text-slate-900 text-xl mb-6">
                    Select Amount
                  </h4>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-3 rounded-lg font-bold text-lg transition-all ${
                          selectedAmount === amount
                            ? 'bg-primary-600 text-white shadow-lg'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="custom-amount" className="block text-sm font-medium text-slate-700 mb-2">
                      Or enter custom amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                      <input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
                        onChange={(e) =>
                          setSelectedAmount(Number(e.target.value) || null)
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <h5 className="text-sm font-medium text-slate-700">Payment Methods</h5>
                    <div className="flex gap-3">
                      {[
                        { icon: CreditCard, label: 'Card' },
                        { icon: Banknote, label: 'Bank' },
                        { icon: Phone, label: 'Mobile Money' },
                      ].map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex-1 p-3 border border-slate-200 rounded-lg text-center hover:border-primary-300 transition-colors cursor-pointer"
                        >
                          <Icon className="w-5 h-5 mx-auto mb-1 text-slate-600" aria-hidden="true" />
                          <span className="text-xs text-slate-600 font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full gap-2" size="lg">
                    <Heart className="w-5 h-5" aria-hidden="true" />
                    Donate {selectedAmount ? `$${selectedAmount}` : 'Now'}
                  </Button>
                  <p className="text-xs text-slate-500 text-center mt-3">
                    Secure payment processing. All donations are tax-deductible.
                  </p>
                </Card>
              </div>
            )}

            {activeTab === 'volunteer' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                    Volunteer With Us
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {involvementOptions[1].description}
                  </p>
                  <div className="space-y-3">
                    {involvementOptions[1].benefits.map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" aria-hidden="true" />
                        <span className="text-slate-700">{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-primary-50 rounded-xl">
                    <h4 className="font-bold text-primary-800 mb-2">Volunteer Roles</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Teaching', 'Healthcare', 'Fundraising', 'Administration', 'Social Media', 'IT Support', 'Counseling', 'Agriculture'].map((role) => (
                        <span key={role} className="px-3 py-1 bg-white rounded-full text-sm text-primary-700 font-medium">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Card variant="bordered" padding="lg">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" aria-hidden="true" />
                      </div>
                      <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">
                        Thank You!
                      </h4>
                      <p className="text-slate-600">
                        We have received your volunteer application. Our team will
                        contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <h4 className="font-heading font-bold text-slate-900 text-xl mb-2">
                        Volunteer Application
                      </h4>
                      <div>
                        <label htmlFor="vol-name" className="block text-sm font-medium text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          id="vol-name"
                          {...register('name', { required: 'Name is required' })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="vol-email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          id="vol-email"
                          type="email"
                          {...register('email', { required: 'Email is required' })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="vol-interest" className="block text-sm font-medium text-slate-700 mb-1">
                          Area of Interest
                        </label>
                        <select
                          id="vol-interest"
                          {...register('interest')}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="">Select an area</option>
                          <option value="teaching">Teaching & Education</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="fundraising">Fundraising</option>
                          <option value="admin">Administration</option>
                          <option value="it">IT & Social Media</option>
                          <option value="counseling">Counseling</option>
                          <option value="agriculture">Agriculture</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="vol-message" className="block text-sm font-medium text-slate-700 mb-1">
                          Tell Us About Yourself
                        </label>
                        <textarea
                          id="vol-message"
                          {...register('message')}
                          rows={4}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Share your skills, availability, and motivation..."
                        />
                      </div>
                      <Button type="submit" className="w-full gap-2" size="lg">
                        Submit Application
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                      </Button>
                    </form>
                  )}
                </Card>
              </div>
            )}

            {activeTab === 'partner' && (
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                  Partnership Opportunities
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {involvementOptions[2].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {involvementOptions[2].benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3 text-left">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={`mailto:${SITE_CONFIG.email}`}>
                    <Button className="gap-2" size="lg">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                      Email Us
                    </Button>
                  </a>
                  <a href={`tel:${SITE_CONFIG.phone}`}>
                    <Button variant="outline" className="gap-2" size="lg">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      Call Us
                    </Button>
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'sponsor' && (
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Baby className="w-10 h-10 text-violet-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                  Sponsor a Child
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {involvementOptions[3].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {involvementOptions[3].benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3 text-left">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-violet-50 rounded-xl p-6 mb-8">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { amount: '$30/mo', label: 'Basic Support' },
                      { amount: '$50/mo', label: 'Standard Support' },
                      { amount: '$100/mo', label: 'Full Support' },
                    ].map((plan) => (
                      <div key={plan.label} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-heading font-bold text-violet-700">
                          {plan.amount}
                        </div>
                        <div className="text-sm text-slate-600">{plan.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="gap-2" size="lg">
                  <Heart className="w-5 h-5" aria-hidden="true" />
                  Start Sponsoring
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-slate-50" aria-label="Transparency">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
            Full Transparency & Accountability
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            We are committed to transparent use of all funds. Every donor receives
            detailed impact reports showing exactly how their contribution made a
            difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { icon: Globe, label: 'Registered NGO' },
              { icon: FileIcon, label: 'Annual Reports' },
              { icon: Shield2, label: 'Audited Finances' },
              { icon: CheckCircle2, label: '94% Program Spend' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                <Icon className="w-4 h-4 text-primary-600" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { FileText as FileIcon, ShieldCheck as Shield2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
