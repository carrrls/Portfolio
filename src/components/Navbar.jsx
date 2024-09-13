import React from "react";
import "../../src/components/Navbar.scss";
import { useCallback } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../src/components/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ayush
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a href="#">
            <img src="/facebook.png" />
          </a>
          <a href="#">
            <img src="/instagram.png" />
          </a>{" "}
          <a href="#">
            <img src="/youtube.png" />
          </a>{" "}
          <a href="#">
            <img src="/dribbble.png" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default Navbar;
