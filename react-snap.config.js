module.exports = {
  include: [
    "/",
    "/about",
    "/services", 
    "/pricing",
    "/contact",
    "/use-cases",
    "/integrations",
    "/industries",
    "/agentic-ai",                // Flagship AI service
    "/crm-automation",            // Service page 1
    "/voice-ai",                  // Service page 2
    "/workflow-automation",       // Service page 3
    "/reporting-automation",      // Service page 4 ✅ NEW
    "/ai-data-processing",        // Service page 5 ✅ NEW
    "/programmatic-seo",          // Service page 6 ✅ NEW
    "/partnerships",
    "/faq",
    "/resources",
    "/case-studies",
    "/workflow-audit",
    "/privacy-policy"
  ],
  skipThirdPartyRequests: true,
  cacheAjaxRequests: false,
  preloadImages: true,
  minifyHtml: {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  }
};