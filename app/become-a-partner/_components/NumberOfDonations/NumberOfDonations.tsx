type Props = {
  heading: string;
  description: string;
};

export type NumberOfDonationsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const NumberOfDonations = (props: NumberOfDonationsProps) => {
  const { heading, description } = {
    ...NumberOfDonationsDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container max-w-[920px] ">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <h1 className="donations-number mx-auto mb-4 text-[175px] font-extrabold leading-[100%] tracking-[-1.5px] md:text-[225px]">
            {heading}
          </h1>
          <p className="opacity-75 text-xl font-semibold leading-[100%]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export const NumberOfDonationsDefaults: Props = {
  heading: "104",
  description: "Number of Scholarships Awarded to Date",
};

NumberOfDonations.displayName = "NumberOfDonations";
