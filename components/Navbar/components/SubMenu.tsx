"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import "../../../app/globals.css";

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

const SubMenu = ({
  navLink,
  isMobile,
  isMobileSubOpen,
  onToggleMobileSubMenu,
}: {
  navLink: NavLink;
  isMobile: boolean;
  isMobileSubOpen: boolean;
  onToggleMobileSubMenu?: (link: NavLink | null) => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    if (isMobile) {
      // Toggle the mobile submenu and pass the current navLink
      if (onToggleMobileSubMenu) {
        onToggleMobileSubMenu(isMobileSubOpen ? null : navLink);
      }
    } else {
      setIsDropdownOpen((prev) => !prev);
    }
  };

  return (
    <nav
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="w-full flex items-center justify-between gap-5 py-0 text-left text-md custom-lg:w-auto custom-lg:flex-none custom-lg:justify-start custom-lg:gap-2 custom-lg:py-2 custom-lg:text-base"
        onClick={handleToggle}
      >
        <span
          className="underlined-link flex relative items-center gap-1 justify-between w-full "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="move-mobile block custom-lg:text-sm text-md custom-button-font font-bold uppercase custom-lg:normal-case custom-lg:text-[#afafaf] text-text-alternative hover:text-white duration-300">
            {navLink.title}
          </span>
          <motion.span
            animate={isDropdownOpen ? "rotated" : "initial"}
            variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
            transition={{ duration: 0.3 }}
          >
            <RxChevronDown className="hidden custom-lg:block" />
          </motion.span>

          <motion.span
            animate={isDropdownOpen ? "moved" : "initial"}
            variants={{
              moved: { x: 0, opacity: 1 },
              initial: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <RxChevronRight className="block custom-lg:hidden size-6" />
          </motion.span>

          <motion.img
            src="/images/Floater.svg"
            alt="Underline 1"
            className="underline-svg-2 hidden custom-lg:block"
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </span>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            animate="open"
            initial="close"
            exit="close"
            variants={{
              open: { visibility: "visible", opacity: 1, y: 0 },
              close: { visibility: "hidden", opacity: 0, y: "25%" },
            }}
            transition={{ duration: 0.2 }}
            className="hidden custom-lg:bg-[#1A1A1A] custom-lg:w-[248px] custom-lg:absolute custom-lg:z-50 custom-lg:border custom-lg:p-1 custom-lg:rounded-[10px] custom-lg-border-shadow custom-lg:flex flex-col gap-2"
          >
            {navLink.subMenuLinks?.map((subMenuLink, index) => (
              <a
                href={subMenuLink.url}
                key={index}
                className={`custom-lg:h-[52px] custom-lg:flex custom-lg:items-center custom-lg:px-3 custom-lg:py-[10px] custom-lg:gap-3 custom-lg:rounded-md transition-colors ease-in-out duration-300 custom-lg:cursor-pointer sub-menu-items-wrapper ${
                  subMenuLink.flip === "yes" ? "flip-enabled" : ""
                }`}
                style={{
                  transition: "background-color 0.3s ease-in-out",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    subMenuLink.bgColor || "#3C50E0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {subMenuLink.icon && (
                  <img
                    src={subMenuLink.icon.src}
                    alt={subMenuLink.icon.alt}
                    className="hidden custom-lg:inline-block size-8 sub-menu-item-icon"
                    style={{
                      filter:
                        subMenuLink.flip === "yes"
                          ? "brightness(0) invert(1)"
                          : "none",
                    }}
                  />
                )}
                <a
                  href={subMenuLink.url}
                  className="block text-center custom-lg:text-left custom-lg:text-white custom-lg:text-md custom-lg:leading-4 custom-lg:font-bold sub-menu-item-color-hover"
                >
                  {subMenuLink.title}
                </a>
                {subMenuLink.tag && (
                  <div className="submenu-item-tag">
                    <p className="text-white uppercase text-xs font-bold leading-[14px] custom-text-color">
                      {subMenuLink.tag}
                    </p>
                  </div>
                )}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SubMenu;
