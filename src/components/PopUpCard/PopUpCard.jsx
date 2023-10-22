import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './PopUpCard.css';

const PopUpCard = (props) => {
  const { phoneNumber, onClose } = props;
  return (
    <div className="popup-card">
      <p style={{fontSize:"25px", marginBottom:"15px"}}>Phone Number</p>
      <div className="popup-header">
        <img className='PhoneIcon' src="https://img.icons8.com/fluency/48/phone--v1.png" alt="phone--v1"/>
        <h2 className="phone-number">{phoneNumber}</h2>
      </div>
      <button className="cancel-button" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default PopUpCard;