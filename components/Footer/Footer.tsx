export const Footer = () => {
  return (
    <>
      <section id="footer" className=" px-[5%] py-8 md:py-14 ">
        <div className="container relative md:px-6">
          <div className="md:flex md:flex-wrap gap-8 md:justify-between  md:flex-row grid grid-cols-2 mb-8">
            <div>
              <p className="uppercase text-xs font-bold leading-[140%] mb-3">
                products
              </p>
              <img
                src="/Icons/aifooter.svg"
                className="mb-[18px]"
                alt="Footer Hook Button"
              />
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Tutor AI
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Matura AI
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Notes AI
              </p>
            </div>

            <div>
              <p className="uppercase text-xs font-bold leading-[140%] mb-3">
                subjects
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Math
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Chemistry
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                English{" "}
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Physics{" "}
              </p>
            </div>
            <div>
              <p className="uppercase text-xs font-bold leading-[140%] mb-3">
                resources
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Video Explanations{" "}
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[32px]">
                Notes
              </p>
              <p className="uppercase text-xs font-bold leading-[140%] mb-3">
                follow us
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Instagram{" "}
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Linked in{" "}
              </p>
            </div>
            <div>
              <p className="uppercase text-xs font-bold leading-[140%] mb-3">
                partnership
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[32px]">
                Become a Partner{" "}
              </p>

              <p className="uppercase text-xs font-bold leading-[140%] mb-3">
                legal
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Terms & Conditions{" "}
              </p>
              <p className="text-sm text-[#afafaf] font-semibold leading-3 mb-[18px]">
                Privacy Policy{" "}
              </p>
            </div>
          </div>
          <div className="inline-flex flex items-center justify-center font-bold text-[14px] border-none py-[3px] pl-[6px] pr-[8px] custom-button-font cursor-pointer mr-3 tag-button h-9 mb-6">
            <img
              src="/Icons/Britain.svg"
              alt="Britain Icon"
              className="w-[24px] h-[24px] margin-left-animation"
            />
            <p className="ml-1">EN</p>
          </div>
        </div>
      </section>
      <div className=" bg-[#3C50E0] px-[5%] ">
        <div className="flex flex-col md:flex-row justify-between py-[15px] container items-center">
          <p className="text-xs font-semibold leading-[10px] md:order-0 mb-2 md:mb-0">
            © 2024 Astra.si. All rights reserved.
          </p>
          <img
            src="/Icons/bannerlogo.svg"
            className="order-first md:order-1 mb-4 md:mb-0"
            alt="Footer Banner Logo"
          />
          <p className="text-xs font-semibold leading-[10px] md:order-2">
            &quot;For the next generation&quot;
          </p>
        </div>
      </div>
    </>
  );
};

Footer.displayName = "Footer";
