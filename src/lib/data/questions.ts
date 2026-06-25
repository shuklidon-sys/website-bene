export interface Question {
  question: string;
  slug: string;
}

export const popularQuestions: Question[] = [
  {
    question: "How much does health insurance cost for a small business?",
    slug: "health-insurance-cost",
  },
  {
    question: "Do I have to offer benefits to my employees?",
    slug: "required-to-offer-benefits",
  },
  {
    question: "ICHRA vs. Group Insurance — what's the difference?",
    slug: "ichra-vs-group-insurance",
  },
  {
    question: "What benefits do employees actually value most?",
    slug: "benefits-employees-value",
  },
  {
    question: "Can I reimburse employees instead of offering a plan?",
    slug: "reimburse-employees-insurance",
  },
  {
    question: "How much should I contribute as the employer?",
    slug: "employer-contribution-amount",
  },
];

export const searchPlaceholders: string[] = [
  "Can I offer health insurance with 4 employees?",
  "How much does health insurance cost for a small business?",
  "Do I have to offer benefits by law?",
  "What's the difference between ICHRA and a group plan?",
  "Can I reimburse employees for their own insurance?",
];
