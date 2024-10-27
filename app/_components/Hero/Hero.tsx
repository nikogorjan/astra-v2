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

export type HeroProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { heading, description, buttons, image } = {
    ...HeroDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-[880px]">
              <div className="tagline mb-6">
                <p className="custom-button-font font-bold text-[13px] leading-[18px]">
                  Powered by the most precise AI for math
                </p>
                <div className="separator"></div>
                <div></div>
              </div>

              <h1 className="mb-5 text-6xl font-bold md:text-[4rem]">
                {heading}
              </h1>
              <p className="text-sm md:text-base font-regular">{description}</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-3 md:mt-8">
                <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full sm:w-auto justify-center">
                  {buttons[0].title}
                </Button>

                <div className="custom-gradient-border w-full sm:w-auto">
                  <Button className="custom-button-font inner-button font-bold w-full sm:w-auto">
                    <div className="flex items-center gap-[6px] w-full sm:w-auto justify-center">
                      <div className="margin-right-animation">
                        {buttons[1].title}
                      </div>
                      <div className="w-4 h-4">
                        <img
                          src="/Icons/arrow-rigth.svg"
                          alt="Arrow Right Icon"
                          className="w-full h-full margin-left-animation"
                        />
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="size-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
};

export const HeroDefaults: HeroProps = {
  heading: "Master math with AI: Your personal tutor, available 24/7",
  description:
    "Improve grades and confidence with step-by-step guidance - at a fraction of traditional tutoring costs.",
  buttons: [
    { title: "Try 5 Free Questions" },
    { title: "Buy Astra AI Plus", variant: "secondary" },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
};

Hero.displayName = "Hero";
