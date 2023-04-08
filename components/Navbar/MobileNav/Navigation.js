import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { RemoveScroll } from "react-remove-scroll";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <RemoveScroll enabled>
    <motion.ul
      style={{
        padding: "25px",
        position: "absolute",
        top: "100px",
        width: "230px",
      }}
      variants={variants}
    >
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  </RemoveScroll>
);

const itemIds = [0, 1, 2, 3, 4];
