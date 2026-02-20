'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  business: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  source: string;
};

const initialState: FormState = {
  name: '',
  business: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
  source: '',
};

const interestOptions = [
  'Free Business Audit',
  'Quick Win Package (₹49k)',
  'Starter Package (₹99k)',
  'Growth Package (₹1.99L)',
  'General Question',
  'Partnership Inquiry',
];

const sourceOptions = [
  'Google Search',
  'LinkedIn',
  'Referral',
  'Social Media',
  'Other',
];

export default function ContactFormNew() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.business.trim()) e.business = 'Business name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Valid email is required';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10)
      e.phone = 'Valid phone number is required';
    if (!form.interest) e.interest = 'Please select an option';
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm(initialState);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full font-body text-sm text-dark-navy bg-white border rounded-xl px-4 py-3 outline-none transition-all focus:ring-2 ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200'
        : 'border-light-cyan-200 focus:border-brand-teal focus:ring-brand-teal-100'
    }`;

  return (
    <section className="py-14 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-dark-navy mb-2">
            Send Us a Message
          </h2>
          <p className="font-body text-dark-navy-300 text-sm">
            Prefer a form? We read every submission and reply within 24 hours.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center bg-light-cyan-50 border border-brand-teal-200 rounded-2xl p-10">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-heading text-xl font-bold text-dark-navy mb-2">Message Received!</h3>
            <p className="font-body text-dark-navy-300 text-sm">
              We&apos;ll get back to you within 24 hours. For faster responses, WhatsApp us directly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-light-cyan-50 rounded-2xl border border-light-cyan-200 p-8 space-y-5" noValidate>

            {/* Name + Business */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-heading text-sm font-semibold text-dark-navy block mb-1.5">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClass('name')}
                />
                {errors.name && <p className="font-body text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="font-heading text-sm font-semibold text-dark-navy block mb-1.5">
                  Business Name <span className="text-red-400">*</span>
                </label>
                <input
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className={inputClass('business')}
                />
                {errors.business && <p className="font-body text-xs text-red-500 mt-1">{errors.business}</p>}
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-heading text-sm font-semibold text-dark-navy block mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={inputClass('email')}
                />
                {errors.email && <p className="font-body text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="font-heading text-sm font-semibold text-dark-navy block mb-1.5">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClass('phone')}
                />
                {errors.phone && <p className="font-body text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Interest */}
            <div>
              <label className="font-heading text-sm font-semibold text-dark-navy block mb-1.5">
                What do you need help with? <span className="text-red-400">*</span>
              </label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className={inputClass('interest')}
              >
                <option value="">Select an option…</option>
                {interestOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              {errors.interest && <p className="font-body text-xs text-red-500 mt-1">{errors.interest}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="font-heading text-sm font-semibold text-dark-navy block mb-1.5">
                Tell us about your business{' '}
                <span className="font-normal text-dark-navy-300">(optional)</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="What industry are you in? What manual processes are slowing you down?"
                className={`${inputClass('message')} resize-none`}
              />
            </div>

            {/* Source */}
            <div>
              <label className="font-heading text-sm font-semibold text-dark-navy block mb-1.5">
                How did you hear about us?{' '}
                <span className="font-normal text-dark-navy-300">(optional)</span>
              </label>
              <select
                name="source"
                value={form.source}
                onChange={handleChange}
                className={inputClass('source')}
              >
                <option value="">Select…</option>
                {sourceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-xl font-heading font-semibold text-white text-base transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#17a2b8' }}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p className="font-body text-xs text-red-500 text-center">
                Something went wrong. Please try WhatsApp or email us directly.
              </p>
            )}

            <p className="font-body text-xs text-dark-navy-300 text-center">
              By submitting this form, you agree to receive communication from OpsOnAuto.
              We&apos;ll never spam you or share your information.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
