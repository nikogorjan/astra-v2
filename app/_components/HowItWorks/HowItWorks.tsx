"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@relume_io/relume-ui";
import { clsx } from "clsx";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  image: ImageProps;
  video: string;
};

export type HowItWorksProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HowItWorks = (props: HowItWorksProps) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const { image, video } = {
    ...HowItWorksDefaults,
    ...props,
  } as Props;

  const getEmbedUrl = (url: string) => {
    const urlObj = new URL(url);
    if (urlObj.hostname === "www.youtube.com" && urlObj.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${urlObj.searchParams.get("v")}`;
    }
    return url; // Return the original URL if it's already in the embed format
  };

  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container max-w-[920px]">
        <div className="mb-6">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <h2 className="text-[28px] md:text-[42px] font-bold leading-7 md:leading-[44px]">
              How it works in <span className="text-[#FDB300]">2 minutes</span>
            </h2>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="relative flex w-full items-center justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover h-[494px]"
              />
              <span className="absolute inset-0 z-10 " />
              {/*<FaCirclePlay className="absolute z-20 size-16 text-white" />*/}
              <div className="absolute z-20 p-3 bg-[rgba(255,255,255,0.25)] backdrop-blur-sm">
                <img
                  src="/Icons/PlayButton.svg"
                  alt="Play button"
                  className=""
                />
              </div>
            </button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay className="bg-black/90" />
            <DialogClose />
            <DialogContent>
              {!isIframeLoaded && (
                <CgSpinner className="mx-auto size-16 animate-spin text-white" />
              )}
              <iframe
                className={clsx(
                  "z-0 mx-auto aspect-video size-full md:w-[738px] lg:w-[940px]",
                  {
                    visible: isIframeLoaded,
                    hidden: !isIframeLoaded,
                  }
                )}
                src={getEmbedUrl(video)}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                onLoad={() => {
                  setTimeout(() => setIsIframeLoaded(true), 0);
                }}
              ></iframe>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
    </section>
  );
};

export const HowItWorksDefaults: HowItWorksProps = {
  image: {
    src: "/images/LandingThumbnail.png",
    alt: "Relume placeholder image",
  },
  video: "https://www.youtube.com/watch?v=dqH-__zkXuc",
};

HowItWorks.displayName = "HowItWorks";
