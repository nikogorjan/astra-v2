"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PricingPlan } from "./components/PricingPlan";
import type { Billing, PricingPlanType } from "./components/PricingPlan";

type Tab = {
  value: Billing;
  tabName: string;
  plans: PricingPlanType[];
};

type Props = {
  defaultTabValue: Billing;
  tabs: Tab[];
  paragraph1: string;
  SmallHeader: string;
  paragraph2: string;
};

export type PricingProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Pricing = (props: PricingProps) => {
  const { defaultTabValue, tabs, paragraph1, SmallHeader, paragraph2 } = {
    ...PricingDefaults,
    ...props,
  } as Props;

  const [activeTab, setActiveTab] = useState<Billing>(defaultTabValue);

  const handleTabClick = (value: Billing) => {
    setActiveTab(value);
  };

  return (
    <section id="pricing" className="px-[5%] py-8 md:py-14">
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
          {paragraph1}
        </div>
        <div className="w-full bg-[#3C50E0] p-6 md:py-6 md:px-8 flex flex-col md:flex-row gap-8">
          <img src="/Icons/Badge.svg" alt="Check Icon" className="w-[100px]" />
          <div>
            <p className="text-[#fff] text-lg font-bold leading-[130%] mb-4">
              {SmallHeader}
            </p>
            <p className="text-[#d9d9d9] text-md font-semibold leading-[140%]">
              {paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PricingDefaults: PricingProps = {
  paragraph1:
    "* We don’t require any credit card information until you decide to use Astra AI Plus.",
  SmallHeader:
    "If your math grades don’t improve, we’ll refund your money in full!",
  paragraph2:
    "We are fully confident in the effectiveness of the Astra AI system. The AI math tutor will change the way a student learns and understands math. If your grades don’t improve by at least 2 grades, we will refund 100% of your purchase!",
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
