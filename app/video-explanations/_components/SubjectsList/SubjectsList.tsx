type TopicProps = {
  title: string;
  description: string;
  url: string;
};

type Props = {
  heading: string;
  topics: TopicProps[];
};

export type SubjectsListProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const SubjectsList = (props: SubjectsListProps) => {
  const { heading, topics } = {
    ...SubjectsListDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-[548px] md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-[38px] leading-[38px] font-bold md:mb-6 md:text-[64px] md:leading-[64px]">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-[38px] gap-y-3 md:grid-cols-3">
          {topics.map((topic, index) => (
            <a
              href={topic.url}
              key={index}
              className="px-6 py-5 hover:bg-[#3C50E0] transition-colors duration-300 ease-in-out cursor-pointer block"
            >
              <div className="w-full flex justify-between items-center mb-3 ">
                <h2 className="text-md leading-4 font-bold">{topic.title}</h2>
                <img
                  src="/Icons/arrow-rigth.svg"
                  alt="Arrow Right Icon"
                  className="w-4 h-4"
                />
              </div>
              <p className="text-sm leading-[14px]">{topic.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SubjectsListDefaults: SubjectsListProps = {
  heading: "List of video explenation topics",
  topics: [
    {
      title: "Arithmetic",
      description: "215 Explanations",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Algebra",
      description: "150 Equations",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Geometry",
      description: "85 Theorems",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Calculus",
      description: "300 Formulas",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Statistics",
      description: "125 Distributions",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Trigonometry",
      description: "75 Identities",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Number Theory",
      description: "50 Prime Numbers",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Linear Algebra",
      description: "200 Matrices",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Differential Equations",
      description: "100 Solutions",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Combinatorics",
      description: "80 Permutations",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Probability",
      description: "175 Events",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Data Science",
      description: "250 Algorithms",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Graph Theory",
      description: "95 Graphs",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Optimization",
      description: "150 Models",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Machine Learning",
      description: "350 Techniques",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Cryptocurrency",
      description: "50 Blockchain",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Game Theory",
      description: "120 Strategies",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Information Theory",
      description: "180 Entropy",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Topology",
      description: "70 Surfaces",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Actuarial Science",
      description: "90 Risk Analysis",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Chaos Theory",
      description: "40 Fractals",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Numerical Analysis",
      description: "130 Approximations",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Computational Biology",
      description: "200 Genome Sequencing",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Computational Linguistics",
      description: "120 NLP Techniques",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Artificial Intelligence",
      description: "400 Neural Networks",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Statistical Physics",
      description: "80 Phase Transitions",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Game Development",
      description: "150 Unity Engine",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Differential Equations",
      description: "110 Boundary Value Problems",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Robotics",
      description: "90 Autonomous Systems",
      url: "/video-explanations/arithmetic",
    },
    {
      title: "Bioinformatics",
      description: "140 DNA Analysis",
      url: "/video-explanations/arithmetic",
    },
  ],
};

SubjectsList.displayName = "SubjectsList";
