import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type TrustedProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Trusted = (props: TrustedProps) => {
  const { tagline, heading, description, buttons, image } = {
    ...TrustedDefaults,
    ...props,
  } as Props;
  return (
    <section
      id="relume"
      className="px-[5%] py-8 md:py-14 bg-white relative overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="w-full max-w-lg">
              <p className="mb-4 font-semibold text-black md:text-[14px]">
                {tagline}
              </p>
              <h2 className="rb-5 mb-4 font-bold text-black custom-large-heading">
                {heading}
              </h2>
              <p className="text-black font-semibold md:text-[14px]">
                {description}
              </p>
            </div>
          </div>
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
              alt="Lines"
            />
            <div className="absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const TrustedDefaults: TrustedProps = {
  tagline: "Trusted by",
  heading: "40,257",
  description: "Students Across the World",
};

Trusted.displayName = "Trusted";
