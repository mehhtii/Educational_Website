import React from "react";
import BlogAdmin from "./blog";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Dashbord";
import BlogContextApi from "../../contextApi/ContextApi";

const ContentAdmin = () => {
  return (
    <div className=" bg-info-subtle content_admin">
      <BlogContextApi>
        <Routes>
          <Route path="/admin" element={<Dashbord />} />
          <Route path="/admin/blog" element={<BlogAdmin />} />
        </Routes>
      </BlogContextApi>
    </div>
  );
};

export default ContentAdmin;
