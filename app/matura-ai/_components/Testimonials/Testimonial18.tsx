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

export type TestimonialsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonials = (props: TestimonialsProps) => {
  const { testimonials } = {
    ...TestimonialsDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-3xl font-bold tracking-[0.5px] md:text-[42px] md:leading-[44px]">
            Kaj pravijo{" "}
            <span className="text-[#FDB300]">lanski maturantje?</span>
          </h1>
          <p className="text-md text-[#d9d9d9] italic font-semibold leading-[125%] md:text-lg">
            Že več kot{" "}
            <span className="text-[#FDB300]">40.000 slovenskih dijakov</span>{" "}
            pri učenju matematike uporablja orodje Astra AI in Matura AI.
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-x-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mb-4 md:mb-12 break-inside-avoid flex flex-col items-start border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[6px] p-8 custom-testimonial-padding"
            >
              <img
                src="/Icons/yellow-quote.svg"
                alt="Yellow Quote"
                className="mb-6"
              />
              <blockquote
                className="md:text-md"
                dangerouslySetInnerHTML={{
                  __html: testimonial.quote,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialsDefaults: TestimonialsProps = {
  heading: "Customer testimonials",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [
    {
      quote:
        "“Jooo bro, tko zbolela sem na polno in manjkala ceu tedn v soli k so zacel jemat novo snov in sm przgala astro za foro da vidm, in napism notr: razlozi mi heronov obrazec in mi je vrgu vn vse od zacetka do konca, pac whaaaat, prsla sm v solo, kt da nebi manjkala at all. Ugan kdo ne rab instrukcij vsaj se neki casa hehe 🥳🥳”",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        "“Sporočam, da sprobu sem AI inštruktorja, sicer free verzijo ampak moram rečt da je res dobr,način razlage je ful simple, tud tisto kar mi ni blo jasno ti lahko razbije na več korakov, da ti pojasni… Pomoje bom v roku tedna prešaltu na plačljivo verzijo, ma potenciala res ogromno. Hvala ti”",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        "“Matura AI je popolnoma spremenila moje učenje matematike. Prej je bila matematika zame prava nočna mora. Kljub trdemu delu so bili moji rezultati slabi, vsako učenje pa mučno in stresno. Z jasnimi razlagami in rešenimi maturitetnimi nalogami sem končno začela razumeti snov. Zdaj se učim z veseljem in samozavestno pričakujem maturo. Hvala za vrnitev upanja! Veronika”",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        "“AI mi je pomagal pri vseh testih letos, z njegovo pomočjo sem vse matematične teste pisala 5. Vedno se najde kakšna naloga, največkrat maturitetna, ki se je ne znam lotiti in astra vedno pomaga.<br><br> Lep pozdrav, Lara”",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        "“Tudi sama sem po večih rešenih nalogah, dodatnih urah in inštrukcijah vedno pisala negativno in nakoncu obupala in mislila da matematika očitno ni zame. Z Maturo AI ste uspeli kar sem mislila, da je nemogoče – rada rešujem primere in končno tudi razumem matematiko. Hvala za vaše delo! Lp,Ema”",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        "“Tak na kratko. Moja otroka sta navdušena tako nad Astra AI kot nad Matura AI inštruktorjem. In kot mama lahko samo dodam: HVALA vam!”",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
  ],
};

Testimonials.displayName = "Testimonials";
