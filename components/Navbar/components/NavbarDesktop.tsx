// components/NavbarDesktop.tsx

"use client";

import { motion } from "framer-motion";
import { Button } from "@relume_io/relume-ui";
import NavLinks from "./NavLinks";
import BuyButton from "./BuyButton";
import BuyButtonWithIcon from "./BuyButtonWithIcon";

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type NavbarDesktopProps = {
  links: NavLink[];
  isMobileMenuOpen: boolean;
  isMobile: boolean;
};

const NavbarDesktop = ({
  links,
  isMobileMenuOpen,
  isMobile,
}: NavbarDesktopProps) => (
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
    <NavLinks links={links} isMobile={isMobile} />

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

      <BuyButtonWithIcon />
    </div>

    <BuyButton />
  </motion.div>
);

export default NavbarDesktop;
