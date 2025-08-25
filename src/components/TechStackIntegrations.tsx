// 4. FIXED TechStackIntegrations.tsx - Improve visibility and styling
const integrations = [
  "HubSpot",
  "Salesforce", 
  "Google Ads",
  "Make.com",
  "Zapier",
  "n8n",
  "Twilio",
  "OpenAI",
  "Airtable",
  "Notion",
  "Slack",
  "Microsoft Teams"
];

export const TechStackIntegrations = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Tech Stack & Integrations
          </h3>
          <p className="text-lg text-slate-600">
            Works seamlessly with your existing tools and platforms
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-white/30 rounded"></div>
              </div>
              <p className="text-sm font-medium text-slate-900">{integration}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-slate-600">
            + 100s of other popular business tools
          </p>
        </div>
      </div>
    </section>
  );
};