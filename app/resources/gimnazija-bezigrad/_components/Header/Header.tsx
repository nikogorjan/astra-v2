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

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header = (props: HeaderProps) => {
  const { heading, description, type, fullTime } = {
    ...HeaderDefaults,
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
              <p className="text-sm font-semibold leading-7 text-[#8a9bad]">
                School
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
              <p className="text-sm font-semibold leading-7">{fullTime}</p>
            </div>
            <p className="text-[#d9d9d9] font-semibold leading-6">
              {description}
            </p>
          </div>
          <div className="w-full lg:w-[379px] flex flex-col justify-end items-center shrink-0">
            <div className="bg-[#FDB300] border border-[rgba(255,255,255,0.10)] h-[197px] w-full relative flex justify-center items-end">
              <img
                src="/images/topic-group3.png"
                alt="Group img"
                className="absolute bottom-0 translate-y-[2px]" // Align image to the bottom center, slightly offset upwards
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
      </div>
    </section>
  );
};

export const HeaderDefaults: HeaderProps = {
  heading: "Gimnazija Bežigrad",
  description:
    "Gimnazija Bežigrad is a top secondary school in Ljubljana, known for its strong academic programs and high Matura exam results. It offers a broad curriculum, emphasizing sciences, mathematics, and languages, along with diverse extracurricular activities. The school has a reputation for preparing students for higher education and boasts many successful alumni.",
  type: "School",
  numberOfChapters: "10",
  fullTime: "215 Topics",
};

Header.displayName = "Header";
