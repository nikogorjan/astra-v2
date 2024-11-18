"use client";

import { Button } from "@relume_io/relume-ui";

type Props = {
  description: string;
  heading: string;
  button1: string;
  button2: string;
  message: string;
};

export type IndividualProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Individual = (props: IndividualProps) => {
  const { description, heading, button1, button2, message } = {
    ...IndividualDefaults,
    ...props,
  } as Props;

  return (
    <div>
      <div className="text-center">
        <p className="text-sm text-[#d9d9d9] font-semibold leading-[18px] mb-6">
          {description}
        </p>
        <p className="font-bold leading-4 mb-3">{heading}</p>
        <div className="flex gap-3 custom-flex mb-6">
          <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full justify-center border-none cursor-pointer">
            {button1}
          </Button>
          <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full justify-center border-none cursor-pointer">
            {button2}
          </Button>
        </div>
        <p className="text-[#d9d9d9] text-center text-sm leading-5">
          {message}
        </p>
      </div>
    </div>
  );
};

export const IndividualDefaults: IndividualProps = {
  description:
    "Choose a way to help and contribute to better education and a brighter future for young people.",
  heading: "Support Type",
  button1: "€20 / month",
  button2: "€200 / year",
  message: "*The number of scholarships can be selected in the next step.",
};

Individual.displayName = "Individual";
