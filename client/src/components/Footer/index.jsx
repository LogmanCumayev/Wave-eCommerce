import React from 'react'
import "./footer.css"
// Font Awesome Icons
import "../FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// React Icons
import {BiLogoVisa} from "react-icons/bi"
import {RiMastercardFill} from "react-icons/ri"



const Footer = () => {
  return (
    <>
    <div className='main-footer'>
      <div className="footer-middle">
        <div className='container'>
          <div className='footer-div row'>
            {/* Colum1 */}
            <div className="col-xl-2 col-lg-2 col-md-6">
              <span className='footer-head'>Contact</span>
              <br />
              <span className='company-number'><a href='#'>*0055</a></span>
              <div className='visa_mastercard'>
              <BiLogoVisa className='visa'/><RiMastercardFill className='master'/>
              </div>
              
            </div>
            {/* Colum2 */}
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <span className='footer-head'>Company</span>
              <br />
              <ul className='footer-content'>
                <li><a href='#'>About Company</a></li>
                <li><a href='/services'>Our shops on the map</a></li>
                <li><a href='#'>career</a></li>
              </ul>

            </div>
            {/* Colum3 */}
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <span className='footer-head'>Info</span>
              <br />
              <ul className='footer-content'>
                <li><a href='#'>Privacy policy</a></li>
                <li><a href='/services'>Return Policy</a></li>
                <li><a href='#'>Aqua Tv</a></li>
              </ul>

            </div>
            {/* Colum4 */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <span className='footer-head'>For Clients</span>
              <br />
              <ul className='footer-content'>
                <li><a href='#'>Delivery and payment</a></li>
                <li><a href='/services'>Complaints handling policy</a></li>
                <li><a href='#'>Terms of use of the website</a></li>
              </ul>
            </div>
            {/* Colum5 */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <span className='footer-head'>Contact Us</span>
              <br />
              <ul className='footer-contact'>
                <li><FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
                <li><FontAwesomeIcon icon="fa-brands fa-youtube" /></li>
                <li><FontAwesomeIcon icon="fa-brands fa-telegram" /></li>
                <li><FontAwesomeIcon icon="fa-brands fa-facebook" /></li>
                <li><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></li>
                <li><FontAwesomeIcon icon="fa-brands fa-tiktok" /></li>

              </ul>
            </div>

          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Smart Store - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer

