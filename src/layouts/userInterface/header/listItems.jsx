import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LiComponent from './LiCMlists';


const ListItems = () => {
    
    return ( 
        <div className="col col-7">
          <ul className="list-unstyled d-flex justify-content-start me-5 text-light gap-5 align-items-center w-100 h-100">
            <LiComponent title={"خانه"} route={"/"} />
            <LiComponent title={"دوره ها"} route={"/courses"} />
            <LiComponent title={"بلاگ"} route={"/blog"} />
            <li className="pointer navbar_items">مدرسین</li>
            <li className="pointer navbar_items">درباره ما</li>
          </ul>
        </div>
     );
}
 
export default ListItems;