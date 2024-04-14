import React, { useState } from 'react';
import AouthModal from './AouthModal';
import Avatar from '../../../../assets/img/avatarAdmin.jpg';



const Profile = () => {
    const [showModal,setShowModal] = useState(false);


  const openModal = ()=>{
    setShowModal(true);
  }
  const closeModal = ()=>{
    setShowModal(false);
  }
    return ( 
        <div className=" d-flex align-items-center h-100 p-0 position-relative">
            <img
              className=" avatar rounded-circle p-1  "
              src={Avatar}
              alt="Avatar"
              onClick={openModal}
            />
            <AouthModal showModal={showModal} closeModal={closeModal}/>
          </div>
     );
}
 
export default Profile;