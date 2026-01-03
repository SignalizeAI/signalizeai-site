import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_1NQk5TLtGdPVhGLecVfQ7mn0",
    unit_amount: 100 * 100,
    nickname: "Basic",
    offers: [
      "1 user",
      "Real-time website summaries",
      "Sales readiness scores & personas",
      "Save up to 50 analyses",
      "CSV/Excel export",
      "Email support",
    ],
  },
  {
    id: "price_1NQk55LtGdPVhGLefU8AHqHr",
    unit_amount: 200 * 100,
    nickname: "Premium",
    offers: [
      "5 users",
      "Unlimited on-page analyses",
      "Advanced value prop recommendations",
      "Save and filter every analysis",
      "CSV/Excel export",
      "Priority support",
    ],
  },
  {
    id: "price_1NQk4eLtGdPVhGLeZsZDsCNz",
    unit_amount: 300 * 100,
    nickname: "Business",
    offers: [
      "10 users",
      "Shared workspace & exports",
      "Custom persona and scoring tuning",
      "Security reviews and SSO on request",
      "Dedicated success manager",
      "SLAs and onboarding",
    ],
  },
];
