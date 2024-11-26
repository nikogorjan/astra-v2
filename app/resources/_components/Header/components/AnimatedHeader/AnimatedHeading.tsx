import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const AnimatedHeading = () => {
  const [isCombined, setIsCombined] = useState(false);
  const availableRef = useRef<HTMLSpanElement>(null);
  const twentyFourSevenRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const checkIfCombined = () => {
      if (availableRef.current && twentyFourSevenRef.current) {
        const availableRect = availableRef.current.getBoundingClientRect();
        const twentyFourSevenRect =
          twentyFourSevenRef.current.getBoundingClientRect();

        // Check if they are on the same line
        setIsCombined(availableRect.top === twentyFourSevenRect.top);
      }
    };

    checkIfCombined();
    window.addEventListener("resize", checkIfCombined);

    return () => window.removeEventListener("resize", checkIfCombined);
  }, []);

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
