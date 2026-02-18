'use client';

import { BOOKING_LINKS } from '@/lib/BookingLinks';
import ContactForm from './ContactForm';

export default function FinalCTANew() {
  return (
    <section id="contact" className="py-20 bg-dark-navy text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Still Running Your Business on WhatsApp and Excel?
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Let&apos;s fix that. Get a free audit call — we&apos;ll show you
            exactly where you&apos;re losing time and money.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
          {/* WhatsApp CTA */}
          <div className="text-center flex-1 max-w-sm">
            <p className="font-body text-white/80 mb-6">
              Prefer a quick chat? Message us directly on WhatsApp.
            </p>
            <a
              href={BOOKING_LINKS.WHATSAPP_AUDIT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.78 9.78 0 01-5.29-1.545l-.38-.225-3.937 1.028 1.052-3.828-.249-.394A9.78 9.78 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center">
            <div className="w-px h-48 bg-white/20" />
            <span className="font-body text-white/40 text-sm px-4">or</span>
            <div className="w-px h-48 bg-white/20" />
          </div>
          <div className="md:hidden flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-white/20" />
            <span className="font-body text-white/40 text-sm">or</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Contact Form */}
          <div className="flex-1 max-w-sm flex flex-col items-center">
            <p className="font-body text-white/80 mb-6 text-center">
              Drop your details and we&apos;ll call you back.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
