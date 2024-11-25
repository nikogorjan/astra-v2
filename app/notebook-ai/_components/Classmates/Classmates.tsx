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

export type ClassmatesProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Classmates = (props: ClassmatesProps) => {
  const { heading, blogPosts } = {
    ...ClassmatesDefaults,
    ...props,
  } as Props;
  return (
    <section
      id="Classmates"
      className="px-[5%] py-8 md:py-[110px] bg-[#F8F8FA] relative overflow-hidden"
    >
      <div className="container z-20 relative">
        <div className="w-full flex items-center justify-center mb-5 md:mb-12">
          <div className="max-w-[631px] text-center">
            <h2 className="font-bold text-[#15385B] text-[28px] leading-[28px] mb-5 md:text-[42px] md:leading-[42px]">
              More powerful with classmates
            </h2>
            <p className="text-[#525B64] font-semibold leading-[125%] md:text-lg mb-6">
              Notebook AI does not use your personal data, including your source
              uploads, queries, and the responses from the model for training.
            </p>
          </div>
        </div>
        <div className="mb-[80px] w-full flex items-center justify-center">
          <img
            src="/images/privacy.png"
            alt="privacy img"
            className="max-w-[443px] "
          />
        </div>
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
              className="flex size-full flex-col items-start justify-start"
            >
              <a href={post.url} className="size-[42px]  mb-6">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="w-full object-cover"
                />
              </a>
              <div className="flex w-full flex-col items-start sm:justify-between sm:min-h-[168px]">
                <div className="mb-8">
                  <a className="mb-2" href={post.url}>
                    <h2 className="font-bold text-[#1A1A1A] text-[18px] leading-[18px] mb-2">
                      {post.title}
                    </h2>
                  </a>
                  <p className="text-[#525B64] text-[16px] leading-[140%]">
                    {post.description}
                  </p>
                </div>
                <div className="text-[#525b64] font-semibold leading-[140%]">
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

export const ClassmatesDefaults: ClassmatesProps = {
  heading: "How people are using Notebook AI",
  blogPosts: [
    {
      url: "#",
      image: {
        src: "/Icons/classmates1.svg",
        alt: "Solution Image 1",
      },
      title: "Get higher grades with Notebook AI",
      description:
        "Upload lecture recordings, textbook chapters, and research papers. Ask Notebook AI to explain complex concepts in simple terms, provide real-world examples, and reinforce your understanding.",
      button: "Learn faster and deeper.",
    },
    {
      url: "#",
      image: {
        src: "/Icons/classmates2.svg",
        alt: "Solution Image 2",
      },
      title: "Works for every school and class",
      description:
        "Upload your source material and let Notebook AI create a polished presentation outline, complete with key talking points and supporting evidence. ",
      button: "Present with confidence.",
    },
    {
      url: "#",
      image: {
        src: "/Icons/classmates3.svg",
        alt: "Solution Image 3",
      },
      title: "Spark new ideas",
      description:
        "Upload brainstorming notes, market research, and competitor research. Ask Notebook AI to identify trends, generate new product ideas, and uncover hidden opportunities.",
      button: "Unlock your creative potential.",
    },
  ],
};

Classmates.displayName = "Classmates";
