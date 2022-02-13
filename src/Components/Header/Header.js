import React, { useContext, useState } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import Compass from '../../assets/Compass';
import Locations from '../../assets/Locations'
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory()
  const{user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const [toggle, setToggle] = useState(false);
  var upClass = 'toggle-up';
  var downClass = 'toggle-down';
  
  function handleArrow() {
    var Arrow = document.querySelector('.Arrow');
    
    if (~Arrow.className.indexOf(downClass)) {
      Arrow.className = Arrow.className.replace(downClass, upClass);
      setToggle(true)
    } else {
          Arrow.className = Arrow.className.replace(upClass, downClass);
          setToggle(false)
    }
    
    
  }
  function handleArrow2() {
    var Arrow = document.querySelector('.Arrow2');
    
    if (~Arrow.className.indexOf(downClass)) {
      Arrow.className = Arrow.className.replace(downClass, upClass);
    } else {
          Arrow.className = Arrow.className.replace(upClass, downClass);
    }

  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" placeholder='Search city , area or locality' defaultValue='India' />
          <div className="Arrow toggle-down" onClick={handleArrow}>
            <Arrow></Arrow>
          </div>
        </div>
        { toggle && <div className='locations'>
              <div className='currLocation'><Compass/>
              Use current location</div>
              <hr/>
              <div className='pLocations'>POPULAR LOCATIONS</div>
              <div className='Kerala'><Locations/>Kerala</div>
              <div className='Karna'><Locations/>Karnataka</div>
              <div className='Tamil'><Locations/>Tamil Nadu</div>
            </div>}
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <div className="Arrow2 toggle-down" onClick={handleArrow2}>
          <Arrow></Arrow>
          </div>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName}` : 'Login'}</span>
          <hr />
        </div>
        <div className='logout'>
          {user && <span onClick={()=>{
            firebase.auth().signOut();
            history.push('/login')
          }}>Logout</span>}</div>
        <div onClick={()=>{history.push('/create')}} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
