import React from "react";
import img from "../../../../assets/img/backgroundHead.jpg";
import { Search } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import HeaderBoard from "./HeaderBoard";

const HeadSection = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + img})` }}
        className=" container-fluid head_background d-flex align-items-end"
      >
        <motion.div
          className=" h-75 "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
          }}
        >
          <h1 className="text_color_custom mt-5 h_one">
            برنامه نویسی مهارتیه که همه بهش نیاز دارن
          </h1>
          <h5 className="text-light shadow-lg text-center mt-4">
            علاقه خودت رواینجا پیدا کن
          </h5>
          <div className="w-100 text-center">
            <label className=" position-relative w-75 mt-5">
              <input
                type="text"
                placeholder="دوره مورد نظر خودت رو جستجو کن"
                className="form-control w-100  bg-light coursess_search_inpt px-3 py-2 rounded-5"
              />
              <Search className=" position-absolute font_2xl coursess_search_icon pointer" />
            </label>
          </div>
        </motion.div>
      </div>

      <HeaderBoard/>
    </>
  );
};

export default HeadSection;
