import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX + 20, y: e.clientY + 20 });
    };

    window.addEventListener("mousemove", mouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  console.log(position);
  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }} // Optional: Add smoothness
    ></motion.div>
  );
};

export default Cursor;
