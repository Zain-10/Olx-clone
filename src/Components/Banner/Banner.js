import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  var upClass = 'toggle-up';
  var downClass = 'toggle-down';
  
  function handleArrow3() {
    var Arrow = document.querySelector('.Arrow3');
    
    if (~Arrow.className.indexOf(downClass)) {
      Arrow.className = Arrow.className.replace(downClass, upClass);
    } else {
          Arrow.className = Arrow.className.replace(upClass, downClass);
    }
    
  }
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <div className="Arrow3 toggle-down" onClick={handleArrow3}>
            <Arrow></Arrow> 
            </div>
          </div>
          <div className="otherQuickOptions">
            <span className='categories'>Cars</span>
            <span className='categories'>Motorcy...</span>
            <span className='categories'>Mobile Ph...</span>
            <span className='categories'>For Sale:Houses & Apart...</span>
            <span className='categories'>Scoot...</span>
            <span className='categories'>Commercial & Other Ve...</span>
            <span className='categories'>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
