"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Astraai from "./components/Astraai";
import { motion } from "framer-motion";
import Phones from "./components/Phones";
import StarButton from "./components/StarButton";

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
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="w-full max-w-[880px]">
              <div className="tagline mb-6">
                <p className="custom-font-size custom-button-font font-bold text-[13px] leading-[18px] ">
                  Powered by the most precise AI for math
                </p>
                <img
                  src="/images/Line.svg"
                  alt="Separator"
                  className="separator-img"
                />
                <div className="astra-vectors">
                  <Astraai />
                </div>
              </div>

              <h1 className="mb-5 text-6xl font-bold md:text-[4rem]">
                Master math with AI: Your personal tutor,{" "}
                <span className="highlight-text">
                  available 24/7
                  <motion.img
                    src="/images/underline.svg"
                    alt="Underline"
                    className="underline-svg"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </span>
              </h1>
              <p className="text-sm md:text-base font-regular">{description}</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-3 md:mt-8 mb-6 sm:mb-8">
                <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full sm:w-auto justify-center border-none">
                  {buttons[0].title}
                </Button>

                <StarButton />
              </div>

              <div className="flex items-center justify-center custom-row md:mt-8 mb-6 sm:mb-8">
                <div className="flex items-center justify-center custom-margin">
                  <img
                    src="/images/client1.svg"
                    alt="client 1"
                    className="w-[21.62px] h-[28px]"
                  />
                  <img
                    src="/images/client2.svg"
                    alt="client 2"
                    className="w-[21.62px] h-[28px]"
                  />
                  <img
                    src="/images/client3.svg"
                    alt="client 3"
                    className="w-[21.62px] h-[28px]"
                  />
                  <img
                    src="/images/client4.svg"
                    alt="client 4"
                    className="w-[28px] h-[28px]"
                  />
                </div>
                <p className="text-[13px] font-regular ml-3">
                  Trusted by <span className="font-bold">40,000+</span> Students
                </p>
              </div>

              <div className="flex gap-8 items-center justify-center custom-row">
                <img
                  src="/images/eu.svg"
                  alt="Eu sklad"
                  className="custom-margin"
                />
                <img src="/images/feelslo.svg" alt="I Feel Slovenia" />
              </div>
            </div>
          </div>
          <div className="translateY">
            <Phones />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src={backgroundImage.src}
          className="size-full object-cover"
          alt={backgroundImage.alt}
        />
        <div className="absolute inset-0 " />
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
