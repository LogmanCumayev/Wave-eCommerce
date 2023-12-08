import React from 'react'

import "../Tab.css"

import smartwatch from './smartwatch.png'

// FontAwesome
import "../../../FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SmartwacthTab = () => {
    return (
        <section className='Tab-section'>
            <div className='TabItem-image-container'>
                <div className='TabItem-image-bg'
                    data-aos="fade-right"
                    data-aos-duration="1000">
                    <svg id="visual" viewBox="0 0 665 650" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                        <g transform="translate(371.84792907137296 292.92422580925233)">
                            <path d="M216.5 -116.9C252.9 -62 235.6 32 190.5 111C145.5 190 72.7 254 -14 262.1C-100.7 270.2 -201.5 222.3 -260.1 135.5C-318.8 48.6 -335.3 -77.2 -284.9 -140.2C-234.5 -203.1 -117.3 -203.1 -13.6 -195.3C90.1 -187.4 180.1 -171.7 216.5 -116.9" fill="#474acd">
                            </path>
                        </g>
                    </svg>

                </div>
                <div className='TabItem-image-item'>
                    <div className='TabItem-image-item-pic'
                    data-aos="fade-right"
                    data-aos-duration="1000">
                        <img src={smartwatch} alt='Garmin' />
                    </div>
                </div>
            </div>
            <div className='TabItem-content-container'>
                <div className='TabItem-content-title'
                data-aos="fade-down"
                data-aos-duration="1000">
                    <span>Garmin vívoactive® 4</span>
                </div>
                <div className='TabItem-content-features'>
                    <div className='TabItem-content-features-div'
                    data-aos="fade-left"
                    data-aos-duration="1000">
                        <div className='TabItem-content-features-div-icon'>
                            <svg id="visual" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(50.985586398178924 51.290789021429966)">
                                    <path d="M12.7 -11.3C15.6 -6.5 16.6 -1.2 15.8 4.2C15 9.6 12.5 15.1 8.3 17.2C4 19.2 -1.9 17.7 -7 15C-12 12.4 -16.3 8.5 -17.6 3.7C-18.9 -1 -17.2 -6.8 -13.8 -11.7C-10.4 -16.6 -5.2 -20.8 -0.2 -20.7C4.9 -20.6 9.8 -16.1 12.7 -11.3" fill="#474acd">
                                    </path>
                                </g>
                            </svg>
                            <FontAwesomeIcon icon="fa-brands fa-nfc-symbol" />
                        </div>
                        <div className='TabItem-content-features-div-text'>
                            Near Field Communication (NFC) allows for contactless payments through services like Apple Pay, Google Pay, and Samsung Pay.
                        </div>
                    </div>
                    <div className='TabItem-content-features-div'
                    data-aos="fade-left"
                    data-aos-duration="1000">
                        <div className='TabItem-content-features-div-icon'>
                            <svg id="visual" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(50.954455055118075 48.420454190008115)">
                                    <path d="M13.2 -10.5C16.6 -6.2 18.5 -0.8 17.8 4.6C17 10 13.5 15.4 8.3 18.3C3 21.3 -3.9 21.9 -9.5 19.4C-15 16.8 -19.2 11.1 -19.8 5.4C-20.3 -0.2 -17.2 -5.7 -13.3 -10.1C-9.4 -14.5 -4.7 -17.7 0.1 -17.8C4.9 -17.9 9.8 -14.8 13.2 -10.5" fill="#474acd">
                                    </path>
                                </g>
                            </svg>
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                        </div>
                        <div className='TabItem-content-features-div-text'>
                            Smartwatches are equipped with a variety of sensors such as heart rate monitors, accelerometers, and GPS, even analyze sleep patterns.
                        </div>
                    </div>
                    <div className='TabItem-content-features-div'
                    data-aos="fade-left"
                    data-aos-duration="1000">
                        <div className='TabItem-content-features-div-icon'>
                            <svg id="visual" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(49.77766495630399 49.12298827552166)">
                                    <path d="M15.8 -12.4C19 -8.5 19.3 -2 17.5 3.3C15.7 8.6 11.9 12.8 6.9 15.8C1.8 18.8 -4.5 20.7 -9 18.5C-13.4 16.4 -16 10.3 -17.3 4.1C-18.6 -2.2 -18.7 -8.6 -15.6 -12.4C-12.5 -16.3 -6.3 -17.7 0 -17.7C6.3 -17.7 12.5 -16.3 15.8 -12.4" fill="#474acd">
                                    </path>
                                </g>
                            </svg>
                            <FontAwesomeIcon icon="fa-solid fa-battery-full" />
                        </div>
                        <div className='TabItem-content-features-div-text'>
                            Battery life varies widely depending on the model and usage.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmartwacthTab