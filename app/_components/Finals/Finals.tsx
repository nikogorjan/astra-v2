"use client";
import { Button } from "@relume_io/relume-ui";
import StarButton from "../Hero/components/StarButton";
import { Clients } from "./components/Clients";

export const Finals = () => {
  return (
    <section
      id="relume"
      className="px-[5%] py-8 md:py-14 relative overflow-hidden"
    >
      <div
        className="container max-w-[920px] p-[2px] overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #F1AC0C, #B478FF, #3C50DF, #181818)",
        }}
      >
        {/* Inner Content Wrapper with a solid background color */}
        <div className="w-full  bg-[#181818]">
          <div className="pt-12 px-4 md:px-8 flex flex-col items-center">
            <img
              src="/Icons/MaturaLogo.svg"
              className="w-[88px] md:w-[102px] mb-8"
            />

            <h2 className="text-[28px] md:text-[42px] font-bold leading-[100%] md:leading-[100%] text-center max-w-[560px]">
              With our AI tool, prepare for your final exams{" "}
              <span className="text-[#FDB300]">with ease!</span>
            </h2>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-3 md:mt-8 mb-6 sm:mb-8 w-full">
              <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full sm:w-auto justify-center border-none cursor-pointer">
                Try 5 Free Questions
              </Button>
              <StarButton />
            </div>
            <Clients />
          </div>
        </div>
        <div className="w-full  bg-[#181818] flex items-center justify-center">
          <img src="/images/macbook.svg" className="hidden md:block" />
          <img src="/images/macbookPart.svg" className="md:hidden" />
        </div>
      </div>
    </section>
  );
};

Finals.displayName = "Finals";
