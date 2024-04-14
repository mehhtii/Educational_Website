import React from "react";
import blogImg from "../../../assets/img/backgroundHead.jpg";
import { PersonFill } from "react-bootstrap-icons";
import Progress from "../../../components/Progress";

const Blog = () => {
  const blogData = [
    {
      id: Math.random(),
      img: blogImg,
      title: "تفاوت نکست جی اس و ری اکت چیست",
      articleText:
        "استفاده از React آسان است و به توسعه دهندگان کمک می کند تا اجزای رابط کاربری با قابلیت استفاده مجدد را ایجاد کنند. همچنین ابزارهایی برای مسیریابی و مدیریت وضعیت ارائه می دهد که اغلب با Redux و کتابخانه های دیگر استفاده می شود. همچنین ری اکت بر ساخت رابط های کاربری (UI) متمرکز است که HTML و جاوا اسکریپت را ترکیب می کند.",
      theWriter: "مهدی داودی",
      date: "10 آبان 1402",
    },
    {
      id: Math.random(),
      img: blogImg,
      title: "تفاوت نکست جی اس و ری اکت چیست",
      articleText:
        "استفاده از React آسان است و به توسعه دهندگان کمک می کند تا اجزای رابط کاربری با قابلیت استفاده مجدد را ایجاد کنند. همچنین ابزارهایی برای مسیریابی و مدیریت وضعیت ارائه می دهد که اغلب با Redux و کتابخانه های دیگر استفاده می شود. همچنین ری اکت بر ساخت رابط های کاربری (UI) متمرکز است که HTML و جاوا اسکریپت را ترکیب می کند.",
      theWriter: "مهدی داودی",
      date: "10 آبان 1402",
    },
    {
      id: Math.random(),
      img: blogImg,
      title: "تفاوت نکست جی اس و ری اکت چیست",
      articleText:
        "استفاده از React آسان است و به توسعه دهندگان کمک می کند تا اجزای رابط کاربری با قابلیت استفاده مجدد را ایجاد کنند. همچنین ابزارهایی برای مسیریابی و مدیریت وضعیت ارائه می دهد که اغلب با Redux و کتابخانه های دیگر استفاده می شود. همچنین ری اکت بر ساخت رابط های کاربری (UI) متمرکز است که HTML و جاوا اسکریپت را ترکیب می کند.",
      theWriter: "مهدی داودی",
      date: "10 آبان 1402",
    },
    {
      id: Math.random(),
      img: blogImg,
      title: "تفاوت نکست جی اس و ری اکت چیست",
      articleText:
        "استفاده از React آسان است و به توسعه دهندگان کمک می کند تا اجزای رابط کاربری با قابلیت استفاده مجدد را ایجاد کنند. همچنین ابزارهایی برای مسیریابی و مدیریت وضعیت ارائه می دهد که اغلب با Redux و کتابخانه های دیگر استفاده می شود. همچنین ری اکت بر ساخت رابط های کاربری (UI) متمرکز است که HTML و جاوا اسکریپت را ترکیب می کند.",
      theWriter: "مهدی داودی",
      date: "10 آبان 1402",
    },
  ];

  return (
    <>
    <Progress/>

    <div className=" container-fluid my-5">
      <div className="row row-cols-3 px-2">
        {blogData.map((d) => (
          <div className="col p-0 rounded-top d-flex justify-content-center align-items-center mt-5">
            <div className="blog_box h-100">
              <div className="w-100 h-50 rounded-top">
                <img
                  className="w-100 h-100 rounded-top pointer"
                  src={d.img}
                  alt="blogImg"
                />
              </div>
              <div className="px-2 h-25">
                <h5 className="me-1 mt-4">{d.title}</h5>
                <p className="blog_paragraph mt-4">{d.articleText}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3 pb-2 px-2 h-25">
                <span className="d-flex align-items-center gap-1 me-1">
                  <PersonFill />
                  <small>{d.theWriter}</small>
                </span>
                <span className="ms-2">
                  <small>{d.date}</small>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;
