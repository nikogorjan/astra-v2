type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout2 = (props: Layout2Props) => {
  const { heading, description, image } = {
    ...Layout2Defaults,
    ...props,
  } as Props;
  return (
    <div id="frame2" className="px-[5%] py-8 md:py-14">
      <div className="container">
        <div className="flex flex-col gap-y-8 md:items-center md:gap-x-[88px] md:flex-row">
          <div className="w-full">
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
          <div className="md:max-w-[512px] max-w-full order-first md:order-none">
            <h1 className="rb-5 mb-3 text-2xl font-bold md:text-[42px] md:leading-[48px]">
              {heading}
            </h1>
            <p className="text-[#d9d9d9] leading-7 md:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Layout2Defaults: Layout2Props = {
  heading: "Instant insights",
  description:
    "With all of your sources in place, Notebook AI gets to work and becomes a personalized AI expert in the information that matters most to you.",
  image: {
    src: "/images/notebook-frame2.jpg",
    alt: "frame 2",
  },
};

Layout2.displayName = "Layout2";
