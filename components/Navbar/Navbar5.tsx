"use client";

import { useState, useEffect } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import { Banner } from "../Banner/Banner";
import HamburgerIcon from "./components/HamburgerIcon";
import ButtonGroup from "./components/ButtonGroup";
import BuyButton from "./components/BuyButton";
import SubMenu from "./components/SubMenu";

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
                <HamburgerIcon
                  isMobileMenuOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
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
                      <SubMenu
                        key={index}
                        navLink={navLink}
                        isMobile={isMobile}
                      />
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
              <BuyButton />
            </motion.div>
          </div>
          <ButtonGroup buttons={buttons} />
        </div>
      </div>
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

Navbar5.displayName = "Navbar5";
