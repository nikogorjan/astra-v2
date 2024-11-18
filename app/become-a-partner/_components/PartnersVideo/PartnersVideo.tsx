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

export type PartnersVideoProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const PartnersVideo = (props: PartnersVideoProps) => {
  const { image, video } = {
    ...PartnersVideoDefaults,
    ...props,
  } as Props;
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

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
        <div className="flex flex-col items-center ">
          <div className="w-full">
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
                    src={getEmbedUrl(video)}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setIsIframeLoaded(true)}
                  ></iframe>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnersVideoDefaults: PartnersVideoProps = {
  heading: "99,4%",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "/images/video-for-partners.png",
    alt: "Become a Partner placeholder image",
  },
  video: "https://www.youtube.com/watch?v=JSu-wgfmyHc",
  SmallHeader:
    "If your math grades don’t improve, we’ll refund your money in full!",
  paragraph2:
    "We are fully confident in the effectiveness of the Astra AI system. The AI math tutor will change the way a student learns and understands math. If your grades don’t improve by at least 2 grades, we will refund 100% of your purchase!",
};

PartnersVideo.displayName = "PartnersVideo";
