"use client";

import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatedHeading } from "./components/AnimatedHeader/AnimatedHeading";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
  backgroundImage: ImageProps;
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header = () => {
  return (
    <section
      id="Header"
      className="relative px-[5%] pt-[19px] pb-6 md:pb-14 md:pt-12"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="w-full max-w-[880px]">
              <div className="mb-3 md:mb-6 text-[13px] text-[#ebebeb] font-bold leading-[18px] px-4 py-[7px] items-center justify-center border rounded-[28px] border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] inline-flex">
                Updated Daily
              </div>
              <AnimatedHeading />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeaderDefaults: HeaderProps = {
  heading: "Master math with AI: Your personal tutor, available 24/7",
  description:
    "Improve grades and confidence with step-by-step guidance - at a fraction of traditional tutoring costs.",
  buttons: [
    { title: "Try 5 Free Questions" },
    { title: "Buy Astra AI Plus", variant: "secondary" },
  ],
  image: {
    src: "/images/phones.svg",
    alt: "Astra images",
  },
  backgroundImage: {
    src: "/images/Group.webp",
    alt: "Astra images",
  },
};

Header.displayName = "Header";
