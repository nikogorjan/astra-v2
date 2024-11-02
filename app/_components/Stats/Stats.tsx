export const Stats = () => {
  return (
    <section id="relume" className="px-[5%] py-8 md:py-14">
      <div className="container">
        <div className="grid auto-cols-fr gap-3 md:grid-cols-2">
          <div className="relative grid auto-cols-fr grid-cols-1 first-of-type:row-span-1 first-of-type:flex-col md:col-span-2  lg:first-of-type:col-span-2 border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[6px]">
            <img
              src="/images/full-graph.svg"
              className="w-full object-cover hidden lg:block"
              alt="Overlay Line"
            />
            <img
              src="/images/full-graph-mobile.svg"
              className="w-full object-cover lg:hidden"
              alt="Overlay Line"
            />
            <div
              className="absolute inset-0 -z-10"
              style={{ top: "125px", bottom: "126px" }}
            >
              <img
                src="/images/graphLines.svg"
                className="size-full object-cover custom-lg:flex"
                alt="Background Lines"
              />
            </div>
          </div>
          <div>
            <img
              src="/images/BentoLeft.svg"
              className="w-full object-cover hidden lg:block"
              alt="Overlay Line"
            />
            <img
              src="/images/BentoLeftMobile.svg"
              className="w-full object-cover lg:hidden"
              alt="Overlay Line"
            />
          </div>
          <div>
            <img
              src="/images/BentoRight.svg"
              className="w-full object-cover hidden lg:block"
              alt="Overlay Line"
            />
            <img
              src="/images/BentoRightMobile.svg"
              className="w-full object-cover lg:hidden"
              alt="Overlay Line"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Stats.displayName = "Stats";
