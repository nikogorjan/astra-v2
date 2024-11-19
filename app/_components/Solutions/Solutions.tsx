type ImageProps = {
  src: string;
  alt?: string;
};

type BlogPost = {
  url: string;
  image: ImageProps;
  title: string;
  description: string;
  button: string;
};

type Props = {
  heading: string;
  blogPosts: BlogPost[];
};

export type SolutionsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Solutions = (props: SolutionsProps) => {
  const { heading, blogPosts } = {
    ...SolutionsDefaults,
    ...props,
  } as Props;
  return (
    <section
      id="solutions"
      className="px-[5%] py-8 pb-12 md:pb-[104px] md:py-14 bg-white relative overflow-hidden"
    >
      <div className="container z-20 relative">
        <div className="mb-6 md:mb-14">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="font-bold md:mb-6 text-[#15385b] text-[28px] leading-[28px] md:text-[42px] md:leading-[56px]">
              {heading}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex size-full flex-col items-center justify-start"
            >
              <a href={post.url} className="mb-4 w-full">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="size-full object-cover"
                />
              </a>
              <div className="flex w-full flex-col items-start justify-start">
                <a className="mb-2" href={post.url}>
                  <h2 className="font-bold text-[#15385B] text-[24px] leading-[28px]">
                    {post.title}
                  </h2>
                </a>
                <p className="text-[#1A1A1A] text-[16px] leading-5">
                  {post.description}
                </p>
                <div className="bg-[#3C50E0] px-5 py-3 h-[47px] flex items-center justify-center mt-4 cursor-pointer font-bold text-sm leading-[18px]">
                  {post.button}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="background absolute inset-0 z-10">
        <div className="relative container h-full">
          <div className="w-full h-full flex justify-between"></div>
          <div className="absolute inset-0 z-10">
            {" "}
            {/* Increase z-index */}
            <img
              src="/images/LinesWhite.svg"
              className="size-full object-cover hidden custom-lg:flex"
              alt="White Lines 3"
            />
            <div className="absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const SolutionsDefaults: SolutionsProps = {
  heading: "Get Step-by-Step Solutions Instantly, 24/7",
  blogPosts: [
    {
      url: "#",
      image: {
        src: "/images/b1.png",
        alt: "Solution Image 1",
      },
      title: "AI Tutor",
      description:
        "Get real-time help tailored to your needs, making complex concepts simple.",
      button: "Get Started",
    },
    {
      url: "#",
      image: {
        src: "/images/b2.png",
        alt: "Solution Image 2",
      },
      title: "Matura AI",
      description:
        "Achieve higher scores with targeted practice and intelligent feedback.",
      button: "Learn More",
    },
    {
      url: "#",
      image: {
        src: "/images/b3.png",
        alt: "Solution Image 3",
      },
      title: "Notebook AI",
      description:
        "Streamline your notes, find key insights, and stay on top of your studies.",
      button: "Join the Waitlist",
    },
  ],
};

Solutions.displayName = "Solutions";
