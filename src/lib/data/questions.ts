export interface Question {
  question: string;
  href: string;
}

export const popularQuestions: Question[] = [
  {
    question: "How much does health insurance cost for a small business?",
    href: "/learn/group-health-insurance/employer-cost-contribution-basics",
  },
  {
    question: "Do I have to offer benefits to my employees?",
    href: "/learn/choosing-funding-complying/compliance-essentials",
  },
  {
    question: "ICHRA vs. Group Insurance — what's the difference?",
    href: "/learn/tax-advantaged-accounts/hra-ichra-qsehra",
  },
  {
    question: "What benefits do employees actually value most?",
    href: "/learn/choosing-funding-complying/building-benefits-package",
  },
  {
    question: "Can I reimburse employees instead of offering a plan?",
    href: "/learn/tax-advantaged-accounts/reimburse-employees-insurance",
  },
  {
    question: "How much should I contribute as the employer?",
    href: "/learn/group-health-insurance/employer-cost-contribution-basics",
  },
];

export const searchPlaceholders: string[] = [
  "Can I offer health insurance with 4 employees?",
  "How much does health insurance cost for a small business?",
  "Do I have to offer benefits by law?",
  "What's the difference between ICHRA and a group plan?",
  "Can I reimburse employees for their own insurance?",
];
