"use client";

import { Button } from "@relume_io/relume-ui";

import StarButton from "../Hero/components/StarButton";
import { Clients } from "../Hero/components/Clients";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  image: ImageProps;
};

export type HookProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hook = (props: HookProps) => {
  const { image } = {
    ...HookDefaults,
    ...props,
  } as Props;
  return (
    <section id="hook" className=" px-[5%] y-8 md:py-14 ">
      <div className="container relative max-w-[920px]">
        <div className="mb-6">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <h2 className="text-[28px] md:text-[42px] font-bold leading-7 md:leading-[44px]">
              Learn Anytime, Anywhere Available on{" "}
              <span className="text-[#FDB300]">All Your Devices</span>
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-3 md:mt-8 mb-6 sm:mb-8 w-full">
              <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full sm:w-auto justify-center border-none cursor-pointer">
                Try 5 Free Questions
              </Button>
              <StarButton />
            </div>
            <Clients />
          </div>
        </div>
        <div>
          <img
            src={image.src}
            className="size-full object-cover z-20"
            alt={image.alt}
          />
        </div>
        <div className="absolute inset-0 -z-10 px-[32.25px]">
          {" "}
          {/* Increase z-index */}
          <img
            src="/images/hookbg.svg"
            className="size-full object-cover hidden custom-lg:flex"
            alt="Ceossed Lines"
          />
          <div className="absolute inset-0" />
        </div>
      </div>
    </section>
  );
};

export const HookDefaults: HookProps = {
  image: {
    src: "/images/HookMoc.svg",
    alt: "Hook image",
  },
};

Hook.displayName = "Hook";
