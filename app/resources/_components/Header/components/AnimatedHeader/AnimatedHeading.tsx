import { motion } from "framer-motion";

export const AnimatedHeading = () => {
  return (
    <h1 className="mb-5 text-6xl md:text-[4rem] font-bold leading-10 md:leading-[64px]">
      Study{" "}
      <span className="highlight-text">
        Resources
        <motion.img
          src="/images/underline.svg"
          alt="Underline 1"
          className="underline-svg"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </span>
    </h1>
  );
};
