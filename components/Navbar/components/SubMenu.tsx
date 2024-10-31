// components/SubMenu.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
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
          variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
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
            className="bg-background-primary custom-lg:absolute custom-lg:z-50 custom-lg:border custom-lg:border-border-primary custom-lg:p-2"
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
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SubMenu;
