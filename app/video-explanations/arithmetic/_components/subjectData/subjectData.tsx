type ExplanationProps = {
  title: string;
  time: string;
  url: string;
  status: string;
};

type OperationProps = {
  title: string;
  numberOfExplanations: string;
  time: string;
  url: string;
  explanations: ExplanationProps[];
};

type Props = {
  heading: string;
  description: string;
  type: string;
  numberOfChapters: string;
  fullTime: string;
  topics: OperationProps[];
};

export type SubjectsDataProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const SubjectsData = (props: SubjectsDataProps) => {
  const { heading, description, type, numberOfChapters, fullTime, topics } = {
    ...SubjectsDataDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-[19px] md:py-12">
      <div className="container">
        <div className="flex justify-between mb-12 md:mb-14 gap-8 flex-col lg:flex-row">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20 w-full lg:max-w-[651px]">
            <div className="flex items-center  gap-2 mb-8">
              <p className="text-[#8a9bad] text-sm font-semibold leading-7">
                Home
              </p>
              <img src="/Icons/right-silver.svg" alt="Chevron right silver" />
              <p className="text-sm font-semibold leading-7">{heading}</p>
            </div>
            <h2 className="mb-4 rb-5 text-[38px] leading-[38px] font-bold md:mb-6 md:text-[64px] md:leading-[64px]">
              {heading}
            </h2>
            <div className="flex items-center  gap-2 mb-8">
              <p className="text-sm font-semibold leading-7">{type}</p>
              <div className="size-[3.648px] bg-[#e2e6ea] rounded-full"></div>
              <p className="text-sm font-semibold leading-7">
                {numberOfChapters} chapters
              </p>
              <div className="size-[3.648px] bg-[#e2e6ea] rounded-full"></div>
              <p className="text-sm font-semibold leading-7">{fullTime}</p>
            </div>
            <p className="text-[#d9d9d9] font-semibold leading-6">
              {description}
            </p>
          </div>
          <div className="w-full lg:w-[379px] flex flex-col justify-end items-center shrink-0">
            <div className="bg-[#3C50E0] border border-[rgba(255,255,255,0.10)] h-[197px] w-full relative flex justify-center items-end">
              <img
                src="/images/topic-group.png"
                alt="Group img"
                className="absolute bottom-0 " // Align image to the bottom center, slightly offset upwards
              />
            </div>
            <div className="border border-[rgba(255,255,255,0.10)] p-6 w-full bg-[#121212]">
              <div className="flex w-full justify-between mb-[14px]">
                <img
                  src="/Icons/astra-logo.svg"
                  alt="astra img"
                  className="" // Align image to the bottom center, slightly offset upwards
                />

                <img
                  src="/Icons/up-right.svg"
                  alt="astra img"
                  className="" // Align image to the bottom center, slightly offset upwards
                />
              </div>
              <div className="max-w-[219px]">
                <p className="font-semibold leading-6">
                  Take a picture of your assignment and use AI tutor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="topics-wrapper w-full  columns-1 lg:columns-2 gap-4 md:gap-12">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-[#121212] border border-[rgba(255,255,255,0.10)] p-6 items-start flex-col self-start inline-block topic-holder lg:mb-12 mb-4"
              >
                <div className="flex">
                  <div className="w-full justify-between flex">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="/images/progress-circle.png"
                          alt="circle img"
                          className="mb-[10px]"
                        />
                        <div className="w-[2px] h-2 bg-[#00d69e]"></div>
                      </div>
                      <div>
                        <p className="text-[#fdb300] font-bold leading-4">
                          {topic.title}
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold leading-7 text-[#8A9BAD]">
                            {topic.numberOfExplanations} explanations
                          </p>
                          <div className="size-[3.648px] bg-[#8A9BAD] rounded-full"></div>
                          <p className="text-sm font-semibold leading-7 text-[#8A9BAD]">
                            {topic.time}
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href={topic.url}
                      className="bg-[#3C50E0] px-5 py-3  items-center justify-center h-[47px] text-sm leading-[18px] font-semibold cursor-pointer hidden sm:flex"
                    >
                      View Details
                    </a>
                  </div>
                </div>

                <div>
                  {topic.explanations.map((explanation, index) => (
                    <div key={index}>
                      <div className="flex mt-3">
                        <div className="w-full justify-between flex">
                          <div className="flex gap-4">
                            <div className="flex flex-col items-center justify-center w-9 w-important flex-shrink-0">
                              {explanation.status === "complete" ? (
                                <img
                                  src="/Icons/green-check.svg"
                                  alt="complete icon"
                                  className="mb-[10px]"
                                />
                              ) : explanation.status === "in-progress" ? (
                                <div className="size-[3.648px] bg-[#00D69E] rounded-full mb-[10px]"></div>
                              ) : (
                                <div className="size-[3.648px] bg-[#e2e6ea] rounded-full mb-[10px]"></div>
                              )}
                              {explanation.status === "complete" ? (
                                <div className="w-[2px] h-[30px] bg-[#00d69e]"></div>
                              ) : (
                                <div className="w-[2px] h-[30px] bg-[#e2e6ea]"></div>
                              )}
                            </div>
                            <div className="custom-long flex-grow">
                              {explanation.status === "complete" ? (
                                <p className="text-[#888888] font-bold leading-4 overflow-hidden text-ellipsis truncate custom-long">
                                  {explanation.title}
                                </p>
                              ) : (
                                <p className="text-[#ffffff] font-bold leading-4 overflow-hidden text-ellipsis truncate custom-long">
                                  {explanation.title}
                                </p>
                              )}

                              <div className="flex items-center gap-2 mt-2">
                                {explanation.status === "complete" ? (
                                  <p className="text-[#4e5660] font-bold leading-4">
                                    {explanation.time}
                                  </p>
                                ) : (
                                  <p className="text-[#8A9BAD] font-bold leading-4">
                                    {explanation.time}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="w-6 ml-2">
                            {explanation.status === "complete" ? (
                              <a
                                href={explanation.url}
                                className="bg-transparent  flex items-center justify-center h-[24px] w-[24px] text-sm cursor-pointer border border-[#3C50E0] "
                              >
                                <img
                                  src="/Icons/blue-play.svg"
                                  className="ml-[1px]"
                                />
                              </a>
                            ) : (
                              <a
                                href={explanation.url}
                                className="  flex items-center justify-center h-[24px] w-[24px] text-sm cursor-pointer border border-[#3C50E0] bg-[#3C50E0] "
                              >
                                <img
                                  src="/Icons/white-play.svg"
                                  className="ml-[1px]"
                                />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={topic.url}
                  className="bg-[#3C50E0] px-5 py-3  items-center justify-center h-[47px] text-sm leading-[18px] font-semibold cursor-pointer flex sm:hidden mt-6 "
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SubjectsDataDefaults: SubjectsDataProps = {
  heading: "Arithmetics",
  description:
    "Arithmetic is a branch of mathematics that deals with counting and basic operations on numbers, such as addition, subtraction, multiplication, and division. It is based on rules and properties of numerical operations that enable solving everyday arithmetic problems. It is important for understanding basic mathematical concepts and serves as a foundation for further studies in mathematics.",
  type: "Topic",
  numberOfChapters: "10",
  fullTime: "17h 37min",
  topics: [
    {
      title: "Addition and subtraction",
      numberOfExplanations: "14",
      time: "1h 29min",
      url: "/video-explanations/arithmetic/adition-and-substraction",
      explanations: [
        {
          title: "Basic addition",
          time: "5min 9sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "complete",
        },
        {
          title: "Subtraction with decimal numbers",
          time: "2min 37sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "in-progress",
        },
        {
          title: "Multiplication with fractions",
          time: "6min 15sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Division with fractions",
          time: "7min 42sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Average of numbers",
          time: "4min 58sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Explanation of geometric shapes",
          time: "3min 20sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Introduction to algebraic equations",
          time: "10min 23sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Probability theory basics",
          time: "8min 50sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Graphing linear equations",
          time: "5min 56sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
      ],
    },
    {
      title: "Addition and subtraction",
      numberOfExplanations: "14",
      time: "1h 29min",
      url: "/video-explanations/arithmetic/adition-and-substraction",
      explanations: [
        {
          title: "Basic addition",
          time: "5min 9sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "complete",
        },
        {
          title: "Subtraction with decimal numbers",
          time: "2min 37sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "in-progress",
        },
        {
          title: "Multiplication with fractions",
          time: "6min 15sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Division with fractions",
          time: "7min 42sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Average of numbers",
          time: "4min 58sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Explanation of geometric shapes",
          time: "3min 20sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
      ],
    },
    {
      title: "Addition and subtraction",
      numberOfExplanations: "14",
      time: "1h 29min",
      url: "/video-explanations/arithmetic/adition-and-substraction",
      explanations: [
        {
          title: "Basic addition",
          time: "5min 9sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "complete",
        },
        {
          title: "Subtraction with decimal numbers",
          time: "2min 37sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "in-progress",
        },
        {
          title: "Multiplication with fractions",
          time: "6min 15sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Division with fractions",
          time: "7min 42sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Average of numbers",
          time: "4min 58sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Explanation of geometric shapes",
          time: "3min 20sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Introduction to algebraic equations",
          time: "10min 23sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Probability theory basics",
          time: "8min 50sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Graphing linear equations",
          time: "5min 56sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Converting fractions to decimals",
          time: "8min 14sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
      ],
    },
    {
      title: "Addition and subtraction",
      numberOfExplanations: "14",
      time: "1h 29min",
      url: "/video-explanations/arithmetic/adition-and-substraction",
      explanations: [
        {
          title: "Basic addition",
          time: "5min 9sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "complete",
        },
        {
          title: "Subtraction with decimal numbers",
          time: "2min 37sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "in-progress",
        },
        {
          title: "Multiplication with fractions",
          time: "6min 15sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Division with fractions",
          time: "7min 42sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Average of numbers",
          time: "4min 58sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Explanation of geometric shapes",
          time: "3min 20sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Introduction to algebraic equations",
          time: "10min 23sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Probability theory basics",
          time: "8min 50sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Graphing linear equations",
          time: "5min 56sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Finding square roots",
          time: "6min 29sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Simplifying algebraic expressions",
          time: "3min 52sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Calculating surface area",
          time: "7min 18sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Understanding probability concepts",
          time: "2min 54sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Converting units of measurement",
          time: "8min 37sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
        {
          title: "Analyzing statistical data",
          time: "6min 45sec",
          url: "/video-explanations/arithmetic/adition-and-substraction/basic-adition",
          status: "not-started",
        },
      ],
    },
  ],
};

SubjectsData.displayName = "SubjectsData";
