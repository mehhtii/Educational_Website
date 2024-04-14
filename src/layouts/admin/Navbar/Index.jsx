import React from "react";
import "../../../assets/css/Layout.css";
import SearchInput from "./Search";
import Notification from "./Notife";
import Profile from "./profile";

const Navbar = () => {
  return (
    <div className="container-fluid d-flex align-items-center avatar_item p-0 background_them border-0 border-start-0 m-0">
      <div className="row w-100 h-100 p-0 align-items-center">
          <SearchInput />
        <div className="col-5 h-100 d-flex align-items-center justify-content-end gap-4">
          <Notification />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
