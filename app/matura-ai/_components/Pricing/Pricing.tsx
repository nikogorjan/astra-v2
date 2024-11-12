import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiCheck } from "react-icons/bi";

type ImageProps = {
  src: string;
  alt?: string;
};

type PricingPlan = {
  icon: ImageProps;
  planName: string;
  price: string;
  priceMessage?: string;
  fullPrice?: string;
  message?: string;
  features: string[];
  button: ButtonProps;
  featuresHeader?: string;
};

type Props = {
  plan: PricingPlan;
  SmallHeader: string;
  paragraph2: string;
};

export type PricingProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Pricing = (props: PricingProps) => {
  const { plan, SmallHeader, paragraph2 } = {
    ...PricingDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container max-w-[920px]">
        <div className="container w-full">
          <PricingPlan plan={plan} />
        </div>

        <div className="w-full bg-[#3C50E0] p-6 md:py-6 md:px-8 flex flex-col md:flex-row gap-8 max-w-[920px] mt-8 md:mt-8">
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
const PricingPlan = ({ plan }: { plan: PricingPlan }) => (
  <div className="h-full border border-[rgba(255,255,255,0.15)] bg-[#FDB300] backdrop-blur-[6px] p-6 md:p-8 text-[#15385B]">
    <div className="flex flex-col md:flex-row items-start mb-2">
      <img src={plan.icon.src} alt={plan.icon.alt} />
      <p className="uppercase font-bold leading-[24px] md:ml-[6px]">
        {plan.planName}
      </p>
    </div>

    <div className="flex flex-col justify-center items-start pt-3">
      <p className="text-[#c39418] text-md font-semibold leading-7 line-through">
        {plan.fullPrice}
      </p>
      <div className="flex items-center gap-4">
        <h4 className="text-4xl leading-7 font-bold">{plan.price}</h4>
        <div className="bg-[#3c50e0] border border-[rgba(255,255,255,0.15)] px-2 pt-[5px] pb-1">
          <p className="text-sm font-semibold leading-[18px] text-white">
            {plan.priceMessage}
          </p>
        </div>
      </div>
    </div>
    <div className="my-6 h-px w-full shrink-0 bg-[#f0aa02] md:my-8" />
    <p className="mb-6 md:mb-8 text-sm font-bold leading-6">
      {plan.featuresHeader}
    </p>
    <div className="mb-12 grid grid-cols-1 gap-y-4 py-2">
      {plan.features.map((feature, index) => (
        <div key={index} className="flex self-start">
          <div className="mr-4 flex-none self-start">
            <BiCheck className="size-6" />
          </div>
          <p className="text-sm font-bold leading-6">{feature}</p>
        </div>
      ))}
    </div>
    <div>
      <Button
        {...plan.button}
        className="py-3 px-[18px] bg-[#3C50E0] custom-button-font font-bold w-full  justify-center border-none cursor-pointer"
      >
        <div className=" flex items-center justify-center">
          <p className="text-sm font-semibold leading-[14px]">
            {plan.button.title}
          </p>
          <div className="w-3 h-3 ml-2">
            <img
              src="/Icons/arrow-rigth.svg"
              alt="Arrow Right Icon"
              className="w-full h-full"
            />
          </div>
        </div>
      </Button>
    </div>
  </div>
);

export const PricingDefaults: PricingProps = {
  SmallHeader:
    "If your math grades don’t improve, we’ll refund your money in full!",
  paragraph2:
    "We are fully confident in the effectiveness of the Astra AI system. The AI math tutor will change the way a student learns and understands math. If your grades don’t improve by at least 2 grades, we will refund 100% of your purchase!",
  plan: {
    icon: {
      src: "/Icons/blue-star.svg",
      alt: "Blue star",
    },
    planName: "Matura AI + Astra AI Plus Free",
    price: "€147",
    fullPrice: "€195",
    priceMessage: "Special Offer -25%",
    message: "One-time payment, no subscription!",
    featuresHeader:
      "A comprehensive approach to preparing for the Matura exam provides you with:",
    features: [
      "An AI instructor that guides you through all 375 actual Matura exam problems",
      "Comprehensive preparation with tasks for general and vocational Matura exams, at both basic and advanced levels",
      "Free and unlimited access to Astra AI Plus for one year (included subjects: MAT, ENG, and CHE)",
      "24/7 support, whenever you need help or an explanation",
      "A PDF guide with all formulas for the Matura exam",
      "Success in the Matura exam or a 100% money-back guarantee",
      "Unlimited access to Matura AI and Astra AI Plus for 1 year and all Matura exam dates",
    ],
    button: { title: "Buy Matura AI" },
  },
};

Pricing.displayName = "Pricing";
