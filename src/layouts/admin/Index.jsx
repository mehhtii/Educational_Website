import React from "react";
import Navbar from "./Navbar/Index";
import Sidebar from "./Sidebar/Index";
import ContentAdmin from "../../pages/admin/content";
import "../../assets/css/Layout.css";
import '../../assets/css/admincontent.css';

const Layout = () => {
  return (
    <div className="container-fluid m-0">
      <div className="row p-0">
        <div className="col-1 p-0">
          <Sidebar />
        </div>
        <div className="col-11 p-0">
          <Navbar />
          <ContentAdmin/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
