"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Phones from "./components/Phones";
import StarButton from "./components/StarButton";
import { Tagline } from "./components/Tagline";
import { AnimatedHeading } from "./components/AnimatedHeading";
import { Clients } from "./components/Clients";
import { Funds } from "./components/Funds";
import { BackgroundImage } from "./components/BackgroundImage";

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
  const { description, buttons, backgroundImage } = {
    ...HeroDefaults,
    ...props,
  } as Props;

  return (
    <section id="hero" className="relative px-[5%] pt-[19px] md:pt-12">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="w-full max-w-[880px]">
              <Tagline />
              <AnimatedHeading />
              <p className="text-sm md:text-base font-regular">{description}</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-3 md:mt-8 mb-6 sm:mb-8">
                <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full sm:w-auto justify-center border-none cursor-pointer">
                  {buttons[0].title}
                </Button>
                <StarButton />
              </div>
              <Clients />
              <Funds />
            </div>
          </div>
          <div className="translateY">
            {/*<Phones />*/}
            <img src="images/English.png" alt="Phones image" />
          </div>
        </div>
        <div className="flex items-center justify-center translateY border-margin-top md:mt-0 mt-[10%]">
          <div className="w-[208px] h-[3px] bg-[#fdb300]"></div>
        </div>
      </div>
      <BackgroundImage src={backgroundImage.src} alt={backgroundImage.alt} />
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
