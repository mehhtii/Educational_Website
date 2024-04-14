import React, { useEffect, useState } from "react";
import imgEaxm from "../../../assets/img/hackers.jpg";
import { Stopwatch } from "react-bootstrap-icons";
import ReactImg from "../../../assets/img/react.jpg";
import JsImg from "../../../assets/img/js.png";
import HtmlCssImg from "../../../assets/img/htmlCss.jpg";

const LastCourses = () => {
  const [lastCourses, setLastCourses] = useState([
    {
      id: 1,
      title: "آموزش html css صفر تاصد",
      time: "10:03:34",
      theacher: "مهدی داودی",
      img: HtmlCssImg,
      price: "1,980,000",
    },
    {
      id: 2,
      title: "آموزش جاوااسکریپت مقدماتی تا پیشرفته",
      time: "16:40:00",
      theacher: "رضا بابانژاد",
      img: JsImg,
    },
    {
      id: 3,
      title: "آموزش react به همراه پروژه عملی",
      time: "22:34:12",
      theacher: "علی رمضانی",
      img: ReactImg,
      price: "4,000,000",
    },
    {
      id: 4,
      title: "آموزش html css صفر تاصد",
      time: "11:11:11",
      theacher: "مهدی داودی",
      img: imgEaxm,
      price: "1,980,000",
    },
  ]);

  const [shape, setShape] = useState([]);
  useEffect(() => {
    setShape(lastCourses.slice(0, 3));
  }, []);
  return (
    <>
      <div className="container-fluid last_courses">
        <div className="row h-100  ">
          {shape.map((d) => (
            <div
              key={d.id}
              className="col h-100 d-flex align-items-center justify-content-center"
            >
              <div className="courses_card my-auto rounded">
                <div className="img_box_card ">
                  <img
                    className="w-100 h-100 rounded pointer"
                    src={d.img}
                    alt="imgraxm"
                  />
                </div>
                <div>
                  <h6 className="me-3">{d.title}</h6>
                  <div className="d-flex align-items-center gap-1 me-3 mt-3">
                    <Stopwatch />
                    <span className=" font_blod">{d.time}</span>
                  </div>
                </div>
                <div className=" arrow_div mx-auto"></div>
                <div className="d-flex align-items-center justify-content-around gap-5 mt-3">
                  <span>
                    <small>مدرس : </small>
                    <small>{d.theacher}</small>
                  </span>
                  <small
                    className={`${!d.price ? "text-success font_blod" : ""}`}
                  >
                    {d.price ? d.price : "رایگان"}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-conten-center mb-3">
        <button className="more_btn my-2 px-3 mx-auto rounded">
          مشاهده دوره های بیشتر . . .
        </button>
      </div>
    </>
  );
};

export default LastCourses;
