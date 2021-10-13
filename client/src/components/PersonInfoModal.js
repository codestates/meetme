import React from 'react';
import '../css/PersonInfoModal';

function PersonInfoModal({ openModalHandler, person }) {
 return (
  <div className="person-madal-wrap">
    <div className="person-modal-view onClick={(e) => e.stopPropagation()}">
      <button className="close-btn" onClick={openModalHandler}>
        &times;
      </button>
      <div className="person-modal-contents">
        <div className="person-img-container">
          <img src={person.profilepath} alt="기본이미지" />
        </div>
        <div className="person-name">email&nbsp;: {person.email}</div>
        <div className="person-likes">
        <span>category: {person.category}</span>
        <span>tag: {person.tag}</span>
        </div>
      </div>
    </div>
  </div>
 )
}

export default PersonInfoModal;