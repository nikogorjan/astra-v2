// components/BuyButton.tsx
"use client";

import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import sparklingAnimation from "../../../public/animation/lottie-sparkling.json";

const BuyButton = () => {
  return (
    <motion.div
      className="custom-gradient-border-small w-full sm:w-auto hidden custom-lg:flex"
      whileHover="hover" // Trigger hover animation on this div
    >
      <Button className="custom-button-font inner-button-small font-bold w-full sm:w-auto">
        <div className="flex items-center gap-[6px] w-full sm:w-auto justify-center">
          <div className="margin-right-animation font-bold">
            Buy Astra AI Plus
          </div>
          <div className="w-4 h-4">
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 15"
              width="16"
              height="15"
            >
              <title>Vector-svg</title>
              <defs>
                <image
                  width="5"
                  height="7"
                  id="imgStar1"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAAXNSR0IB2cksfwAAADBQTFRF/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMAp6suWQAAABB0Uk5TAAe7BmP/ixBT2ul2BfIjSo9/nRoAAAAkSURBVHicY2Rg/M/IwMDAyKB8l1HESYqx82IYI88lJUaGDwIASbcGKKgxxLoAAAAASUVORK5CYII="
                />
                <image
                  width="8"
                  height="9"
                  id="imgStar2"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAMAAAA4jZ0cAAAAAXNSR0IB2cksfwAAAD9QTFRF/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMAnnHgqAAAABV0Uk5TAEsD8iZI/3pJqfX8t14Bo/thfCUMPU2x+QAAAD5JREFUeJxjZGBgYPwPIhgYmBgZ/4AZrIyMP4EMDiAfyGRk5GD//YfrD+t7sBTPO6higbdgBlw7A4PIGwYGAOB4DBgOWeH5AAAAAElFTkSuQmCC"
                />
                <image
                  width="12"
                  height="11"
                  id="imgStar3"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAMAAAB8rpxtAAAAAXNSR0IB2cksfwAAAFdQTFRF/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMA/bMAsRqmQwAAAB10Uk5TAGpe28lA/ysGs6cEFIDo5HsSL/byMA6B6bIyXFB4kp28AAAAU0lEQVR4nG2NwQpAUBRE54SipEg2/v/P9HZYSFGI+55nZTbTubeZQSa4vHlIOD7IEPsLOadSVoMStudSwEzDoqAK1MEUP5apx5gJba373VHPYHYDJvMPIQDzAi8AAAAASUVORK5CYII="
                />
              </defs>
              <motion.use
                id="Star1"
                href="#imgStar1"
                x="1"
                y="8"
                initial={{ scale: 1 }}
                variants={{
                  hover: { scale: [1, 0, 1] },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <motion.use
                id="Star2"
                href="#imgStar2"
                x="0"
                y="0"
                initial={{ scale: 1 }}
                variants={{
                  hover: { scale: [1, 0, 1] },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
              <motion.use
                id="Star3"
                href="#imgStar3"
                x="4"
                y="3"
                initial={{ scale: 1 }}
                variants={{
                  hover: { scale: [1, 0, 1] },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />
            </svg>
          </div>
        </div>
      </Button>
    </motion.div>
  );
};

export default BuyButton;
