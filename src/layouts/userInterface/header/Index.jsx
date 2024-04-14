import React, { useState } from "react";
import Logo from "../../../assets/img/logo_courses_site.png";
import { Link, useNavigate } from "react-router-dom";
import ListItems from "./listItems";


const Header = () => {
  const navigate = useNavigate();
  
  return (
    <div className="navabr_container ">
      <div className="row h-100 m-0 p-0">
        <div className="col col-3 pb-1 px-3 d-flex justify-content-start">
          <img className="pointer me-4" width={115} src={Logo} alt="Logo" />
        </div>
        <ListItems/>
        <div className="col col-2 d-flex justify-content-center align-items-center">
          <button className="btn btn_login py-2"><span onClick={()=>navigate("/admin")}>ورود</span> / <span>ثبت نام</span></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
