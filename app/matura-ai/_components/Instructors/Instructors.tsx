type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type InstructorsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Instructors = (props: InstructorsProps) => {
  const { heading, description, testimonials } = {
    ...InstructorsDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="mx-auto w-full max-w-lg text-center">
          <h1 className="text-3xl font-bold tracking-[0.5px] md:text-[42px] md:leading-[44px]">
            Mnenje{" "}
            <span className="text-[#FDB300]">inštruktorjev matematike</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2  py-8 md:py-14">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-start justify-between border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[6px] p-6 md:p-8"
            >
              <div>
                <img
                  src="/Icons/blue-quote.svg"
                  alt="Blue Quote"
                  className="mb-6"
                />
                <blockquote className="md:text-md text-white text-base font-semibold">
                  {testimonial.quote}
                </blockquote>
              </div>
              <div className="flex w-full flex-col items-start md:w-fit md:flex-row md:items-center mt-6">
                <div>
                  <p className="text-md text-[#d9d9d9] leading-[23.4px]">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const InstructorsDefaults: InstructorsProps = {
  heading: "Customer testimonials",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [
    {
      quote:
        "“Dijaki in učenci, ki jih redno inštruiram imajo največ težav z razumevanjem snovi v šoli, saj jim določene razlage enostavno ne ustrezajo, tempo jemanja nove snovi je prehiter, matematika je za njih stresna in posledično jim primanjkuje samozavesti. Matura AI je prvi in trenutno največji korak k optimalnemu poučevanju mladih. Predstavlja “celotni paket” personalizirane, kvalitetne razlage, prilagojene hitrosti jemanja snovi ter preprostosti.“",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Nika Mihelčič, inštruktorica srednješolske matematike",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        "“Matura AI predstavlja pomemben korak naprej na področju matematičnega izobraževanja učencev in dijakov v Sloveniji. Reševanje nalog korak za korakom naredi naloge bolj obvladljive in manj zastrašujoče. Dodatna prednost, ki jo vidim, pa je tudi, da si učenci pametnega inštruktorja upajo vprašati tudi “neumna” vprašanja, ki si jih morda drugače ne bi.”",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "David Lajevec, inštruktor srednješolske matematike",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
  ],
};

Instructors.displayName = "Instructors";
