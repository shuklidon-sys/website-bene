export interface Pillar {
  title: string;
  slug: string;
  description: string;
}

export const contentPillars: Pillar[] = [
  {
    title: "Group Health Insurance",
    slug: "group-health-insurance",
    description:
      "How group health works, plan types (HMO, PPO, HDHP), and how to choose the right plan.",
  },
  {
    title: "Dental, Vision & Ancillary",
    slug: "dental-vision-ancillary",
    description:
      "Group dental and vision coverage, plus voluntary benefits like accident and critical illness.",
  },
  {
    title: "Life & Disability",
    slug: "life-disability",
    description:
      "Group term life, short- and long-term disability, and voluntary buy-up options.",
  },
  {
    title: "Retirement & Financial Wellness",
    slug: "retirement-financial-wellness",
    description:
      "401(k) basics for employers, plan design, contribution matching, and financial wellness benefits.",
  },
  {
    title: "Tax-Advantaged Accounts",
    slug: "tax-advantaged-accounts",
    description:
      "HSA, FSA, HRA, ICHRA, and QSEHRA — how they work and how they pair with health plans.",
  },
  {
    title: "Choosing, Funding & Complying",
    slug: "choosing-funding-complying",
    description:
      "Building a package by size and budget, understanding costs, open enrollment, and compliance.",
  },
];
