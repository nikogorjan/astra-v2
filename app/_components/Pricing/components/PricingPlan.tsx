import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Billing = "yearly" | "monthly";

type ImageProps = {
  src: string;
  alt?: string;
};

export type PricingPlanType = {
  icon: ImageProps;
  planName: string;
  price: string;
  discount?: string;
  features: string[];
  button: ButtonProps;
};

export const PricingPlan = ({
  plan,
  billing,
  index,
}: {
  plan: PricingPlanType;
  billing: Billing;
  index: number;
}) => (
  <div
    className={`relative flex h-full flex-col justify-between p-[2px] ${
      index === 1
        ? "bg-gradient-to-b from-[#F1AC0C] via-[#B478FF] to-[#3C50DF]"
        : ""
    }`}
  >
    {/* Inner Content Wrapper with border effect */}
    <div className="flex flex-col justify-between h-full p-8 bg-[rgba(24,24,24,1)] border border-[rgba(255,255,255,0.05)] backdrop-blur-[6px]">
      <div>
        <div className="flex flex-col items-start justify-start mb-5">
          <img src={plan.icon.src} alt={plan.icon.alt} className="h-6" />
        </div>

        <h4 className="mb-2 text-2xl font-bold leading-7">
          {plan.price}
          <span className="text-2xl font-bold leading-7">
            {billing === "monthly" ? " / month" : " / month"}
          </span>
        </h4>

        {billing === "yearly" && (
          <div className="flex gap-[4px]">
            <h3
              className={`text-[14px] leading-6 ${
                index === 0 ? "font-medium" : "font-bold"
              }`}
            >
              {plan.planName}
            </h3>
            <h3 className="text-[14px] leading-6 text-white opacity-50 line-through">
              {plan.discount}
            </h3>
          </div>
        )}

        <div className="my-6 h-[2px] w-full shrink-0 bg-white opacity-5" />

        <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex self-start">
              <div className="mr-4 flex-none self-start">
                {index === 0 ? (
                  <img src="/Icons/check.svg" alt="Check Icon" /> // First plan uses regular check icon
                ) : (
                  <img src="/Icons/check-yellow.svg" alt="Yellow Check Icon" /> // Other plans use yellow check icon
                )}
              </div>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <Button
        {...plan.button}
        className="w-full text-white font-semibold"
        style={{
          backgroundColor: index === 0 ? "#FDB300" : "#3C50E0", // Conditional background color
          color: index === 0 ? "black" : "white",
        }}
      >
        {plan.button.title}
        {index === 0 ? (
          <img src="/Icons/arrow-right-black.svg" alt="Check Icon" /> // First plan uses regular check icon
        ) : (
          <img src="/Icons/arrow-right-white.svg" alt="Yellow Check Icon" /> // Other plans use yellow check icon
        )}
      </Button>
    </div>
  </div>
);

export type { Billing, ImageProps };
