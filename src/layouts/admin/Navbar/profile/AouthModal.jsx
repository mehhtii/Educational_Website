import React from 'react';
import { XOctagon } from 'react-bootstrap-icons';
import Avatar from '../../../../assets/img/avatarAdmin.jpg';
  

const AouthModal = ({showModal, closeModal}) => {
    return ( 
        <div className={`${showModal ? "opacity-100 to_bottom_anim_modal" : "opacity-0 to_top_anim_modal"} aouth_modal shadow rounded-bottom-1 text-light position-absolute top-100 d-flex flex-column align-items-center`}>
              <XOctagon className="close_modal text-danger" onClick={closeModal}/>
              <img className="aouth_avatar rounded-circle" src={Avatar} alt="AouthAvatar" />
              <span>مهدی داودی</span>
              <small className=" text-warning">مدیر سایت</small>
              <button className="btn btn-sm btn-outline-danger mt-2 px-3">خروج</button>
            </div>
     );
}
 
export default AouthModal;