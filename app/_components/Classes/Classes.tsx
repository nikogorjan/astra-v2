import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { AnimatedHeading2 } from "./components/AnimatedHeading2";
import FeatureSection from "./components/FeatureSection";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSection = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
  bgColor?: string; // New bgColor property
  headerColor?: string; // New textColor property
  textColor?: string; // New textColor property
};

type Props = {
  featureSections: FeatureSection[];
};

export type ClassesProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Classes = (props: ClassesProps) => {
  const { featureSections } = {
    ...ClassesDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container max-w-[920px]">
        <div className="mb-8 md:mb-14">
          <div className="mx-auto max-w-lg text-center">
            <AnimatedHeading2 />
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-2">
          {featureSections.map((feature, index) => (
            <FeatureSection key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const ClassesDefaults: ClassesProps = {
  featureSections: [
    {
      icon: {
        src: "/Icons/Math.svg",
        alt: "Relume logo 1",
      },
      heading: "Math",
      description:
        "Snap a photo of any math problem and our AI breaks it down into bite-sized explanations.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      bgColor: "#3C50E0", // Example bg color
      textColor: "rgba(255,255,255,0.75)", // Black text color
      headerColor: "rgba(255,255,255,1)", // Black text color
    },
    {
      icon: {
        src: "/Icons/English.svg",
        alt: "Relume logo 2",
      },
      heading: "English",
      description:
        "Master grammar rules and vocabulary with a personal english tutor.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      bgColor: "#F33568", // Example bg color
      textColor: "rgba(255,255,255,0.75)", // Black text color
      headerColor: "rgba(255,255,255,1)", // Black text color
    },
    {
      icon: {
        src: "/Icons/Chemistry.svg",
        alt: "Relume logo 3",
      },
      heading: "Chemistry",
      description:
        "From molecular structures to chemical reactions, get explanations for any chemistry concept.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      bgColor: "#FDB300", // Example bg color
      textColor: "#000000", // Black text color
      headerColor: "rgba(0,0,0,1)", // Black text color
    },
    {
      icon: {
        src: "/Icons/Atom.svg",
        alt: "Relume logo 4",
      },
      heading: "Physics",
      description:
        "Understand forces, energy, and motion through interactive problem-solving.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      bgColor: "#FFF", // Example bg color
      textColor: "#000000", // Black text color
      headerColor: "rgba(0,0,0,1)", // Black text color
    },
  ],
};

Classes.displayName = "Classes";
