import React, { useState, useEffect } from "react";
import { Button } from "@relume_io/relume-ui";
import { motion, AnimatePresence } from "framer-motion";

interface StarButtonProps {
  text: string;
}

const StarButton: React.FC<StarButtonProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpandableOpen, setIsExpandableOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isHovered) {
      setIsExpandableOpen(true);
      timer = setTimeout(() => {
        setIsExpandableOpen(false);
      }, 2000);
    } else {
      setIsExpandableOpen(false);
    }

    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div
      className="custom-gradient-border w-full sm:w-auto overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button className="custom-button-font inner-button font-bold w-full sm:w-auto">
        <div className="flex items-center gap-[6px] w-full sm:w-auto justify-center relative">
          {/* Display dynamic text passed as a prop */}
          <div className="mr-2">{text}</div>

          {/* Expandable div with star animation */}
          <motion.div
            id="expandable"
            className="h-full flex items-center overflow-visible"
            initial={{ width: 0 }}
            animate={{ width: isExpandableOpen ? 20 : 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <AnimatePresence>
              {isExpandableOpen && (
                <>
                  {/* Star animations */}
                  <motion.img
                    src="/Icons/star-small.svg"
                    alt="Star Small"
                    className="absolute"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: -10,
                      y: -20,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="/Icons/star-mid.svg"
                    alt="Star Mid"
                    className="absolute"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: -15,
                      y: -30,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="/Icons/star-big.svg"
                    alt="Star Big"
                    className="absolute"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: -20,
                      y: -40,
                    }}
                    transition={{
                      delay: 0.4,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="/Icons/star-big.svg"
                    alt="Star Big 2"
                    className="absolute"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: 14,
                      y: -40,
                    }}
                    transition={{
                      delay: 0.6,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="/Icons/star-small.svg"
                    alt="Star Small 2"
                    className="absolute"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: 6,
                      y: -40,
                    }}
                    transition={{
                      delay: 0.8,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="/Icons/star-mid.svg"
                    alt="Star Mid 2"
                    className="absolute"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: 9,
                      y: -40,
                    }}
                    transition={{
                      delay: 1,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="/Icons/star-mid.svg"
                    alt="Star Mid 3"
                    className="absolute"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: 5,
                      y: -40,
                    }}
                    transition={{
                      delay: 1.2,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                </>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Arrow Icon */}
          <div className="w-4 h-4">
            <img
              src="/Icons/arrow-rigth.svg"
              alt="Arrow Right Icon"
              className="w-full h-full"
            />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default StarButton;
