'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number')
    .regex(/^[+\d\s()-]+$/, 'Enter a valid phone number'),
  problem: z.string().min(10, 'Tell us a bit more about the problem'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');

      toast.success("We've received your details! We'll reach out within 24 hours.");
      reset();
    } catch {
      toast.error('Something went wrong. Please try WhatsApp instead.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
      <div>
        <input
          {...register('name')}
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 font-body focus:outline-none focus:ring-2 focus:ring-accent-orange"
        />
        {errors.name && (
          <p className="text-accent-orange-300 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('phone')}
          placeholder="Phone Number"
          type="tel"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 font-body focus:outline-none focus:ring-2 focus:ring-accent-orange"
        />
        {errors.phone && (
          <p className="text-accent-orange-300 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('problem')}
          placeholder="What's the biggest operational headache in your business?"
          rows={3}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 font-body focus:outline-none focus:ring-2 focus:ring-accent-orange resize-none"
        />
        {errors.problem && (
          <p className="text-accent-orange-300 text-xs mt-1">{errors.problem.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-accent-orange hover:bg-accent-orange-600 disabled:opacity-60 text-white font-heading font-semibold py-3 rounded-lg transition-colors"
      >
        {submitting ? 'Sending...' : 'Send My Details'}
      </button>
    </form>
  );
}
