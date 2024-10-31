// components/HamburgerIcon.tsx
import { motion } from "framer-motion";

const HamburgerIcon = ({
  isMobileMenuOpen,
  onClick,
}: {
  isMobileMenuOpen: boolean;
  onClick: () => void;
}) => (
  <button
    className="-mr-2 flex size-12 flex-col items-end justify-center custom-lg:hidden"
    onClick={onClick}
  >
    <motion.span
      className="my-[3px] h-0.5 bg-white rounded-full"
      style={{ width: "1.625rem" }}
      animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
      variants={topLineVariants}
    />
    <motion.span
      className="my-[3px] h-0.5 bg-white rounded-full"
      style={{ width: "1.0625rem" }}
      animate={isMobileMenuOpen ? "open" : "closed"}
      variants={middleLineVariants}
    />
    <motion.span
      className="my-[3px] h-0.5 bg-white rounded-full"
      style={{ width: "0.5625rem" }}
      animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
      variants={bottomLineVariants}
    />
  </button>
);

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

export default HamburgerIcon;
