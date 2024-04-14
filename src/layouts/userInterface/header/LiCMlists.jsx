import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LiComponent = ({ title, route }) => {
//   const [activeNavbar, setActiveNavbar] = useState(false);
//   const handleActivetNav = (id) => {
//     if (id == id) {
//       setActiveNavbar(true);
//     }else{
//         setActiveNavbar(false);
//     }
//   };
  return (
    <li className={`pointer navbar_items `}>
      <NavLink 
        // className={`link ${ activeNavbar ? "active_navbar" : ""}`}
        className={({ isActive }) => (isActive ? 'active_navbar ' : 'link')}
        to={route}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default LiComponent;
