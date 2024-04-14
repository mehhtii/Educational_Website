import React from "react";
import "../../assets/css/UserInterface.css";
import Header from "./header/Index";
import Footer from "./Footer/Index";
import Content from "../../pages/userInterface/content";

const UserInterface = () => {
  return (
    <>
     <Header/>
      <Content/>
     <Footer/>
    </>
  );
};

export default UserInterface;
