// src/components/PrivacyContent.tsx - STABLE VERSION WITH PROPER LAYOUT
import { CheckCircle, Shield, Mail } from "lucide-react";

const PrivacyContent = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: "At OpsOnAuto, we are committed to safeguarding your personal and business data. This policy explains how we collect, use, and protect your information in compliance with applicable data protection laws, including GDPR."
    },
    {
      title: "2. Information We Collect",
      content: "We collect the following types of information:",
      items: [
        "Personal Information: Name, email address, phone number, company name.",
        "Business Information: Workflow and operational details for project scoping.",
        "Technical Information: IP address, browser type, cookies, and analytics data."
      ]
    },
    {
      title: "3. How We Use Your Information",
      content: "We use your information to:",
      items: [
        "Respond to your inquiries and service requests.",
        "Deliver automation, AI, and workflow optimization solutions.",
        "Improve our website and service offerings.",
        "Send relevant updates (only if you opt-in)."
      ]
    },
    {
      title: "4. Data Sharing & Third Parties",
      content: "We maintain strict controls over your data:",
      items: [
        "We never sell your personal data.",
        "We only share necessary information with trusted service providers (e.g., HubSpot, Make.com) for project delivery.",
        "All project-related data is covered under NDA agreements when applicable."
      ]
    },
    {
      title: "5. Data Retention & Security",
      content: "Your data security is our priority:",
      items: [
        "We store data securely with encryption measures in place.",
        "We keep your data only as long as it is needed for its intended purpose.",
        "Regular security audits ensure ongoing protection of your information."
      ]
    },
    {
      title: "6. Your Rights",
      content: "You have the right to:",
      items: [
        "Request a copy of your personal data.",
        "Update or correct your information.",
        "Request deletion of your data.",
        "Withdraw consent for communications.",
        "File a complaint with relevant data protection authorities."
      ]
    },
    {
      title: "7. Cookies",
      content: "We use cookies for analytics and website functionality. These help us understand how visitors interact with our site and improve user experience. You can disable cookies in your browser settings if you prefer, though this may limit some website functionality."
    },
    {
      title: "8. International Data Transfers",
      content: "If we transfer your data internationally, we ensure appropriate safeguards are in place, including standard contractual clauses and adequacy decisions where applicable."
    },
    {
      title: "9. Children's Privacy",
      content: "Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will delete it promptly."
    },
    {
      title: "10. Updates to This Policy",
      content: "We may update this privacy policy from time to time. When we do, we will post the updated policy on this page and update the 'Last Updated' date below."
    },
    {
      title: "11. Contact Us",
      content: "For privacy-related inquiries, questions about this policy, or to exercise your rights, please contact us at: privacy@opsonauto.com"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Content sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                </div>
                
                <div className="ml-16">
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    {section.content}
                  </p>
                  
                  {section.items && (
                    <ul className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Last Updated Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-slate-900 text-lg">Last Updated</span>
              </div>
              <p className="text-slate-600 text-lg">
                <strong>August 2025</strong>
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-12 rounded-3xl text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent"></div>
              <div className="absolute top-6 right-6">
                <Mail className="w-8 h-8 text-white/30" />
              </div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">🛡️</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Questions About Your Privacy?</h3>
                <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto leading-relaxed">
                  We're here to help with any privacy-related concerns or questions.
                </p>
                <a 
                  href="mailto:privacy@opsonauto.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Mail className="w-6 h-6" />
                  Contact Our Privacy Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;