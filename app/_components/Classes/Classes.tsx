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
    <section id="classes" className="px-[5%] py-8 md:py-14">
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
        alt: "Math icon",
      },
      heading: "Math",
      description:
        "Snap a photo of any math problem and our AI breaks it down into bite-sized explanations.",
      bgColor: "#3C50E0",
      textColor: "rgba(255,255,255,0.75)",
      headerColor: "rgba(255,255,255,1)",
    },
    {
      icon: {
        src: "/Icons/English.svg",
        alt: "English icon",
      },
      heading: "English",
      description:
        "Master grammar rules and vocabulary with a personal english tutor.",
      bgColor: "#F33568",
      textColor: "rgba(255,255,255,0.75)",
      headerColor: "rgba(255,255,255,1)",
    },
    {
      icon: {
        src: "/Icons/Chemistry.svg",
        alt: "Chemistry icon",
      },
      heading: "Chemistry",
      description:
        "From molecular structures to chemical reactions, get explanations for any chemistry concept.",
      bgColor: "#FDB300",
      textColor: "#000000",
      headerColor: "rgba(0,0,0,1)",
    },
    {
      icon: {
        src: "/Icons/Atom.svg",
        alt: "Atom logo",
      },
      heading: "Physics",
      description:
        "Understand forces, energy, and motion through interactive problem-solving.",
      bgColor: "#FFF",
      textColor: "#000000",
      headerColor: "rgba(0,0,0,1)",
    },
  ],
};

Classes.displayName = "Classes";
