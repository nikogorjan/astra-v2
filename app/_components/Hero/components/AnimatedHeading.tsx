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
      Master math with AI: Your personal tutor,{" "}
      {isCombined ? (
        <span className="highlight-text">
          available 24/7
          <motion.img
            src="/images/underline.svg"
            alt="Underline 1"
            className="underline-svg"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </span>
      ) : (
        <>
          <span ref={availableRef} className="highlight-text">
            available
            <motion.img
              src="/images/underline.svg"
              alt="Underline 2"
              className="underline-svg"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </span>{" "}
          <span ref={twentyFourSevenRef} className="highlight-text">
            24/7
            <motion.img
              src="/images/underline.svg"
              alt="Underline 3"
              className="underline-svg"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
            />
          </span>
        </>
      )}
    </h1>
  );
};
