"use client";

import { Clients } from "@/app/_components/Hero/components/Clients";
import StarButton from "@/app/_components/Hero/components/StarButton";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

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

export type HeroProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { buttons } = {
    ...HeroDefaults,
    ...props,
  } as Props;

  return (
    <section id="hero" className="relative px-[5%] pt-[19px] md:pt-12">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="w-full max-w-[880px]">
              <div className="w-full flex items-center justify-center mb-6">
                <img src="/Icons/math-icon.png" alt="math icon" />
              </div>
              <h1 className="text-center text-6xl font-bold leading-10 md:text-[64px] md:leading-[64px] mb-5 md:mb-2.5">
                Math Tutoring with AI
              </h1>
              <p className="text-sm md:text-base font-regular max-w-[614px] text-[#c2c2c2] text-center">
                <span className="font-bold text-white">
                  Math tutoring using artificial intelligence.
                </span>{" "}
                Start learning with AI tutor, where for the price of one hour,
                you get a whole month of tutoring. If your math grade doesn't
                improve by at least 2 points, I'll refund your money!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-3 md:mt-8 mb-6 sm:mb-8">
                <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full sm:w-auto justify-center border-none cursor-pointer">
                  {buttons[0].title}
                </Button>
                <StarButton text="Buy Astra AI Plus" />
              </div>
              <Clients />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroDefaults: HeroProps = {
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

Hero.displayName = "Hero";
