"use client";

import { Button, TabsContent } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";

type Billing = "yearly" | "monthly";

type ImageProps = {
  src: string;
  alt?: string;
};

type PricingPlan = {
  icon: ImageProps;
  planName: string;
  price: string;
  discount?: string;
  description: string;
  features: string[];
  button: ButtonProps;
};

type Tab = {
  value: Billing;
  tabName: string;
  plans: PricingPlan[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  defaultTabValue: Billing;
  tabs: Tab[];
};

export type PricingProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Pricing = (props: PricingProps) => {
  const { tagline, heading, description, defaultTabValue, tabs } = {
    ...PricingDefaults,
    ...props,
  } as Props;

  const [activeTab, setActiveTab] = useState<Billing>(defaultTabValue);

  const handleTabClick = (value: Billing) => {
    setActiveTab(value);
  };

  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container max-w-[920px]">
        <div className="mx-auto max-w-lg text-center mb-8">
          <h2 className="text-[28px] md:text-[56px] font-bold leading-7 md:leading-[56px]">
            Enter a new <span className="text-[#FDB300]">Era of Learning</span>
          </h2>{" "}
        </div>

        {/* Custom Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div
            className="flex justify-center mb-8 p-1 inline-flex"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.05)",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <button
              className={`px-5 py-3 font-semibold text-sm w-[137px] md:w-[211px] ${
                activeTab === "monthly"
                  ? "bg-[#3C50E0] text-white"
                  : "bg-transparent text-white"
              }`}
              onClick={() => handleTabClick("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-5 py-3 font-semibold text-sm  w-[137px] md:w-[211px] ${
                activeTab === "yearly"
                  ? "bg-[#3C50E0] text-white"
                  : "bg-transparent text-white"
              }`}
              onClick={() => handleTabClick("yearly")}
            >
              Annually
            </button>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {tabs.map(
            (tab, index) =>
              tab.value === activeTab && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="grid grid-cols-1 gap-8 md:grid-cols-2"
                >
                  {tab.plans.map((plan, index) => (
                    <PricingPlan
                      key={index}
                      plan={plan}
                      billing={tab.value}
                      index={index} // Pass the index here
                    />
                  ))}
                </motion.div>
              )
          )}
        </AnimatePresence>

        <div className="py-6 text-sm leading-5 text-[#d9d9d9] text-center">
          * We don’t require any credit card information until you decide to use
          Astra AI Plus.
        </div>
        <div className="w-full bg-[#3C50E0] p-6 md:py-6 md:px-8 flex flex-col md:flex-row gap-8">
          <img src="/Icons/Badge.svg" alt="Check Icon" />
          <div>
            <p className="text-[#fff] text-lg font-bold leading-[130%] mb-4">
              If your math grades don’t improve, we’ll refund your money in
              full!
            </p>
            <p className="text-[#d9d9d9] text-md font-semibold leading-[140%]">
              We are fully confident in the effectiveness of the Astra AI
              system. The AI math tutor will change the way a student learns and
              understands math. If your grades don’t improve by at least 2
              grades, we will refund 100% of your purchase!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingPlan = ({
  plan,
  billing,
  index,
}: {
  plan: PricingPlan;
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

export const PricingDefaults: PricingProps = {
  tagline: "Tagline",
  heading: "Pricing plan",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  defaultTabValue: "monthly",
  tabs: [
    {
      value: "monthly",
      tabName: "Monthly",
      plans: [
        {
          icon: {
            src: "/Icons/regular-plan.svg",
            alt: "Relume icon 1",
          },
          planName: "Free. Forever.",
          description: "Lorem ipsum dolor sit amet",
          price: "$0",
          features: [
            "5 questions / month",
            "Photograph the equation and check the step-by-step process",
            "Elementary and high school math",
          ],
          button: { title: "Try for Free" },
        },
        {
          icon: {
            src: "/Icons/plus-plan.svg",
            alt: "Relume icon 2",
          },
          planName: "Billed annualy: $299.00",
          description: "Lorem ipsum dolor sit amet",
          price: "$29",
          features: [
            "Take a picture of the equation and explore the step-by-step solution",
            "Interactive charts",
            "Mathematical keyboard",
            "Elementary and high school math",
            "Cancel subscription anytime and at no cost",
          ],
          button: { title: "Buy Astra AI Plus" },
        },
      ],
    },
    {
      value: "yearly",
      tabName: "Yearly",
      plans: [
        {
          icon: {
            src: "/Icons/regular-plan.svg",
            alt: "Relume icon 1",
          },
          planName: "Free. Forever.",
          description: "Lorem ipsum dolor sit amet",
          price: "$0",
          features: [
            "5 questions / month",
            "Photograph the equation and check the step-by-step process",
            "Elementary and high school math",
          ],
          button: { title: "Try for Free" },
        },
        {
          icon: {
            src: "/Icons/plus-plan.svg",
            alt: "Relume icon 2",
          },
          planName: "Billed annualy: $299.00",
          discount: "($479.88)",
          description: "Lorem ipsum dolor sit amet",
          price: "$20",
          features: [
            "Take a picture of the equation and explore the step-by-step solution",
            "Interactive charts",
            "Mathematical keyboard",
            "Elementary and high school math",
            "Cancel subscription anytime and at no cost",
          ],
          button: { title: "Buy Astra AI Plus" },
        },
      ],
    },
  ],
};

Pricing.displayName = "Pricing";
