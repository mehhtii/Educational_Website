import React from 'react';
import {Grid1x2Fill, HouseFill, PencilFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate()
    return ( 
        <div className='w-100 overflow-y-scroll admin_sidebar text-light background_them border-0  border-end-0'>
            <div className='top_side_bar d-flex align-items-center justify-content-center'>
                <h6>ادمین پنل</h6>
            </div>
            <div className='w-100'>
                <ul className='list-unstyled d-flex flex-column align-items-center mt-4 w-100 p-0'>
                    <li onClick={()=>navigate("/")} className='sidebar_itmes d-flex w-100 justify-content-center  align-items-center gap-1 pointer py-2'><HouseFill/><span className='font_blod'>خانه</span></li>
                    <li onClick={()=>navigate("/admin")} className='sidebar_itmes d-flex w-100 justify-content-center  align-items-center gap-1 pointer py-2'><Grid1x2Fill/><span className='font_blod'>داشبورد</span></li>
                    <li onClick={()=>navigate("/admin/blog")} className='sidebar_itmes d-flex w-100 justify-content-center  align-items-center gap-1 pointer py-2'><PencilFill/><span className='font_blod'>بلاگ</span></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Sidebar;