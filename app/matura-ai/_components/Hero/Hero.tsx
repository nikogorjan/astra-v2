"use client";

import StarButton from "@/app/_components/Hero/components/StarButton";
import { BackgroundImage } from "./components/BackgroundImage";
import "./Hero.css";
import { BottomShadowOverlay } from "./components/BottomShadowOverlay/BottomShadowOverlay";

type Props = {
  description: string;
  video: string;
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { description } = {
    ...HeroDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="relative px-[5%] pt-[19px] md:pt-12">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-[920px]">
              <div className="flex justify-center mb-8">
                <img src="/images/astra.svg" />
              </div>
              <h1 className="mb-5 text-5xl font-bold leading-9 tracking-[-1px] md:text-[64px] md:leading-[64px]">
                The fastest program for preparing for the{" "}
                <span className="text-[#FDB300]">math final exam</span>
              </h1>
              <p className="text-sm text-[#d9d9d9] md:text-base">
                {description}
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-4 md:mt-8">
                <StarButton text="Buy Astra AI Plus" />
              </div>
            </div>
          </div>
          <div>
            <img src="/images/mac.png" alt="mac" />
          </div>
          <div className="w-[208px] h-[8px] bg-[#fdb300] mt-12 md:mt-24"></div>
        </div>
      </div>
      <BackgroundImage src="/images/matura-bg.png" />
      <BottomShadowOverlay />
    </section>
  );
};

export const HeroDefaults: HeroProps = {
  description:
    "Mathematics in the final exam becomes easy with our AI instructor, providing in-depth analysis and solution strategies for fast and effective success.",
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
};

Hero.displayName = "Hero";
