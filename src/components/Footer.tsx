import { Mail, MapPin, Shield, Lock, Globe, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/80 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-white/80 hover:text-white transition-colors text-sm">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/80 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/80 hover:text-white transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/agentic-ai" className="text-white/80 hover:text-white transition-colors text-sm">
                  Agentic AI
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-white/80 hover:text-white transition-colors text-sm">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-white/80 hover:text-white transition-colors text-sm">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-white/80 hover:text-white transition-colors text-sm">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
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

// Add this to your Footer component (src/components/Footer.tsx)

const CopyrightNotice = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-gray-200 mt-8 pt-8 text-center">
      <p className="text-sm text-gray-600 mb-2">
        © {currentYear} Ops On Auto. All rights reserved.
      </p>
      <p className="text-xs text-gray-500">
        Unauthorized copying, distribution, or use of this content is strictly prohibited.
      </p>
      <div className="flex justify-center space-x-4 mt-3 text-xs">
        <a href="/privacy-policy" className="text-gray-500 hover:text-gray-700">
          Privacy Policy
        </a>
        <span className="text-gray-300">•</span>
        <a href="/terms-of-service" className="text-gray-500 hover:text-gray-700">
          Terms of Service
        </a>
        <span className="text-gray-300">•</span>
        <span className="text-gray-500">
          Made with ❤️ at <a href="https://opsonauto.com" className="hover:text-gray-700">opsonauto.com</a>
        </span>
      </div>
    </div>
  );
};

