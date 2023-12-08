import React from 'react'
// CSS
import './homewelcome.css'
import './homewelcomeresponsive.css'

import videoWave from './waveVideo.mp4'



const WelcomeHomePage = () => {


    return (
        <section className='welcome-section'>
            <div className='welcome-main-container col-xl-12 col-lg-12'>
                <div className='welcome-Bg-video'>
                    <video autoPlay muted loop>
                        <source src={videoWave} />
                    </video>
                </div>
                <div className='welcome-content-container'>
                    <div className='welcome-content-header'>
                        <div className='welcome-content-svg'>
                            <svg id="visual" viewBox="0 0 665 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(86.52447259725704 171.53103149994973)">
                                    <path d="M324.4 -431C416.2 -309.7 483.3 -203.4 481.5 -101.5C479.6 0.3 408.7 97.6 328.7 146.1C248.7 194.6 159.6 194.2 81.1 222.6C2.7 251.1 -65.2 308.3 -187.5 339.8C-309.8 371.4 -486.6 377.2 -576.7 296.5C-666.8 215.7 -670.2 48.5 -630 -99.2C-589.8 -246.9 -506.1 -375.1 -393.8 -492.8C-281.5 -610.5 -140.8 -717.8 -12.2 -703.2C116.3 -688.7 232.7 -552.3 324.4 -431" fill="#ffffff">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div className='welcome-content'>
                            <div className='welcome-content-first'
                                data-aos="fade-right"
                                data-aos-duration="2000"
                                data-aos-delay="1000">
                                <span>Welcome</span></div>
                            <div className='welcome-content-second'
                                data-aos="fade-right"
                                data-aos-duration="2000"
                                data-aos-delay="1000">
                                <span>To The</span></div>
                        </div>
                    </div>
                    <div className='welcome-content-footer'>
                        <div className='welcome-companyName'
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="2000">
                            <span>Wave</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WelcomeHomePage


