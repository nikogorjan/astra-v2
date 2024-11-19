"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { Banner } from "../Banner/Banner";
import ButtonGroup from "./components/ButtonGroup";
import NavbarMobile from "./components/NavbarMobile";
import NavbarDesktop from "./components/NavbarDesktop";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  icon?: ImageProps;
  tag?: string;
  bgColor?: string;
  flip?: string;
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
  const isMobile = useMediaQuery("(max-width: 1020px)");
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
    <nav className="sticky top-0 z-50 custom-lg:border-b custom-lg:border-[rgba(221,221,221,0.05)] bg-[#0C0C0C]">
      <Banner />
      <div className="custom-lg:max-w-xxl mx-auto flex w-full items-center justify-between min-h-[73px] px-0 custom-lg:px-[1rem] custom-xl:px-0">
        <div className="size-full custom-lg:flex custom-lg:items-center custom-lg:justify-between">
          <div className="custom-lg:flex">
            <NavbarMobile
              logo={logo}
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <NavbarDesktop
              links={links}
              isMobileMenuOpen={isMobileMenuOpen}
              isMobile={isMobile}
            />
          </div>
          <ButtonGroup buttons={buttons} />
        </div>
      </div>
    </nav>
  );
};

export const Navbar5Defaults: Navbar5Props = {
  logo: {
    url: "/",
    src: "/images/logo.svg",
    alt: "Logo image",
  },
  links: [
    {
      title: "Subjects",
      url: "#",
      subMenuLinks: [
        {
          title: "Math",
          url: "#",
          icon: {
            src: "/Icons/Math.svg",
            alt: "Math icon",
          },
          bgColor: "#3C50E0",
        },
        {
          title: "English",
          url: "#",
          icon: {
            src: "/Icons/English.svg",
            alt: "English icon",
          },
          bgColor: "#F33568",
        },
        {
          title: "Chemistry",
          url: "#",
          icon: {
            src: "/Icons/Chemistry.svg",
            alt: "Chemistry icon",
          },
          bgColor: "#FDB300",
          flip: "yes",
        },
        {
          title: "Physics",
          url: "#",
          icon: {
            src: "/Icons/Atom.svg",
            alt: "Atom logo",
          },
          bgColor: "#FFF",
          tag: "coming soon",
          flip: "yes",
        },
      ],
    },
    { title: "Matura AI", url: "/matura-ai" },
    { title: "Notebook AI", url: "#" },
    {
      title: "More",
      url: "#",
      subMenuLinks: [
        { title: "Video Explanations", url: "/video-explanations" },
        { title: "Resources", url: "#" },
        { title: "Become a Partner", url: "/become-a-partner" },
      ],
    },
  ],
  buttons: [
    {
      title: "Try for free",
      size: "sm",
    },
  ],
};

Navbar5.displayName = "Navbar5";
