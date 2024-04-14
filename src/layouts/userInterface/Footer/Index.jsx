import React from "react";
import FooterLogo from "../../../assets/img/logo_courses_site.png";
import { Instagram, Telegram, Youtube } from "react-bootstrap-icons";


const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="row h-100">
        <div className="col-4">
          <div className="h-50 d-flex justify-content-center">
            <img className="" src={FooterLogo} alt="FooterLogo" />
          </div>
          <div className="h-50">
            <ul className="list-unstyled d-flex gap-3 align-items-center justify-content-center h-100">
              <li>
                <Instagram
                  style={{ color: "#d91046" }}
                  className=" font_2xl pointer icons"
                />
              </li>
              <li>
                <Youtube className="text-danger font_2xl pointer icons" />
              </li>
              <li>
                <Telegram
                  style={{ color: "#1396E6" }}
                  className=" font_2xl pointer icons"
                />
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="col-8">
          <div className="d-flex justify-content-center align-items-center h-50">
            <h5 className="text-light mt-1">عضویت در خبر نامه :</h5>
            <label>
              <input
                type="email"
                className="border-0 me-3 rounded-end-4  eamil_input"
                placeholder="ایمیل خودتان را وارد کنید"
              />
              <button className="btn_email_submit rounded-start-4 text-light">
                ارسال
              </button>
            </label>
          </div>
          <div className="d-flex flex-column gap-2">
            <h3 className="text-center text-info-emphasis">
              برنامه نویسی مهارتیه که همه بهش نیاز دارن
            </h3>
            <h6 className="text-info text-center">
              علاقه خودت رو اینجا پیدا کن
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
