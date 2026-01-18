"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  const [hoveredOffer, setHoveredOffer] = useState<string | null>(null);

  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing"
            title="Plans for every sales team"
            paragraph="Start fast with SignalizeAI. Optional Google sign-in to save and export insights—securely powered by enterprise-grade infrastructure."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox
              key={i}
              product={product}
              isHighlighted={
                hoveredOffer === product.nickname ||
                (hoveredOffer === null && product.nickname === "Team")
              }
              onMouseEnter={() => setHoveredOffer(product.nickname)}
              onMouseLeave={() => setHoveredOffer(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
