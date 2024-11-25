type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout4Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout4 = (props: Layout4Props) => {
  const { heading, description, image } = {
    ...Layout4Defaults,
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

export const Layout4Defaults: Layout4Props = {
  heading: "Listen and learn on the go",
  description:
    "Our new Audio Overview feature can turn your sources into engaging “Deep Dive” discussions with one click.",
  image: {
    src: "/images/notebook-frame4.jpg",
    alt: "frame 2",
  },
};

Layout4.displayName = "Layout4";
