import React, { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import "./Services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="Services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="text-container" variants={variants}>
        <p>
          I focus on helping brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="title-container" variants={variants}>
        <div className="title">
          <img src="/people.webp" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title" variants={variants}>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business
          </h1>
          <button>What We Do ?</button>
        </div>
      </motion.div>
      <motion.div className="list-container" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Title</h2>
          <p>
            Answer AYUSH, an acronym for Ayurveda, Yoga, Unani, Siddha,
            Naturopathy, and Homeopathy, represents India's traditional
            healthcare systems promoting holistic well-being.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Title</h2>
          <p>
            Answer AYUSH, an acronym for Ayurveda, Yoga, Unani, Siddha,
            Naturopathy, and Homeopathy, represents India's traditional
            healthcare systems promoting holistic well-being.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          variants={variants}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Title</h2>
          <p>
            Answer AYUSH, an acronym for Ayurveda, Yoga, Unani, Siddha,
            Naturopathy, and Homeopathy, represents India's traditional
            healthcare systems promoting holistic well-being.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          variants={variants}
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Title</h2>
          <p>
            Answer AYUSH, an acronym for Ayurveda, Yoga, Unani, Siddha,
            Naturopathy, and Homeopathy, represents India's traditional
            healthcare systems promoting holistic well-being.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
