import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";

interface PricingBoxProps {
  product: Price;
  isHighlighted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const PricingBox = ({ product, isHighlighted, onMouseEnter, onMouseLeave }: PricingBoxProps) => {
  // Redirect to payment URL
  const handleSubscription = (e: any) => {
    e.preventDefault();
    if (product.url) {
      window.open(product.url, '_blank');
    }
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 flex flex-col items-stretch">
      <div
        className={`relative z-10 mb-10 overflow-hidden rounded-xl bg-white shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 flex flex-col h-full transition duration-300 hover:shadow-2xl ${
          isHighlighted
            ? "px-6 py-8 sm:p-10 lg:px-5 lg:py-8 xl:p-11 border-2 border-primary md:scale-105 lg:scale-110 relative z-20"
            : "px-6 py-8 sm:p-10 lg:px-5 lg:py-8 xl:p-11 border-2 border-transparent"
        }`}
        data-wow-delay=".1s"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {product.nickname === "Team" && (
          <p className="absolute right-[-50px] top-[60px] hidden sm:inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
            Recommended
          </p>
        )}
        <span className="mb-4 block text-lg font-medium text-dark dark:text-white">
          {product.nickname}
        </span>
        <h2 className="mb-8 text-3xl font-semibold text-dark dark:text-white xl:text-[36px] xl:leading-[1.21]">
          <span className="text-base font-medium">₹ </span>
          <span className="-ml-1 -tracking-[2px]">
            {(product.unit_amount / 100).toLocaleString("en-US", {
              currency: "INR",
            })}
          </span>
          <span className="text-sm font-normal text-body-color dark:text-dark-6 whitespace-nowrap">
            {" "}
            Per Month
          </span>
        </h2>

        <div className="mb-[35px] flex-grow">
          <h3 className="mb-4 text-base font-medium text-dark dark:text-white">
            Features
          </h3>
          <div className="mb-8">
            {product?.offers.map((offer, i) => {
              const offerText = typeof offer === "string" ? offer : offer.text;
              const available = typeof offer === "string" ? true : (offer.available ?? true);
              return <OfferList key={i} text={offerText} available={available} />;
            })}
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={handleSubscription}
            className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90 cursor-pointer"
          >
            {product.nickname === "Free" ? "Try Now" : "Subscribe Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
