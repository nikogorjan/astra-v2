type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type DonorsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Donors = (props: DonorsProps) => {
  const { heading, logos } = {
    ...DonorsDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container max-w-[920px] px-6">
        <h1 className="mx-auto mb-3 w-full max-w-lg text-center text-lg font-bold leading-9 uppercase">
          {heading}
        </h1>
        <div className="flex flex-wrap items-center justify-center lg:justify-between  gap-y-4">
          {logos.map((logo, index) => (
            <div className="py-6 w-[254.5px] h-[104px] flex items-center justify-center">
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="max-w-[254.5px] h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const DonorsDefaults: Props = {
  heading: "Major Scholarship Donors",
  logos: [
    {
      src: "/images/big-donor-1.png",
      alt: "Katapult logo",
    },
    {
      src: "/images/big-donor-2.png",
      alt: "Yes logo",
    },
    {
      src: "/images/big-donor-3.png",
      alt: "Kriptomat logo",
    },
  ],
};

Donors.displayName = "Donors";
