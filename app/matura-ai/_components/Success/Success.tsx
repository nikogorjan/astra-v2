"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@relume_io/relume-ui";
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  video: string;
  image: ImageProps;
  SmallHeader: string;
  paragraph2: string;
};

export type SuccessProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Success = (props: SuccessProps) => {
  const { heading, image, video, SmallHeader, paragraph2 } = {
    ...SuccessDefaults,
    ...props,
  } as Props;
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container">
        <div className="flex flex-col items-center ">
          <div className="max-w-[920px]">
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative flex w-full items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="size-full object-cover"
                  />
                  <span className="absolute inset-0 z-10 " />
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
                    src={video}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setIsIframeLoaded(true)}
                  ></iframe>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </div>
          <div className="rb-12 mt-16 md:mt-28 max-w-[660px]">
            <div className="mx-auto max-w-lg text-center">
              <div className="flex flex-col items-center justify-start">
                <h3 className="text-center text-[100px] font-extrabold leading-[100px] percent-gradient-color">
                  {heading}
                </h3>
                <p className="mt-2 text-center text-4xl font-bold leading-10 md:text-6xl">
                  {" "}
                  those who study with Matura AI,{" "}
                  <span className="text-[#FDB300]">pass the matura</span> on
                  their first try
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#3C50E0] p-6 md:py-6 md:px-8 flex flex-col md:flex-row gap-8 max-w-[920px] mt-6 md:mt-14">
            <img
              src="/Icons/Badge.svg"
              alt="Check Icon"
              className="w-[100px]"
            />
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
      </div>
    </section>
  );
};

export const SuccessDefaults: SuccessProps = {
  heading: "99,4%",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "/images/matura-ai-thumbnail.jpeg",
    alt: "Matura ai placeholder image",
  },
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  SmallHeader:
    "If your math grades don’t improve, we’ll refund your money in full!",
  paragraph2:
    "We are fully confident in the effectiveness of the Astra AI system. The AI math tutor will change the way a student learns and understands math. If your grades don’t improve by at least 2 grades, we will refund 100% of your purchase!",
};

Success.displayName = "Success";
