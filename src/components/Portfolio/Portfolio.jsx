import React, { useRef } from "react"; // Import useRef here
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/28209723/pexels-photo-28209723.jpeg", // Direct image URL
    desc: "Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho ",
  },
  {
    id: 2,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/28209723/pexels-photo-28209723.jpeg", // Direct image URL
    desc: "Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho ",
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/28209723/pexels-photo-28209723.jpeg", // Direct image URL
    desc: "Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho ",
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/28209723/pexels-photo-28209723.jpeg", // Direct image URL
    desc: "Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho Holla amigo, kaise ho thik ho ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="single-item">
      <div className="container">
        <div className="wrapper">
          <div className="img-container" ref={ref}>
            <img src={item.img} />
          </div>
          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progress-bar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
