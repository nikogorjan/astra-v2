import { motion } from "framer-motion";

export const AnimatedHeading = () => (
  <h1 className="mb-5 text-6xl md:text-[4rem] font-bold leading-10 md:leading-[64px]">
    Master math with AI: Your personal tutor,{" "}
    <span className="highlight-text">
      available 24/7
      <motion.img
        src="/images/underline.svg"
        alt="Underline"
        className="underline-svg"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </span>
  </h1>
);
