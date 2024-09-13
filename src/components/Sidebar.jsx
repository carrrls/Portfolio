import React from "react";
import "../../src/components/Sidebar.scss";
import Toggle from "./Toggle";
import { delay, motion } from "framer-motion";
import Links from "./Links";
// import { useAnimate } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        // delay: 0.05,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
};
export default Sidebar;
