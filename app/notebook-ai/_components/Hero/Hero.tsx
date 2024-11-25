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
                <img src="/images/notebook.png" />
              </div>
              <h1 className="mb-5 text-5xl font-bold leading-9 tracking-[-1px] md:text-[64px] md:leading-[64px]">
                <span className="text-[#FDB300]">Supercharge</span> your grades
                with our personalized
                <span className="linear-gradient-text"> AI tutor</span>
              </h1>
              <p className="text-sm text-[#d9d9d9] md:text-base">
                {description}
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-4 md:mt-8">
                <StarButton text="Try Notebook AI" />
              </div>
            </div>
          </div>
          <div className="mb-7 md:mb-12">
            <img src="/images/matura-bg2.png" alt="mac" />
          </div>
        </div>
      </div>
      <BackgroundImage src="/images/matura-bg.png" />
      <BottomShadowOverlay />
    </section>
  );
};

export const HeroDefaults: HeroProps = {
  description:
    "All university courses, organized by your classmates and enhanced with AI.",
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
};

Hero.displayName = "Hero";