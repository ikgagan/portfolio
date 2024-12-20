import React, {useState} from "react";
import './contacts.css'
import PopUpCard from "../PopUpCard/PopUpCard";

const Contacts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const phoneNumber = '+1';

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div id="contact">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
    <link rel="stylesheet" href="./contacts.css" />
    <div id="works" className=" mx-auto m-auto h-[200px]  mt-16 sm:h-[250px]">
      <div className=" bg-black h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
      <div className="sm:text-[20px] text-white">
          <p style={{fontSize:"23px"}}>My Contact Information</p>
        </div>
  <div class="icons">
  <a href="https://www.linkedin.com/in/gaganik/" target="_blank" class="icon icon--linkedin">
      <i class="ri-linkedin-line"></i>
    </a>
    <a href="https://github.com/ikgagan" target="_blank" class="icon icon--github">
      <i class="ri-github-line"></i>
    </a>
    <a href="mailto:ik.gagan@gmail.com, gi36@njit.edu" target="_blank" class="icon icon--mail">
      <i class="ri-mail-line"></i>
    </a>
    <a href="https://wa.me/14084390043" target="_blank" class="icon icon--whatsapp">
      <i class="ri-whatsapp-line"></i>
    </a>
    <a href="https://discordapp.com/users/838487197136322643" target="_blank" class="icon icon--discord">
      <i class="ri-discord-line"></i>
    </a>
    <a href="https://www.instagram.com/ik_gagan/" target="_blank" class="icon icon--instagram">
      <i class="ri-instagram-line"></i>
    </a>
    <a href="https://twitter.com/gagan_ik" target="_blank" class="icon icon--twitter">
      <i class="ri-twitter-line"></i>
    </a>
    {/* <a  
    onClick={handleOpenPopup} 
    class="icon icon--phone">
      <i class="ri-phone-line"></i>
    </a> */}

    </div>
    {showPopup && (
          <PopUpCard phoneNumber={phoneNumber} onClose={handleClosePopup} />
        )}
      </div>
    </div>
    </ div>
  );
};

export default Contacts;
