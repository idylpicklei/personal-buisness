export type ProjectCategory =
  | "content"
  | "ecommerce"
  | "affiliate"
  | "media"
  | "saas"
  | "other";

export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  url?: string;
  status: "active" | "past";
  tags: string[];
};

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All",
  content: "Content",
  ecommerce: "E-Commerce",
  affiliate: "Affiliate",
  media: "Media",
  saas: "SaaS",
  other: "Other",
};

export const projects: Project[] = [
  {
    id: "niche-review-hub",
    name: "Niche Review Hub",
    category: "affiliate",
    description:
      "Authority comparison and review publication targeting high-intent buyers in the home and lifestyle niche.",
    highlights: [
      "Editorial-first product comparisons with FTC-compliant disclosures",
      "Organic search as primary acquisition channel",
      "Consistent conversion performance across seasonal campaigns",
    ],
    metrics: [
      { label: "Monthly Sessions", value: "120K+" },
      { label: "Years Active", value: "4" },
    ],
    status: "active",
    tags: ["SEO", "Affiliate", "Editorial"],
  },
  {
    id: "global-deals-daily",
    name: "Global Deals Daily",
    category: "content",
    description:
      "Curated deals and product discovery platform aggregating offers across multiple affiliate networks.",
    highlights: [
      "Daily content cadence with automated deal ingestion workflows",
      "Email and social distribution driving repeat traffic",
      "Multi-network partner integrations with centralized tracking",
    ],
    metrics: [
      { label: "Newsletter Subscribers", value: "45K+" },
      { label: "Active Markets", value: "6" },
    ],
    status: "active",
    tags: ["Email", "Social", "Affiliate"],
  },
  {
    id: "direct-commerce-brand",
    name: "Direct Commerce Brand",
    category: "ecommerce",
    description:
      "Direct-to-consumer e-commerce brand with lean fulfillment and automated order routing.",
    highlights: [
      "Shopify-based storefront with optimized conversion funnel",
      "Supplier integrations for automated fulfillment",
      "Paid and organic channels driving scalable customer acquisition",
    ],
    metrics: [
      { label: "Markets Served", value: "12" },
      { label: "Fulfillment SLA", value: "48hr" },
    ],
    status: "active",
    tags: ["E-Commerce", "Paid Social", "Supply Chain"],
  },
  {
    id: "industry-insights-weekly",
    name: "Industry Insights Weekly",
    category: "media",
    description:
      "B2B-oriented digital publication delivering weekly analysis and curated product recommendations.",
    highlights: [
      "Long-form editorial content with strong domain authority",
      "Audience built through SEO and partner cross-promotion",
      "Brand-safe placement environment for network approvals",
    ],
    metrics: [
      { label: "Domain Rating", value: "55+" },
      { label: "Monthly Readers", value: "80K+" },
    ],
    status: "active",
    tags: ["SEO", "B2B", "Editorial"],
  },
  {
    id: "comparison-tools-suite",
    name: "Comparison Tools Suite",
    category: "saas",
    description:
      "Interactive comparison tools embedded across content properties to improve engagement and conversion.",
    highlights: [
      "Custom-built widgets integrated into editorial workflows",
      "A/B tested layouts improving click-through rates",
      "Reusable across multiple properties in the portfolio",
    ],
    metrics: [
      { label: "Properties Deployed", value: "8" },
      { label: "CTR Lift", value: "+18%" },
    ],
    status: "active",
    tags: ["SaaS", "Conversion", "Analytics"],
  },
  {
    id: "seasonal-campaign-portal",
    name: "Seasonal Campaign Portal",
    category: "affiliate",
    description:
      "Time-bound campaign microsites optimized for holiday and event-driven affiliate promotions.",
    highlights: [
      "Rapid deployment model for seasonal partner campaigns",
      "Landing pages tuned for paid and organic traffic",
      "Full compliance documentation for network review",
    ],
    metrics: [
      { label: "Campaigns Launched", value: "20+" },
      { label: "Peak Season ROI", value: "3.2x" },
    ],
    status: "past",
    tags: ["Affiliate", "Paid Search", "Landing Pages"],
  },
];

export function getActiveProjects() {
  return projects.filter((project) => project.status === "active");
}

export function getProjectsByCategory(category: ProjectCategory | "all") {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}

export function getPortfolioStats() {
  const active = getActiveProjects();
  const categories = new Set(active.map((project) => project.category));

  return [
    {
      value: String(active.length),
      label: "Active Properties",
      detail: "Built and operated by DC Ventures",
    },
    {
      value: String(categories.size),
      label: "Business Verticals",
      detail: "Content, commerce, affiliate, and more",
    },
    {
      value: String(projects.length),
      label: "Total Projects",
      detail: "Active and completed portfolio work",
    },
    {
      value: "Multi-Channel",
      label: "Acquisition Stack",
      detail: "SEO, email, paid, and partner traffic",
    },
  ];
}

export function getCategoryCounts() {
  const counts: Partial<Record<ProjectCategory, number>> = {};

  for (const project of projects) {
    counts[project.category] = (counts[project.category] ?? 0) + 1;
  }

  return counts;
}
