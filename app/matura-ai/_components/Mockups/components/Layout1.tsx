type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout1 = (props: Layout1Props) => {
  const { heading, description, image } = {
    ...Layout1Defaults,
    ...props,
  } as Props;
  return (
    <div id="frame1" className="px-[5%] py-8 md:py-14">
      <div className="container">
        <div className="flex flex-col gap-y-8 md:items-center md:gap-x-[88px] md:flex-row">
          <div className="md:max-w-[512px] max-w-full">
            <h1 className="rb-5 mb-3 text-2xl font-bold md:text-[42px] md:leading-[48px]">
              {heading}
            </h1>
            <p className="text-[#d9d9d9] leading-7 md:text-xl">{description}</p>
          </div>
          <div className="w-full">
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Layout1Defaults: Layout1Props = {
  heading: "375 real final exam problems from past years!",
  description:
    "Find the topic you want, choose a problem, and reach understanding with the help of a personal AI tutor that tracks your progress.",
  image: {
    src: "/images/matura-ai-frame.png",
    alt: "frame 1",
  },
};

Layout1.displayName = "Layout1";