import { BackgroundImage } from "@/app/matura-ai/_components/Hero/components/BackgroundImage";
import { BlueButtonRight } from "@/components/Buttons/BlueButtonRight";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  description2: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { description, description2, image } = {
    ...HeroDefaults,
    ...props,
  } as Props;
  return (
    <section
      id="relume"
      className="relative px-[5%] pt-[19px] md:pt-12 pb-8 md:pb-14"
    >
      <div className="container max-w-xxl">
        <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:items-center md:gap-x-12">
          <div>
            <h1 className="mb-5 text-5xl font-bold leading-9 md:text-[56px] md:leading-[56px]">
              Scholarships for{" "}
              <span className="text-[#FDB300]">financially disadvantaged</span>{" "}
              children
            </h1>
            <p className="md:text-md mb-6 leading-6 text-[#d9d9d9] md:leading-7">
              {description}
            </p>
            <p className="md:text-md leading-6 text-[#d9d9d9] md:leading-7">
              {description2}
            </p>

            <BlueButtonRight text="Start with Matura AI" />
          </div>
          <div>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
      <BackgroundImage src="/images/partner-bg.png" />
    </section>
  );
};

export const HeroDefaults: Props = {
  heading: "Medium length section heading goes here",
  description:
    "The vision of the Astra portal has always been focused on providing educational content to young people, regardless of their financial means or social status. I firmly believe that everyone should have access to the best education.",
  description2:
    "For those coming from financially disadvantaged backgrounds, we work with partners to ensure they have free access to Astra AI. This page is dedicated to all the supportive partners of the portal who, with their selfless help, assist young people in gaining a better education and a brighter future.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  image: {
    src: "/images/Andrej.png",
    alt: "Andrej image",
  },
};

Hero.displayName = "Hero";
