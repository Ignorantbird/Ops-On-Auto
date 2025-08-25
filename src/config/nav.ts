export interface NavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "AI Solutions", href: "/agentic-ai", ariaLabel: "AI Solutions (Agentic AI)" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Integrations", href: "/integrations" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];