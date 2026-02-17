'use client';

import { Mail, MapPin, Shield, Lock, Globe, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { PrimaryCTA } from "@/components/cta/StandardizedCTA";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold text-white">OpsOnAuto</span>
            </div>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              AI automation & agentic AI workflows that remove repetitive work.
            </p>
            <div className="flex items-center space-x-4 text-sm text-white/70">
              <div className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                <span>NDA-Safe</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-3 h-3 mr-1" />
                <span>Secure</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-3 h-3 mr-1" />
                <span>GDPR Aware</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/pricing" className="text-white/80 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/industries" className="text-white/80 hover:text-white transition-colors text-sm">Industries</Link></li>
              <li><Link href="/case-studies" className="text-white/80 hover:text-white transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/resources" className="text-white/80 hover:text-white transition-colors text-sm">Resources</Link></li>
              <li><Link href="/faq" className="text-white/80 hover:text-white transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/agentic-ai" className="text-white/80 hover:text-white transition-colors text-sm">Agentic AI</Link></li>
              <li><Link href="/integrations" className="text-white/80 hover:text-white transition-colors text-sm">Integrations</Link></li>
              <li><Link href="/use-cases" className="text-white/80 hover:text-white transition-colors text-sm">Use Cases</Link></li>
              <li><Link href="/partnerships" className="text-white/80 hover:text-white transition-colors text-sm">Partnerships</Link></li>
              <li><Link href="/privacy-policy" className="text-white/80 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-white/80 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@opsonauto.com" className="hover:text-white transition-colors">
                  info@opsonauto.com
                </a>
              </div>
              <div className="flex items-center text-white/80 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Based in India, serving clients worldwide</span>
              </div>
            </div>

            <div className="mb-6">
              <PrimaryCTA label="Get Started" icon="calendar" className="w-full" />
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <p className="text-white/60 text-sm">
            © 2025 OpsOnAuto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
