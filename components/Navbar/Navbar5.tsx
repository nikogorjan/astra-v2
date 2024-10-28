"use client";

import { useState, useEffect } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronDown } from "react-icons/rx";
import { motion } from "framer-motion";
import { Banner } from "../Banner/Banner";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  links: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Navbar5 = (props: Navbar5Props) => {
  const { logo, links, buttons } = {
    ...Navbar5Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1400px)");
  const [menuHeight, setMenuHeight] = useState("100vh"); // Default height as fallback

  useEffect(() => {
    if (isMobileMenuOpen) {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const availableHeight = `calc(100vh - ${bannerHeight + navbarHeight}px)`;
      setMenuHeight(availableHeight);
      console.log(menuHeight);
    }
  }, [isMobileMenuOpen, isMobile]);

  return (
    <nav className="sticky top-0 z-50 custom-lg:border-b custom-lg:border-[rgba(221,221,221,0.05)] bg-[#0C0C0C]  ">
      <Banner />
      <div className="flex w-full items-center justify-between min-h-[73px] custom-lg:px-[5%]">
        <div className="size-full custom-lg:flex custom-lg:items-center custom-lg:justify-between">
          <div className="custom-lg:flex">
            <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 custom-lg:min-h-full custom-lg:px-0">
              <div className="flex items-center justify-center">
                <a href={logo.url}>
                  <img src={logo.src} alt={logo.alt} />
                </a>
                <img
                  src="/images/Line.svg"
                  alt="Separator"
                  className="separator-img ml-4 hidden custom-lg:block"
                />
              </div>

              <div className="flex items-center justify-center">
                <Button className="custom-lg:hidden font-bold text-sm/[14px] bg-[#3C50E0] border-none py-4 px-6 custom-button-font">
                  Try for free
                </Button>
                <button
                  className="-mr-2 flex size-12 flex-col items-end justify-center custom-lg:hidden"
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                  <motion.span
                    className="my-[3px] h-0.5 bg-white rounded-full"
                    style={{ width: "1.625rem" }} // First line: 1.5rem
                    animate={
                      isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"
                    }
                    variants={topLineVariants}
                  />
                  <motion.span
                    className="my-[3px] h-0.5 bg-white rounded-full"
                    style={{ width: "1.0625rem" }} // Second line: 0.98rem
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    variants={middleLineVariants}
                  />
                  <motion.span
                    className="my-[3px] h-0.5 bg-white rounded-full"
                    style={{ width: "0.5625rem" }} // Third line: 0.52rem
                    animate={
                      isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"
                    }
                    variants={bottomLineVariants}
                  />
                </button>
              </div>
            </div>
            <motion.div
              variants={{
                open: {
                  height: "var(--height-open, calc(100vh - 134px))",
                },
                close: {
                  height: "var(--height-closed, 0)",
                },
              }}
              initial="close"
              exit="close"
              animate={isMobileMenuOpen ? "open" : "close"}
              transition={{ duration: 0.4 }}
              className={`overflow-auto px-[5%] ${
                isMobileMenuOpen ? "py-4" : ""
              } gap-5 flex flex-col custom-lg:flex-row custom-lg:items-center custom-lg:px-0 custom-lg:[--height-closed:auto] custom-lg:[--height-open:auto] justify-between custom-lg:justify-center`}
            >
              <div className="custom-lg:flex gap-5">
                {links.map((navLink, index) => (
                  <div key={index} className="first:pt-4 custom-lg:first:pt-0">
                    {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                      <SubMenu navLink={navLink} isMobile={isMobile} />
                    ) : (
                      <a
                        href={navLink.url}
                        className="block py-3 custom-lg:text-sm text-md custom-lg:py-2 custom-button-font font-bold custom-lg:text-[#afafaf] text-text-alternative uppercase custom-lg:normal-case hover:text-white transition-colors duration-300"
                      >
                        {navLink.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 custom-lg:hidden">
                <div className="flex items-center justify-center font-bold text-[14px] border-none py-4 px-4 custom-button-font cursor-pointer mr-2">
                  <img
                    src="/Icons/Person.svg"
                    alt="Person Icon"
                    className="w-[18px] h-[18px] margin-left-animation"
                  />

                  <p className="ml-1">Login</p>
                </div>
                <Button className="py-4 px-6 bg-[#3C50E0] custom-button-font font-bold w-full sm:w-auto justify-center border-none">
                  Try for free
                </Button>

                <div className="custom-gradient-border w-full ">
                  <Button className="custom-button-font inner-button font-bold w-full ">
                    <div className="flex items-center gap-[6px] w-full  justify-center">
                      <div className="margin-right-animation">
                        Buy Astra AI Plus
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
              <motion.div
                className="custom-gradient-border-small w-full sm:w-auto hidden custom-lg:flex"
                whileHover="hover" // Trigger hover animation on this div
              >
                <Button className="custom-button-font inner-button-small font-bold w-full sm:w-auto">
                  <div className="flex items-center gap-[6px] w-full sm:w-auto justify-center">
                    <div className="margin-right-animation font-bold">
                      Buy Astra AI Plus
                    </div>
                    <div className="w-4 h-4">
                      <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 15"
                        width="16"
                        height="15"
                      >
                        <title>Vector-svg</title>
                        <defs>
                          <image
                            width="5"
                            height="7"
                            id="imgStar1"
                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAAXNSR0IB2cksfwAAADBQTFRF/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMAp6suWQAAABB0Uk5TAAe7BmP/ixBT2ul2BfIjSo9/nRoAAAAkSURBVHicY2Rg/M/IwMDAyKB8l1HESYqx82IYI88lJUaGDwIASbcGKKgxxLoAAAAASUVORK5CYII="
                          />
                          <image
                            width="8"
                            height="9"
                            id="imgStar2"
                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAMAAAA4jZ0cAAAAAXNSR0IB2cksfwAAAD9QTFRF/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMAnnHgqAAAABV0Uk5TAEsD8iZI/3pJqfX8t14Bo/thfCUMPU2x+QAAAD5JREFUeJxjZGBgYPwPIhgYmBgZ/4AZrIyMP4EMDiAfyGRk5GD//YfrD+t7sBTPO6higbdgBlw7A4PIGwYGAOB4DBgOWeH5AAAAAElFTkSuQmCC"
                          />
                          <image
                            width="12"
                            height="11"
                            id="imgStar3"
                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAMAAAB8rpxtAAAAAXNSR0IB2cksfwAAAFdQTFRF/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMAsRqmQwAAAB10Uk5TAGpe28lA/ysGs6cEFIDo5HsSL/byMA6B6bIyXFB4kp28AAAAU0lEQVR4nG2NwQpAUBRE54SipEg2/v/P9HZYSFGI+55nZTbTubeZQSa4vHlIOD7IEPsLOadSVoMStudSwEzDoqAK1MEUP5apx5gJba373VHPYHYDJvMPIQDzAi8AAAAASUVORK5CYII="
                          />
                        </defs>

                        {/* Define motion for each star using 'hover' variant */}
                        <motion.use
                          id="Star1"
                          href="#imgStar1"
                          x="1"
                          y="8"
                          initial={{ scale: 1 }}
                          variants={{
                            hover: { scale: [1, 0, 1] },
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: 0.2,
                          }}
                        />
                        <motion.use
                          id="Star2"
                          href="#imgStar2"
                          x="0"
                          y="0"
                          initial={{ scale: 1 }}
                          variants={{
                            hover: { scale: [1, 0, 1] },
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: 0.4,
                          }}
                        />
                        <motion.use
                          id="Star3"
                          href="#imgStar3"
                          x="4"
                          y="3"
                          initial={{ scale: 1 }}
                          variants={{
                            hover: { scale: [1, 0, 1] },
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: 0.6,
                          }}
                        />
                      </svg>
                    </div>
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="hidden custom-lg:flex items-center justify-center">
            <div className="flex items-center justify-center font-bold text-[14px] border-none py-[3px] pl-[6px] pr-[8px] custom-button-font cursor-pointer mr-3 tag-button h-9">
              <img
                src="/Icons/Britain.svg"
                alt="Britain Icon"
                className="w-[24px] h-[24px] margin-left-animation"
              />

              <p className="ml-1">EN</p>
            </div>

            <div className="flex items-center justify-center font-bold text-[14px] border-none py-4 px-4 custom-button-font cursor-pointer mr-2">
              <img
                src="/Icons/Person.svg"
                alt="Person Icon"
                className="w-full h-full margin-left-animation"
              />

              <p className="ml-1">Login</p>
            </div>
            {buttons.map((button, index) => (
              <Button
                key={index}
                {...button}
                className="font-bold text-sm/[14px] bg-[#3C50E0] border-none py-4 px-6 custom-button-font"
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
const SubMenu = ({
  navLink,
  isMobile,
}: {
  navLink: NavLink;
  isMobile: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="w-full flex custom-lg:ml-4 items-center justify-between gap-5 py-3 text-center text-md custom-lg:w-auto custom-lg:flex-none custom-lg:justify-start custom-lg:gap-2 custom-lg:py-2 custom-lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span className="block custom-lg:text-sm text-md custom-button-font font-bold uppercase custom-lg:normal-case custom-lg:text-[#afafaf] text-text-alternative hover:text-white  duration-300">
          {navLink.title}
        </span>
        <motion.span
          animate={isDropdownOpen ? "rotated" : "initial"}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      {/*{isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            transition={{ duration: 0.2 }}
            className="bg-background-primary custom-lg:absolute custom-lg:z-50 custom-lg:border custom-lg:border-border-primary custom-lg:p-2 custom-lg:[--y-close:25%]"
          >
            {navLink.subMenuLinks?.map((subMenuLink, index) => (
              <a
                key={index}
                href={subMenuLink.url}
                className="block py-3 text-center custom-lg:px-4 custom-lg:py-2 custom-lg:text-left"
              >
                {subMenuLink.title}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}*/}
    </nav>
  );
};

export const Navbar5Defaults: Navbar5Props = {
  logo: {
    url: "#",
    src: "/images/logo.svg",
    alt: "Logo image",
  },
  links: [
    {
      title: "Subjects",
      url: "#",
      subMenuLinks: [
        { title: "Matura AI", url: "#" },
        { title: "Notebook AI", url: "#" },
        { title: "Link Seven", url: "#" },
      ],
    },
    { title: "Matura AI", url: "#" },
    { title: "Notebook AI", url: "#" },
    { title: "Become a Partner", url: "#" },
    { title: "Video Explanations", url: "#" },
    { title: "Resources", url: "#" },
  ],
  buttons: [
    {
      title: "Try for free",
      size: "sm",
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.0625rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
    width: "1.625rem",
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
    width: "0.5625rem",
  },
};
Navbar5.displayName = "Navbar5";
