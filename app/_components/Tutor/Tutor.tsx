"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import { CgSpinner } from "react-icons/cg";
import { Button } from "@relume_io/relume-ui";
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  video: string;
  image: ImageProps;
};

export type TutorProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Tutor = (props: TutorProps) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const { video, image } = {
    ...TutorDefaults,
    ...props,
  } as Props;

  return (
    <section
      id="tutor"
      className="px-[5%] py-8 md:py-14 bg-white relative overflow-hidden" // Apply bg-white and z-10 for layering
    >
      <div className="container max-w-[920px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:items-center gap-6">
          <div>
            <p className="text-[#15385b] text-[28px] leading-[117%] font-bold tracking-[-0.112px] md:text-[36px] md:tracking-[-0.144px]">
              <span>As a tutor, I’m impressed by the AI tutor’s</span>{" "}
              <span className="bg-[#eceefc] text-[#4457E1] px-1">
                ability to simplify complex topics
              </span>
              <span>
                . The paid version adds even more value—it’s a great tool for
                fast-tracking learning. Highly recommend!
              </span>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:items-start md:justify-start md:mt-10 mx-4 md:mx-0">
              <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full sm:w-auto justify-center border-none cursor-pointer">
                Try 5 Free Questions
              </Button>
            </div>
          </div>
          <Dialog>
            <DialogTrigger>
              <div className="relative flex w-full max-w-full items-center justify-center">
                <img
                  src={image.src}
                  className="w-full md:max-w-[366px] h-[578px] object-cover"
                  alt={image.alt}
                />
                <div className="absolute z-20 p-3 bg-[rgba(255,255,255,0.25)] backdrop-blur-sm">
                  <img src="/Icons/PlayButton.svg" alt="Play button" />
                </div>
                <span className="absolute inset-0 z-10 " />
              </div>
            </DialogTrigger>
            <DialogPortal>
              <DialogOverlay className="bg-black/90" />
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
                  src={video}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsIframeLoaded(true)}
                ></iframe>
              </DialogContent>
            </DialogPortal>
          </Dialog>
        </div>
      </div>
      <div className="background absolute inset-0 z-10">
        <div className="relative container h-full">
          <div className="w-full h-full flex justify-between"></div>
          <div className="absolute inset-0 z-10">
            {" "}
            {/* Increase z-index */}
            <img
              src="/images/LinesWhite.svg"
              className="size-full object-cover hidden custom-lg:flex"
              alt="White Lines"
            />
            <div className="absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const TutorDefaults: TutorProps = {
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "/images/TestimonialImage.png",
    alt: "Tutor Image",
  },
};

Tutor.displayName = "Tutor";
