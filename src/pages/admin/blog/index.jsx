import React, { useState } from "react";
import { PlusCircleDotted } from "react-bootstrap-icons";
import CreateBlog from "./createBlog";
// import '../../../assets/css/Layout.css';

const BlogAdmin = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col mt-3"></div>
          <div className="col mt-3 text-start">
            <button className="btn_create text-light ">
              <span className="ms-1 pointer">افزودن مقاله</span>
              <PlusCircleDotted onClick={handleShowModal} />
            </button>
          </div>
        </div>
      </div>
      <CreateBlog showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default BlogAdmin;
