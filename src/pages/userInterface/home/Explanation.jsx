import React from "react";
import Img from "../../../assets/img/hackers.jpg";

const Explanation = () => {
  return (
    <div className="container-fluid explanation">
      <div className="row">
        <div className="col col-md-6 col-12 d-flex align-items-center justify-content-center p-3">
          <p>
            با یادگیری برنامه نویسی میتوانید مهارت های جدیدی را یاد بگیرید فرصت
            های شغلی جدید را برای خود ایجاد کنید و در صنعت فناوری اطلاعات موفق
            شوید همچنین برنامه نویسی مهارت تفکر تحلیلی و خلاق را در شما تقویت
            میکند . پش اگر به دنبال یادگیری یک مهارت جذاب مفید و پر فرصت هستید
            حتما باید به برنامه نویسی فکر کنید, شروع کنید و تجربه ایی جدید را
            آغاز کنید که ممکن است زندگی شمارا تغییر دهد
          </p>
        </div>
        <div className="col col-md-6 col-12 expalnation_img_box">
            <img className="w-75 h-75 rounded-2 expalnation_img" src={Img} alt="expalnation" />
            <div className="expalnation_shadow w-75 h-75"></div>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
