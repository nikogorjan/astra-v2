"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SubMenu from "./SubMenu";
import SubMenuLinks from "./SubMenuLinks";

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

type NavLinksProps = {
  links: NavLink[];
  isMobile: boolean;
};

const NavLinks = ({ links, isMobile }: NavLinksProps) => {
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<NavLink | null>(null);

  const handleMobileSubMenuToggle = (link: NavLink | null) => {
    setIsMobileSubOpen(!!link); // Open or close based on the presence of a link
    setActiveLink(link); // Set the active link or null to close
  };

  return (
    <motion.div
      className="flex w-[200%] custom-lg:w-auto"
      animate={{ x: isMobileSubOpen ? "-50%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-8 custom-lg:flex custom-lg:flex-row custom-lg:gap-5 custom-lg:ml-4 custom-lg:w-auto w-full ">
        {links.map((navLink, index) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <div
              key={index}
              className="first:pt-0 custom-lg:first:pt-0 px-[5%] custom-lg:px-0"
            >
              {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu
                  navLink={navLink}
                  isMobile={isMobile}
                  isMobileSubOpen={isMobileSubOpen}
                  onToggleMobileSubMenu={() =>
                    handleMobileSubMenuToggle(navLink)
                  } // Pass the clicked link
                />
              ) : (
                <span
                  className="underlined-link"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <a
                    href={navLink.url}
                    className="move-mobile block py-0 custom-lg:text-sm text-md custom-lg:py-2 custom-button-font font-bold custom-lg:text-[#afafaf] text-text-alternative uppercase custom-lg:normal-case hover:text-white transition-colors duration-300"
                  >
                    {navLink.title}
                  </a>
                  <motion.img
                    src="/images/Floater.svg"
                    alt="Underline 1"
                    className="underline-svg hidden custom-lg:block"
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="w-full custom-lg:hidden">
        {isMobileSubOpen && (
          <SubMenuLinks
            link={activeLink} // Pass the specific active link
            onClose={() => handleMobileSubMenuToggle(null)} // Close the submenu
          />
        )}
      </div>
    </motion.div>
  );
};

export default NavLinks;
