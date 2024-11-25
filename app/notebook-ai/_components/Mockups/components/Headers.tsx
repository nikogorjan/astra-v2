export const Heading = () => {
  return (
    <div id="frame1" className="px-[5%] pt-8 md:pt-14">
      <div className="container">
        <div className="flex flex-col gap-y-8 md:items-center  text-center">
          <div className="max-w-[554px]">
            <h1 className="mb-6 text-3xl font-bold tracking-[0.5px] md:text-[56px] md:leading-[56px]">
              Your <span className="text-[#FDB300]">Personalized</span> AI
              Research Assistant
            </h1>
            <div className="text-sm py-4 px-6 bg-[#3C50E0] custom-button-font font-bold sm:inline-flex justify-center border-none cursor-pointer">
              Try 5 Free Questions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Heading.displayName = "Heading";
