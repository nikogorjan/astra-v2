import { BlueButtonRight } from "@/components/Buttons/BlueButtonRight";

type videoProps = {
  title: string;
  type: string;
  time: string;
  url: string;
  image: ImageProps;
};

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  parent: string;
  type: string;
  numberOfChapters: string;
  fullTime: string;
  videos: videoProps[];
};

export type AditionProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Adition = (props: AditionProps) => {
  const { heading, videos, parent, type, numberOfChapters, fullTime } = {
    ...AditionDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-[19px] md:py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-x-12 justify-between">
          <div className="md:w-[552px]">
            <div className="flex items-center  gap-2 mb-8">
              <p className="text-[#8a9bad] text-sm font-semibold leading-7">
                Home
              </p>
              <img src="/Icons/right-silver.svg" alt="Chevron right silver" />
              <p className="text-sm text-[#8a9bad] font-semibold leading-7">
                {parent}
              </p>
              <img src="/Icons/right-silver.svg" alt="Chevron right silver" />
              <p className="text-sm font-semibold leading-7">{heading}</p>
            </div>
            <h2 className="mb-4 rb-5 text-[38px] leading-[38px] font-bold md:mb-6 md:text-[64px] md:leading-[64px]">
              {heading}
            </h2>
            <div className="flex items-center  gap-2 ">
              <p className="text-sm font-semibold leading-7">{type}</p>
              <div className="size-[3.648px] bg-[#e2e6ea] rounded-full"></div>
              <p className="text-sm font-semibold leading-7">
                {numberOfChapters} chapters
              </p>
              <div className="size-[3.648px] bg-[#e2e6ea] rounded-full"></div>
              <p className="text-sm font-semibold leading-7">{fullTime}</p>
            </div>
            <BlueButtonRight text="Start This Chapter" />
            <div className="mt-8">
              <h2 className="text-[22px] font-bold leading-6 mb-5">
                What is addition and subtraction?
              </h2>
              <p className="font-semibold text-[#d9d9d9] leading-6">
                Addition and subtraction are fundamental mathematical operations
                used to calculate changes or differences between numbers.
                Addition involves combining two or more numbers to get a total
                or sum, while subtraction calculates the difference between
                numbers by removing a part from a whole. These operations are
                essential in everyday calculations and are the basis for more
                complex mathematical concepts.
              </p>
              <div className="py-2 pl-4">
                <div className="flex gap-3 mt-2">
                  <div className="size-4">
                    <img
                      src="/Icons/bullet.svg"
                      className="size-full object-cover"
                    />
                  </div>
                  <p className="text-[#d9d9d9] leading-[22px]">
                    <span className="text-[#f3f5f7] font-bold">Addition:</span>{" "}
                    The order of numbers doesn’t matter (commutative property).
                    3 + 2 is the same as 2 + 3. The result will always be a
                    greater or equal value than the numbers being added unless
                    adding zero.
                  </p>
                </div>
                <div className="flex gap-3 mt-2">
                  <div className="size-4">
                    <img
                      src="/Icons/bullet.svg"
                      className="size-full object-cover"
                    />
                  </div>
                  <p className="text-[#d9d9d9] leading-[22px]">
                    <span className="text-[#f3f5f7] font-bold">
                      Subtraction:
                    </span>{" "}
                    The order of numbers is important. Subtracting a larger
                    number from a smaller one results in a negative value. 5 - 2
                    = 3, but 2 - 5 = -3.
                  </p>
                </div>
              </div>
              <h3 className="text-md font-bold leading-7 mt-5">
                Key characteristics:{" "}
              </h3>
              <div className="py-2 pl-4">
                <div className="flex gap-3 mt-2">
                  <div className="size-4">
                    <img
                      src="/Icons/bullet.svg"
                      className="size-full object-cover"
                    />
                  </div>
                  <p className="text-[#d9d9d9] leading-[22px]">
                    <span className="text-[#f3f5f7] font-bold">Addition:</span>{" "}
                    The order of numbers doesn’t matter (commutative property).
                    3 + 2 is the same as 2 + 3. The result will always be a
                    greater or equal value than the numbers being added unless
                    adding zero.
                  </p>
                </div>
                <div className="flex gap-3 mt-2">
                  <div className="size-4">
                    <img
                      src="/Icons/bullet.svg"
                      className="size-full object-cover"
                    />
                  </div>
                  <p className="text-[#d9d9d9] leading-[22px]">
                    <span className="text-[#f3f5f7] font-bold">
                      Subtraction:
                    </span>{" "}
                    The order of numbers is important. Subtracting a larger
                    number from a smaller one results in a negative value. 5 - 2
                    = 3, but 2 - 5 = -3.
                  </p>
                </div>
                <div className="flex gap-3 mt-2">
                  <div className="size-4">
                    <img
                      src="/Icons/bullet.svg"
                      className="size-full object-cover"
                    />
                  </div>
                  <p className="text-[#d9d9d9] leading-[22px]">
                    <span className="text-[#f3f5f7] font-bold">
                      Zero in Addition and Subtraction:
                    </span>{" "}
                    Adding zero to any number leaves the number unchanged, and
                    subtracting zero similarly doesn’t change the value.
                    Subtracting a number from itself always results in zero.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 md:w-[624px] items-center justify-center md:justify-end mt-[46px]">
            {videos.map((video, index) => (
              <a href={video.url} key={index} className=" md:w-296px">
                <img src={video.image.src} className="" />
                <p className="font-bold leading-5 mt-2">{video.title}</p>
                <div className="flex items-center  gap-2 mt-2 ">
                  <p className="text-sm font-semibold leading-7 text-[#8A9BAD]">
                    {video.type}
                  </p>
                  <div className="size-[3.648px] bg-[#8A9BAD] rounded-full"></div>
                  <p className="text-sm font-semibold leading-7 text-[#8A9BAD]">
                    {video.time}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/*{videos.map((video, index) => (
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
          ))}*/}
      </div>
    </section>
  );
};

export const AditionDefaults: AditionProps = {
  heading: "Addition and subtraction",
  type: "Chapter",
  parent: "Arithmetic",
  numberOfChapters: "14",
  fullTime: "1h 29min",
  videos: [
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video2.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video2.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-1.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-2.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-3.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-4.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-5.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-6.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-7.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-8.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-9.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-10.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-11.png",
        alt: "video",
      },
    },
    {
      title: "Basic addition",
      type: "Explanation",
      time: "5min 9s",
      url: "/video-explanations/arithmetic",
      image: {
        src: "/images/video-12.png",
        alt: "video",
      },
    },
  ],
};

Adition.displayName = "Adition";
