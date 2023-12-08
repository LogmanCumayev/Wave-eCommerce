import React from 'react'

import "../Tab.css"

import iphone14 from './iphone-14-pro.png'

// FontAwesome
import "../../../FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SmartphoneTab = () => {

  return (
    <section className='Tab-section ' >
      <div className='TabItem-image-container '>
        <div className='TabItem-image-bg'
        data-aos="fade-right"
        data-aos-duration="1000">
          <svg id="visual" viewBox="0 0 665 650" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <g transform="translate(367.53484212113244 360.0101774147975)">
              <path d="M173.7 -100.6C230.2 -2.5 284.4 96.5 255.1 157.9C225.7 219.3 112.9 243.2 -2.2 244.4C-117.3 245.7 -234.5 224.4 -291.9 146.8C-349.2 69.3 -346.5 -64.6 -287.8 -164C-229.2 -263.3 -114.6 -328.2 -28 -312C58.6 -295.9 117.3 -198.7 173.7 -100.6" fill="#ba41de">
              </path>
            </g>
          </svg>
        </div>
        <div className='TabItem-image-item'>
          <div className='TabItem-image-item-pic'
          data-aos="fade-right"
          data-aos-duration="1000">
            <img src={iphone14} alt='iphone14pro' />
          </div>
        </div>
      </div>
      <div className='TabItem-content-container'>
        <div className='TabItem-content-title'
        data-aos="fade-down"
        data-aos-duration="1000">
          <span>IPhone 14 Pro Deep Purple</span>
        </div>
        <div className='TabItem-content-features'>
          <div className='TabItem-content-features-div'
          data-aos="fade-left"
          data-aos-duration="1000">
            <div className='TabItem-content-features-div-icon'>
              <svg id="visual" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                <g transform="translate(50.954455055118075 48.420454190008115)">
                  <path d="M13.2 -10.5C16.6 -6.2 18.5 -0.8 17.8 4.6C17 10 13.5 15.4 8.3 18.3C3 21.3 -3.9 21.9 -9.5 19.4C-15 16.8 -19.2 11.1 -19.8 5.4C-20.3 -0.2 -17.2 -5.7 -13.3 -10.1C-9.4 -14.5 -4.7 -17.7 0.1 -17.8C4.9 -17.9 9.8 -14.8 13.2 -10.5" fill="#ba41de">
                  </path>
                </g>
              </svg>
              <FontAwesomeIcon icon="fa-solid fa-mobile" />
            </div>
            <div className='TabItem-content-features-div-text'>
              The Super Retina XDR display offers 6.7-inch OLED, 460 ppi, 2796 x 1290 pixels, ProMotion technology, HDR and always-on display.
            </div>
          </div>
          <div className='TabItem-content-features-div'
          data-aos="fade-left"
          data-aos-duration="1000">
            <div className='TabItem-content-features-div-icon'>
              <svg id="visual" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                <g transform="translate(49.77766495630399 49.12298827552166)">
                  <path d="M15.8 -12.4C19 -8.5 19.3 -2 17.5 3.3C15.7 8.6 11.9 12.8 6.9 15.8C1.8 18.8 -4.5 20.7 -9 18.5C-13.4 16.4 -16 10.3 -17.3 4.1C-18.6 -2.2 -18.7 -8.6 -15.6 -12.4C-12.5 -16.3 -6.3 -17.7 0 -17.7C6.3 -17.7 12.5 -16.3 15.8 -12.4" fill="#ba41de">
                  </path>
                </g>
              </svg>
              <FontAwesomeIcon icon="fa-solid fa-battery-full" />
            </div>
            <div className='TabItem-content-features-div-text'>
              The device has a fast charging feature and the maximum fast charging power is 20 watts. Also, the battery capacity of the device is 3200 mAh.
            </div>
          </div>
          <div className='TabItem-content-features-div'
          data-aos="fade-left"
          data-aos-duration="1000">
            <div className='TabItem-content-features-div-icon'>
              <svg id="visual" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                <g transform="translate(50.985586398178924 51.290789021429966)">
                  <path d="M12.7 -11.3C15.6 -6.5 16.6 -1.2 15.8 4.2C15 9.6 12.5 15.1 8.3 17.2C4 19.2 -1.9 17.7 -7 15C-12 12.4 -16.3 8.5 -17.6 3.7C-18.9 -1 -17.2 -6.8 -13.8 -11.7C-10.4 -16.6 -5.2 -20.8 -0.2 -20.7C4.9 -20.6 9.8 -16.1 12.7 -11.3" fill="#ba41de">
                  </path>
                </g>
              </svg>
              <FontAwesomeIcon icon="fa-solid fa-microchip" />
            </div>
            <div className='TabItem-content-features-div-text'>
              The underlying hardware uses the Apple A16 Bionic chipset, which has a CPU frequency of 3.46 GHz.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartphoneTab