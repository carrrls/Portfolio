import React from "react";
import "./Hero.scss";
import { animate, stagger } from "framer-motion";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
    // opacity: 0,
  },
  animate: {
    x: "-220%",
    // opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
      // staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AAYUSHYA SINGH</motion.h2>
          <motion.h1 variants={textVariants}>
            WEB DEVELOPER AND UI DESIGNER
          </motion.h1>
          <motion.div variants={textVariants} className="BUTTONS">
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants} className="poty">
              Contact Us
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="sliding-container"
      >
        Writer Context-Creator INfluencer
      </motion.div>
      <div className="image-container">
        <img src="/hero.png" />
      </div>
    </div>
  );
};
export default Hero;
