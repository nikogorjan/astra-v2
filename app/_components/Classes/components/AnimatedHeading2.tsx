"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const AnimatedHeading2 = () => {
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
    <h2 className="text-[28px] md:text-[42px] font-bold leading-7 md:leading-[44px]">
      Improve Math, Chemistry, and English grades with{" "}
      {isCombined ? (
        <span className="highlight-text">
          no stress
          <motion.img
            src="/images/underline.svg"
            alt="Underline"
            className="underline-svg"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </span>
      ) : (
        <>
          <span ref={availableRef} className="highlight-text">
            no
            <motion.img
              src="/images/underline.svg"
              alt="Underline"
              className="underline-svg"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </span>{" "}
          <span ref={twentyFourSevenRef} className="highlight-text">
            stress
            <motion.img
              src="/images/underline.svg"
              alt="Underline"
              className="underline-svg"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
            />
          </span>
        </>
      )}
    </h2>
  );
};
