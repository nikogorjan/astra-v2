import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type RicProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Ric = (props: RicProps) => {
  const { heading, description, image } = {
    ...RicDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container max-w-[920px]">
        <div className="flex flex-col md:flex-row border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[6px] lg:hidden w-full">
          <div className="flex p-[14px] gap-4 items-start">
            <div className="flex-shrink-0">
              <img
                src={image.src}
                className="w-[97px] h-[107px]"
                alt={image.alt}
              />
            </div>
            <div className="md:mr-12 lg:mr-0">
              <div>
                <h3 className="mb-3 text-md font-semibold leading-[120%] ">
                  {heading}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end p-[14px] pt-2">
            <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full  justify-center border-none cursor-pointer">
              <div className=" flex items-center justify-center">
                <p>Start with Matura AI</p>
                <div className="w-3 h-3 ml-2">
                  <img
                    src="/Icons/arrow-rigth.svg"
                    alt="Arrow Right Icon"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Button>
          </div>
        </div>

        <div className="lg:flex flex-col md:flex-row border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[6px] hidden">
          <div className="p-[14px] flex-shrink-0">
            <img
              src={image.src}
              className="w-[151px] h-[163px]"
              alt={image.alt}
            />
          </div>
          <div className="flex flex-grow p-14 justify-between items-center w-full">
            <div className="flex-grow md:mr-12 lg:mr-0">
              <h3 className="text-lg font-semibold leading-[120%] max-w-[336px]">
                {heading}
              </h3>
            </div>
            <div className="flex w-full md:w-auto items-center justify-start md:justify-end gap-4 p-[14px] pt-2">
              <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full sm:w-auto border-none cursor-pointer">
                <div className="flex items-center justify-center">
                  <p>Start with Matura AI</p>
                  <div className="w-3 h-3 ml-2">
                    <img
                      src="/Icons/arrow-rigth.svg"
                      alt="Arrow Right Icon"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-center mt-6">
          <p className="text-xs text-[#d9d9d9] leading-[16px] text-center max-w-[768px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export const RicDefaults: RicProps = {
  heading:
    "Comprehensive preparation for the matura exam is based on real matura papers from RIC, with authentic procedures and solutions.",
  description:
    "The exam papers and grading guidelines for the matura, published on the RIC website, were prepared in accordance with the subject exam catalogs for the specific school year and may differ in content from the prescribed and currently valid subject exam catalogs.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "/images/ric.png",
    alt: "ric image",
  },
};

Ric.displayName = "Ric";
