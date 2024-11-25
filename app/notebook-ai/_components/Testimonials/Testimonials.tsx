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
        "Hey there! I was feeling really overwhelmed and missed a whole week of school when they started new topics. I decided to give Notebook AI a try, and wow, it broke down everything for me from start to finish! I was like, what?! I went back to school so I wouldn't miss out at all. Guess who doesn't need instructions anymore? Haha! 🥳🥳",
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
        "Just wanted to share that I tried out Notebook AI, the free version, and I have to say it's really impressive! The explanations are super simple, and even the stuff I didn't understand before is broken down into manageable steps. I think I’ll upgrade to the paid version within a week because it has so much potential. Thanks a lot!",
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
        "Notebook AI has completely transformed my math learning experience. Math used to be a nightmare for me. Despite my hard work, my results were poor, and studying felt like torture. With clear explanations and solved exam problems, I finally started to grasp the material. Now, I study with joy and confidently look forward to my exams. Thank you for restoring my hope! - Veronica",
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
        "Notebook AI has been a lifesaver for all my tests this year! With its help, I scored a 5 on every math test. There’s always a tricky problem, usually from the exams, that I struggle with, but Notebook AI is always there to assist. Best regards, Lara",
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
        "After struggling with numerous problems, extra hours, and tutoring, I always ended up failing and thought math just wasn’t for me. With Notebook AI, I achieved what I thought was impossible – I love solving problems now and finally understand math! Thank you for your amazing work! Best, Ema",
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
        "To sum it up, my kids are thrilled with both Notebook AI and the Matura AI instructor. As a mom, I can only say: THANK YOU!",
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
