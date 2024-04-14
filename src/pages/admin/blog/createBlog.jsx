import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  ErrorMessage,
  FastField,
  Field,
  Form,
  Formik,
  validateYupSchema,
} from "formik";
import * as Yup from "yup";
import { BlogContext } from "../../../contextApi/ContextApi";

const CreateBlog = ({ showModal, setShowModal }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("لطفا این قسمت را پر کنید"),
    writer: Yup.string().required("لطفا این قسمت را پر کنید"),
    date: Yup.string().required("لطفا این قسمت را پر کنید"),
    articleText: Yup.string().required("لطفا این قسمت را پر کنید"),
  });
  const initialValues = {
    title: "",
    writer: "",
    date: "",
    articleText: "",
  };

  const { blogData, setBlogData } = useContext(BlogContext);
  const onSubmit = (values) => {
    setBlogData([...blogData, values],console.log(values));
    console.log(values);
    console.log(blogData);
  };

  return (
    <motion.div
      transition={{ duration: 0.7 }}
      className={`w-100 vh-100 end-0 ${
        showModal ? "active_modal" : "hidden_modal"
      } background_them text-light position-absolute w-100 z-3`}
    >
      <h2
        onClick={() => setShowModal(!showModal)}
        className="close_modal_blog pointer mt-2"
      >
        ×
      </h2>
      <h4 className="text-center position-absolute top-0 end-0 start-0 mt-2 w-50 mx-auto shadow-lg">
        افزودن مقاله
      </h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className="w-100 mt-4">
          <div className="row w-100 m-0 p-0">
            <div className="col col-4 d-flex justify-content-end">
              <label className="text-end w-75 me-5 my-3">
                عنوان مقاله
                <Field
                  type="text"
                  name="title"
                  placeholder="عنوان مقاله را وارد کنید"
                  className="form-control p-0 py-2 px-3 mt-1"
                />
                <ErrorMessage name="title">
                  {(e) => {
                    return (
                      <div className=" position-relative">
                        <small className="font_color position-absolute top-0 me-3">
                          {e}
                        </small>
                      </div>
                    );
                  }}
                </ErrorMessage>
              </label>
            </div>
            <div className="col col-4 d-flex justify-content-center">
              <label className="text-end w-75 my-3">
                نام نویسنده
                <Field
                  type="text"
                  name="writer"
                  placeholder="نام نویسنده را وارد کنید"
                  className="form-control p-0 py-2 px-3 mt-1"
                />
                <ErrorMessage name="writer">
                  {(e) => {
                    return (
                      <div className=" position-relative">
                        <small className="font_color position-absolute top-0 me-3">
                          {e}
                        </small>
                      </div>
                    );
                  }}
                </ErrorMessage>
              </label>
            </div>
            <div className="col col-4 d-flex justify-content-start">
              <label className="text-end w-75 my-3">
                تاریخ
                <Field
                  type="text"
                  name="date"
                  placeholder="تاریخ انتشار را وارد کنید"
                  className="form-control p-0 py-2 px-3 mt-1"
                />
                <ErrorMessage name="date">
                  {(e) => {
                    return (
                      <div className=" position-relative">
                        <small className="font_color shadow-lg position-absolute top-0 me-3">
                          {e}
                        </small>
                      </div>
                    );
                  }}
                </ErrorMessage>
              </label>
            </div>
          </div>

          <div className="w-100 ">
            <label className="d-flex flex-column w-75 mx-auto">
              <Field
                as="textarea"
                name="articleText"
                rows={12}
                placeholder="متن مقاله را اینجا تعریف کنید"
                className="mt-3 form-control"
              />
              <ErrorMessage name="articleText" className="text-danger">
                {(e) => {
                  return (
                    <div className=" position-relative">
                      <small className="font_color shadow-lg position-absolute top-0 me-3">
                        {e}
                      </small>
                    </div>
                  );
                }}
              </ErrorMessage>
            </label>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <button type="submit" className="mt-3 btn_submit py-2">
              ثبت مقاله
            </button>
          </div>
        </div>
      </Formik>
    </motion.div>
  );
};

export default CreateBlog;
