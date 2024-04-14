import React from "react";
import { motion } from "framer-motion";

const ContentBox = ({ title, Intro, iconComponent }) => {
  return (
    <div className="w-25 h-100 col col-12 col-md-4 intor_icon d-flex flex-column align-items-center justify-content-center">
      <motion.div
        className=" font_2xl mb-3 pointer"
        style={{ fontSize: "3.5rem", color: "#1396e6" }}
        whileHover={{scale:1.1,rotate:[10,0,-10,0]}}
        transition={{duration:0.4}}
      >
        {iconComponent}
      </motion.div>
      <h5 className="h_five">{title}</h5>
      <p className="text-center mt-2 p_font_family">{Intro}</p>
    </div>
  );
};

export default ContentBox;
