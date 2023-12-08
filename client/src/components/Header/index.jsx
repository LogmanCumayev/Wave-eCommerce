import React, { useState } from 'react'
import { useLockBodyScroll } from "@uidotdev/usehooks";
// Css
import './header.css'
import './headerResponsive.css'


// React Router
import { Link } from "react-router-dom"

// FontAwesome
import "../../components/FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useSelector } from 'react-redux';
// React icons
import { PiScalesLight } from "react-icons/pi"
import { FiShoppingCart } from "react-icons/fi"
import { HiMenuAlt3 } from "react-icons/hi"
import { HiMiniXMark } from 'react-icons/hi2'



function Menu() {
  useLockBodyScroll();

  return (
    <>
      <div className='menu-container'>
        <div className='menu-brand' data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000">
          <span className='menu-brand-logo'>W</span>
          <span className='menu-brand-name' data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">Wave</span>
        </div>
        <div className='menu-links'>
          <ul>
            <li data-aos="fade-right" data-aos-delay="900" data-aos-duration="1200">
              <Link to="/">
                <button
                  className="menu__link">
                  Home
                </button>
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000">
              <Link to="/shop">
                <button
                  className="menu__link">
                  Shop
                </button>
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="900" data-aos-duration="600">
              <Link to="/service">
                <button
                  className="menu__link">
                  Service
                </button>
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="900" data-aos-duration="600">
              <Link to="/contact">
                <button
                  className="menu__link">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )

}



const Header = () => {
  const numberCart = useSelector(state => state.cart.numberCart)
  const {favorite,compare}=useSelector(state=>state)
 
  const [clicked, setClicked] = useState(false)
  function isClicked() {
    setClicked(!clicked)
  }


  const [isActive, setIsActive] = useState(false);

  const isActiveClick = () => {
    setIsActive(!isActive);
  };


  return (
    
    <>

      <div className={clicked ? 'header-navbar-dark' : 'header-navbar'}>
        <div className='navbar-container col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
          <div className='navbar-brand'>
            <span>Wave</span>
          </div>
          <div className='navbar-list '>
            <div className='navbar-links '>
              <Link to="/">
                <button className='navbar-button'>
                  Home
                </button>
              </Link>

              <Link to="/shop">
                <button className='navbar-button'>
                  Shop
                </button>
              </Link>
            </div>
            <div className='navbar-icons'>
              <Link to="/favorite">
                <button className='heart-header-page'>
                  {
                    favorite && favorite.length >0?<FontAwesomeIcon icon="fa-solid fa-heart" />:<FontAwesomeIcon icon="fa-regular fa-heart" />
                  }
                </button>
              </Link>
              <Link to="/compare">
                <button className='compare-header-page'>
                  <PiScalesLight className='compare-icon' />
                  {
                    compare && compare.length >0? <span className='numbercompare'></span>: " "
                  }
                 
                </button> 
              </Link>
              <Link to="/cart">
                <button className='cart-header-page'>
                  <FiShoppingCart className='cart-icon' />
                  {numberCart !== 0 && <span className='numbercart'>{numberCart}</span>}
                </button>
              </Link>
            </div>
            <div className='navbar-menu' onClick={isClicked} >
              {clicked ? <HiMiniXMark className='navbar-xmark' /> : <HiMenuAlt3 />}
            </div>

          </div>
        </div>
        <div className={clicked ? "menu-main-container" : "menu-main-container-hidden"} >
          <svg id="visual" className='svg-wave-effect' viewBox="0 0 1920 900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <rect x="0" y="0" width="1920" height="900" fill="#ffffff">
            </rect>
            <path d="M0 433L64 444.8C128 456.7 256 480.3 384 480.8C512 481.3 640 458.7 768 427.8C896 397 1024 358 1152 374.2C1280 390.3 1408 461.7 1536 495.2C1664 528.7 1792 524.3 1856 522.2L1920 520L1920 0L1856 0C1792 0 1664 0 1536 0C1408 0 1280 0 1152 0C1024 0 896 0 768 0C640 0 512 0 384 0C256 0 128 0 64 0L0 0Z" fill="#002233" stroke-linecap="round" stroke-linejoin="miter">
            </path>
          </svg>
          {clicked ? <Menu /> : ''}
        </div>
      </div>
    </>
  )
}

export default Header











