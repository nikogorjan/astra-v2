"use client";

import React from "react";
import { motion } from "framer-motion";

const Astraai: React.FC = () => {
  return (
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76 14"
      width="76"
      height="14"
      className="cursor-pointer width-custom"
      whileHover="hover" // Define a hover state for the entire SVG
    >
      <title>Vector-svg</title>
      <defs>
        <image
          width="6"
          height="5"
          id="img1"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAMAAABRhm3UAAAAAXNSR0IB2cksfwAAAFpQTFRFimrzl273o3L6sHb+uHvsv4HSk232n3H5rHX8tnr1vH/bw4XBm2/4p3P7tHj+un3kwYPKx4iwo3L6sHb9uHvsv4HSxYa5zIyfq3X8tnn1vH/cw4XByYqn0JCNKxS3YQAAAB50Uk5TAAAuDwAAAACqdAAAJr7/+6cJAD7evygAAAB8RgAAUkGeagAAABdJREFUeJxjZGAEAzYIxQOhhCCUBJgEAAVBAFuI3eN6AAAAAElFTkSuQmCC"
        />
        <image
          width="9"
          height="12"
          id="img2"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAMAAACHgmeRAAAAAXNSR0IB2cksfwAAAQ5QTFRFPFDfP1HfTFXjWVnmZV3qcmLtfmbwi2r0l273SFTiVFjlYVzobWDsemTvhmjyk232oHH5Q1LhUFbkXFrnaV/rdmPugmfxj2v1m2/4qHT7TFXjWFnmZV3qcWHtfmbwimr0l273pHL6sHb+YVzobWDsemTvhmjyk232n3H5rHX8tnr0XFrnaV/rdmPugmfxj2v1tHj9un3jZV3pcWHtimr0l273o3L6uHzsv4HSbWDseWTvn3H5rHX8vX/bw4XBdWPugmfxjmv1p3P7tHj+un3jwYPJx4ivimrzo3L6sHb+uHvsxYe4zIyen3H5tnr1vH/byYqn0JCNm2/4p3P7tHj+un3kwYPKx4iwzo6W1JN8zAuirgAAAFp0Uk5TAAAAekUAAAAAAADRnAAAAAAAD2r/7VEHAABT+P/////pMAAPav/uUAcAAAAAANKdAAEAAHxDAAEAAAAFEAAAAAAAAgIAAAAABAEAAAAAAAAAAAsAAAAAAAAAl6ko5QAAAFFJREFUeJxjZGCEAQZOGEsQLiYFZ3FJwljaIOIlozgjoxHjZT1GxjeijIyWjFcYdRjfCTMy2jMyXtcCq2NzPOjACBbjY7S7o8r4XoiR0RFmNADqBQxtm8GUVgAAAABJRU5ErkJggg=="
        />
        <image
          width="12"
          height="12"
          id="img3"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAAXNSR0IB2cksfwAAAVZQTFRFdmPugmfxj2v1m2/4qHT7tHj9un3jwYPJx4mvzo6V1ZR725lhfmbwimr0l273pHL6sHb+uHzrv4HRxYe4zIye0pKE2Zdq351Qhmjyk232n3H5rHX8tnr0vX/aw4XAyoqm0JCM15Vz3ZtZ5KE/tHj9un3jwYPJx4mvzo6V1JR74Z9H6KQuo3L6sHb+uHzsv4HSxYe4zIye0pKE2Zdq351Q5qI27Kgcn3H5rHX8tnr0vX/bw4XByoqn0JCN15Vz3ZtZ5KE/6qYl8KsMp3P7tHj+un3jx4ivzo6W1JR825li4Z9I6KQu7qoUuHvsv4HSxYe4zIye0pKE2Zdq351R5qI37Kgd8KsMtnr1vH/bw4XByYqn0JCN5KA/6qYlun3kwYPKx4iwzo6W1JN825li6KQu7qoUxYa5zIyf0pKF2Zdr351R5qI37Kgd0JCN1pV03Zta46BA6qYmY8f4dgAAAHJ0Uk5TAAAAAAAERgAAAAAAAAAAAABU4QEAAAAAAAAAAAC//0gAAAAAACT//7IAAAAAAVPM///+ixoAAAJW3/////////2vNQdw4f///////qoAAE7N////kB4AAAAAACS0AAAAAAAAwEkAAAAAAFbhAQAAAAUn2JAqSQAAAFZJREFUeJxjZGBEAjzIHAlkDhMjowKY8UiekZFPDknGHFmZMyPjQ4g6xm+MArZwcQbGcBD1mFGW8ScDA2McWPC5FONHIMcPatErBiAnklEYxH4KZDMAAF6hC+Vj9bXSAAAAAElFTkSuQmCC"
        />
      </defs>

      {/* Star Animations with hover interaction */}
      <motion.use
        id="star1"
        href="#img2"
        x="0"
        y="0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        variants={{
          hover: { scale: [1, 0, 1] },
        }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.use
        id="star2"
        href="#img3"
        x="4"
        y="2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        variants={{
          hover: { scale: [1, 0, 1] },
        }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.use
        id="star3"
        href="#img1"
        x="1"
        y="9"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        variants={{
          hover: { scale: [1, 0, 1] },
        }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
      />

      <g id="letters">
        <motion.path
          id="I"
          className="s0"
          d="m73.6 11.4v-8.7h2v8.7z"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.path
          id="A3"
          fillRule="evenodd"
          className="s0"
          d="m69.9 2.7l3 8.5v0.2h-2.2l-0.5-1.7h-3.2l-0.5 1.7h-2.1v-0.2l3-8.5zm-2.4 5.3h2.2l-1.1-3.4z"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.path
          id="A2"
          fillRule="evenodd"
          className="s0"
          d="m58.2 2.7l3 8.5v0.2h-2.2l-0.5-1.7h-3.2l-0.5 1.7h-2.1v-0.2l3-8.5zm-2.4 5.3h2.2l-1.1-3.4z"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.path
          id="R"
          fillRule="evenodd"
          className="s0"
          d="m50.6 8.1l2.1 3.1v0.2h-2.3l-1.9-3.1h-1.2v3.1h-1.9v-8.7h3.9q1.4 0 2.2 0.8 0.8 0.8 0.8 1.9 0 0.9-0.4 1.6-0.5 0.7-1.3 1.1zm-3.3-3.7v2.1h1.9q0.6 0 0.9-0.3 0.2-0.3 0.2-0.8 0-0.4-0.2-0.7-0.3-0.3-0.9-0.3z"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.path
          id="T"
          className="s0"
          d="m40.1 11.4v-7h-2.5v-1.7h7v1.7h-2.5v7z"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.path
          id="S"
          className="s0"
          d="m33.7 11.5q-1.7 0-2.6-0.9-1-0.8-1.1-2.2h2q0.1 0.6 0.5 1 0.5 0.3 1.2 0.3 1.6 0 1.6-0.9 0-0.3-0.2-0.5-0.3-0.2-0.8-0.4l-1.3-0.2q-1.3-0.3-2-0.9-0.7-0.6-0.7-1.8 0-1.1 1-1.8 0.9-0.7 2.4-0.7 1.5 0 2.5 0.8 1 0.8 1 2.1h-2q0-0.5-0.4-0.8-0.4-0.3-1.1-0.3-0.7 0-1 0.2-0.4 0.2-0.4 0.5 0 0.3 0.2 0.5 0.2 0.2 0.8 0.4l1.2 0.2q1.4 0.3 2.1 0.9 0.7 0.6 0.7 1.8 0 1.2-0.8 2-0.9 0.7-2.8 0.7z"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.path
          id="A1"
          fillRule="evenodd"
          className="s0"
          d="m26.9 2.7l3 8.5v0.2h-2.2l-0.5-1.7h-3.2l-0.5 1.7h-2.1v-0.2l3-8.5zm-2.4 5.3h2.2l-1.1-3.4z"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
      </g>
    </motion.svg>
  );
};

export default Astraai;
