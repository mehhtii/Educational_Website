import React from "react";
import { motion } from "framer-motion";
import ContentBox from "./HeadSecBox";
import { BookHalf, FolderPlus, GeoAltFill } from "react-bootstrap-icons";

const HeaderBoard = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center header_board_parent position-relative">
      <motion.div
        initial={{ opacity: 0,translateY:10 }}
        whileInView={{ opacity: 1,translateY:-32 }}
        transition={{duration:0.9}}
        className="header_board shadow-lg rounded-2 d-flex justify-content-center gap-5"
      >
        <ContentBox title={"دوره های رایگان"} iconComponent={<BookHalf/>} Intro={"اینجا میتونی زبان برنامه نویسی مورد نظرت رو آسون یادبگیری"}/>
        <ContentBox title={"نقشه راه"} iconComponent={<GeoAltFill/>} Intro={"با مسیر برنامه نویسی که آشنا شدی حوزه مورد علاقه خودت رو دنبال کن"}/>
        <ContentBox title={"دوره های جدید"} iconComponent={<FolderPlus/>} Intro={"لیست تموم دوره هایی که تازه آپلود شدن"}/>
      </motion.div>
    </div>
  );
};

export default HeaderBoard;
