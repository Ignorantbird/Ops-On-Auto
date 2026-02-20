'use client';

import Image from 'next/image';

const team = [
  {
    photo: '/team-photos/yashdeep.jpg',
    name: 'Yash Bali',
    role: 'Co-Founder & Head of Business',
    what: 'I lead business strategy, client relationships, and product development at OpsOnAuto. I make sure we\'re building systems that actually deliver business value — not just technically impressive solutions.',
    background: [
      'Chief Digital Officer — Andlabs Angel Partners',
      'Head of Global Marketing at multiple organizations (Noida, UP, Haryana)',
      'Leadership roles at SAP India & Microsoft',
      'Social Media Influencer managing campaigns for major brands',
      '15+ years in digital marketing, growth strategy & business development',
    ],
    why: 'After years in corporate and agency world, I saw the same problem everywhere: SMBs were getting terrible automation options — either overpriced agencies or unreliable freelancers. When Sarmistha showed me what she was building, I knew this was the future. We\'re bringing enterprise-quality systems to businesses that have been priced out by traditional agencies.',
    focus: 'Leading Mechanic Assist product strategy and scaling our client base across manufacturing, real estate, and automotive sectors.',
    clients: ['SAP India', 'Microsoft', 'Fortune 500 Companies', 'Digital campaigns across India, US & Europe'],
    color: 'teal' as const,
  },
  {
    photo: '/team-photos/sarmistha.jpg',
    name: 'Sarmistha',
    role: 'Co-Founder & CTO',
    what: 'I design and build your automation systems. From understanding your workflows to deploying the final solution — I handle all technical execution.',
    background: [
      'BTech in AI/ML',
      'Business Analyst — building automated reporting systems across multiple companies',
      'Database management and workflow automation expert',
      'Hands-on with Python, FastAPI, React, SQL, AI/ML integrations',
    ],
    why: 'Working inside companies, I saw the markup agencies were charging — layers of overhead: account managers, salespeople, project managers — all adding cost without adding value. I knew I could deliver the same quality at a fraction of the price by cutting out the bloat.',
    focus: 'Building custom automation systems for growing businesses and developing AI agents that solve real operational problems.',
    tech: ['Python', 'FastAPI', 'React', 'SQL', 'VAPI', 'AssemblyAI', 'Lemur', 'CRM/ERP automation'],
    color: 'orange' as const,
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 bg-light-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark-navy mb-4">
            Meet the Team
          </h2>
          <p className="font-body text-lg text-dark-navy-300 max-w-xl mx-auto">
            Two founders. Combined experience across Fortune 500s and AI engineering.
            The people who actually build your system.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-light-cyan-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Photo + name header */}
              <div
                className="px-6 pt-8 pb-6 flex flex-col items-center text-center"
                style={{
                  background:
                    member.color === 'teal'
                      ? 'linear-gradient(135deg, rgba(23,162,184,0.08), rgba(23,162,184,0.03))'
                      : 'linear-gradient(135deg, rgba(255,107,53,0.08), rgba(255,107,53,0.03))',
                }}
              >
                <div
                  className="w-28 h-28 rounded-full overflow-hidden border-4 mb-4 shadow-md"
                  style={{
                    borderColor: member.color === 'teal' ? '#17a2b8' : '#ff6b35',
                  }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-dark-navy">{member.name}</h3>
                <p
                  className="font-body text-sm font-semibold mt-1"
                  style={{ color: member.color === 'teal' ? '#17a2b8' : '#ff6b35' }}
                >
                  {member.role}
                </p>
              </div>

              <div className="px-6 pb-8 space-y-5">
                {/* What I do */}
                <div>
                  <h4 className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-2">
                    What I Do
                  </h4>
                  <p className="font-body text-sm text-dark-navy-400 leading-relaxed">{member.what}</p>
                </div>

                {/* Background */}
                <div>
                  <h4 className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-2">
                    Background
                  </h4>
                  <ul className="space-y-1.5">
                    {member.background.map((b) => (
                      <li key={b} className="flex items-start gap-2 font-body text-sm text-dark-navy-400">
                        <span
                          className="font-bold mt-0.5 flex-shrink-0"
                          style={{ color: member.color === 'teal' ? '#17a2b8' : '#ff6b35' }}
                        >
                          →
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack (Sarmistha only) */}
                {'tech' in member && member.tech && (
                  <div>
                    <h4 className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-2">
                      Technical Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.tech.map((t) => (
                        <span
                          key={t}
                          className="font-body text-xs px-2.5 py-1 rounded-lg text-white"
                          style={{ backgroundColor: '#17a2b8' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Clients (Yash only) */}
                {'clients' in member && member.clients && (
                  <div>
                    <h4 className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-2">
                      Experience With
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.clients.map((c) => (
                        <span
                          key={c}
                          className="font-body text-xs px-2.5 py-1 rounded-lg bg-light-cyan-100 text-dark-navy"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Why I joined */}
                <div className="bg-light-cyan-50 rounded-xl p-4 border border-light-cyan-200">
                  <h4 className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-2">
                    Why OpsOnAuto
                  </h4>
                  <p className="font-body text-xs text-dark-navy-400 leading-relaxed italic">
                    &ldquo;{member.why}&rdquo;
                  </p>
                </div>

                {/* Current focus */}
                <div>
                  <h4 className="font-heading text-xs font-semibold text-dark-navy-300 uppercase tracking-wide mb-1">
                    Current Focus
                  </h4>
                  <p className="font-body text-sm text-dark-navy-400">{member.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership box */}
        <div
          className="rounded-2xl p-8 text-white text-center"
          style={{ backgroundColor: '#0a1628' }}
        >
          <h3 className="font-heading text-2xl font-bold mb-3">Our Partnership</h3>
          <p className="font-body text-white/70 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
            We combine <strong className="text-white">technical execution</strong> (Sarmistha) with{' '}
            <strong className="text-white">business strategy</strong> (Yash). When you work with
            OpsOnAuto, you get direct access to both — no account managers, no junior developers,
            no layers.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: '⚙️', title: 'Technical Expertise', desc: 'Sarmistha actually builds your system' },
              { icon: '📈', title: 'Business Experience', desc: 'Yash ensures it delivers ROI' },
              { icon: '🤝', title: 'No Middlemen', desc: 'Direct access to both founders' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-heading text-sm font-semibold text-white mb-1">{item.title}</p>
                <p className="font-body text-xs text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
