type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type AllDonorsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AllDonors = (props: AllDonorsProps) => {
  const { heading, logos } = {
    ...AllDonorsDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container max-w-[920px] px-6">
        <h1 className="mx-auto mb-3 w-full max-w-lg text-center text-lg font-bold leading-9 uppercase">
          {heading}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8">
          {logos.map((logo, index) => (
            <div className="py-9 w-[138.56px] h-[104px] flex items-center justify-center">
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="max-w-[138.56px] h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AllDonorsDefaults: Props = {
  heading: "Scholarship AllDonors",
  logos: [
    {
      src: "/images/small-donor-1.png",
      alt: "Donor Logo 1",
    },
    {
      src: "/images/small-donor-2.png",
      alt: "Donor Logo 2",
    },
    {
      src: "/images/small-donor-3.png",
      alt: "Donor Logo 3",
    },
    {
      src: "/images/small-donor-4.png",
      alt: "Donor Logo 4",
    },
    {
      src: "/images/small-donor-5.png",
      alt: "Donor Logo 5",
    },
    {
      src: "/images/small-donor-6.png",
      alt: "Donor Logo 6",
    },
    {
      src: "/images/small-donor-7.png",
      alt: "Donor Logo 7",
    },
    {
      src: "/images/small-donor-8.png",
      alt: "Donor Logo 8",
    },
  ],
};

AllDonors.displayName = "AllDonors";
