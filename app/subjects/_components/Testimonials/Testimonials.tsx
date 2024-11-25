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
          <h1 className="mb-5 text-3xl font-bold tracking-[0.5px] md:text-[56px] md:leading-[56px]">
            What people are <span className="text-[#FDB300]">saying</span>
          </h1>
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
        "Hey! I was feeling totally lost and missed a week of school when they started new math topics. I decided to try Astra AI, and it was a game changer! It broke everything down for me step by step. I couldn't believe it! I went back to school ready to tackle everything. Guess who’s acing math now? Haha! 🥳🥳",
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
        "I just wanted to share my experience with Astra AI, the free version. It's truly impressive! The explanations are super clear, and even the concepts I struggled with before are now easy to understand. I’m definitely considering upgrading to the paid version soon because it has so much to offer. Huge thanks!",
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
        "Astra AI has completely changed my approach to math. It used to be a nightmare for me. No matter how hard I tried, my grades were terrible, and studying felt like torture. But with clear explanations and solved problems, I finally started to understand the material. Now, I study with excitement and look forward to my exams with confidence. Thank you for giving me hope! - Veronica",
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
        "Astra AI has been a lifesaver for my math tests this year! Thanks to its help, I scored a 5 on every single math exam. There’s always that one tricky problem that gets me, but Astra AI is always there to help me out. Best, Lara",
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
        "After struggling with countless problems, extra hours, and tutoring, I always thought math just wasn’t for me. But with Astra AI, I achieved what I thought was impossible – I actually enjoy solving problems now and finally understand math! Thank you for your incredible work! Best, Ema",
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
        "In short, my kids are absolutely loving both Astra AI and the Matura AI instructor. As a mom, I can’t thank you enough!",
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
