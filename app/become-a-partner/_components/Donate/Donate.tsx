"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Company } from "./componnets/Company";
import { Individual } from "./componnets/Individual";

type Props = {
  defaultTabValue: string;
  paragraph1: string;
  SmallHeader: string;
  paragraph2: string;
};

export type DonateProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Donate = (props: DonateProps) => {
  const { defaultTabValue } = {
    ...DonateDefaults,
    ...props,
  } as Props;

  const [activeTab, setActiveTab] = useState<string>(defaultTabValue);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section id="Donate" className="px-[5%] py-8 md:py-14">
      <div className="container max-w-[430px]">
        <div className="mx-auto max-w-lg text-center mb-8 md:mb-14">
          <h2 className="text-[28px] md:text-[42px] font-bold leading-7 md:leading-[60px]">
            Omogoči <span className="text-[#FDB300]">štipendijo</span>
          </h2>{" "}
        </div>

        {/* Custom Tab Buttons */}
        <div className="flex justify-center mb-6 w-full">
          <div
            className="flex justify-center p-1 inline-flex flex-col sm:flex-row w-full"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.05)",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <button
              className={`px-5 py-3 font-semibold text-sm w-full sm:w-[211px] ${
                activeTab === "company"
                  ? "bg-[#3C50E0] text-white"
                  : "bg-transparent text-white"
              }`}
              onClick={() => handleTabClick("company")}
            >
              For Companies
            </button>
            <button
              className={`px-5 py-3 font-semibold text-sm  w-full sm:w-[211px] ${
                activeTab === "individual"
                  ? "bg-[#3C50E0] text-white"
                  : "bg-transparent text-white"
              }`}
              onClick={() => handleTabClick("individual")}
            >
              For Individuals
            </button>
          </div>
        </div>

        {/* Render the Company or Individual component based on activeTab */}
        <AnimatePresence initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {activeTab === "company" ? (
              <Company /> // Render Company component when 'company' is active
            ) : (
              <Individual /> // Render Individual component when 'individual' is active
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export const DonateDefaults: DonateProps = {
  paragraph1:
    "* We don’t require any credit card information until you decide to use Astra AI Plus.",
  SmallHeader:
    "If your math grades don’t improve, we’ll refund your money in full!",
  paragraph2:
    "We are fully confident in the effectiveness of the Astra AI system. The AI math tutor will change the way a student learns and understands math. If your grades don’t improve by at least 2 grades, we will refund 100% of your purchase!",
  defaultTabValue: "company",
};

Donate.displayName = "Donate";
