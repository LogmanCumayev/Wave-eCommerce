import React from 'react'

// CSS
import './ServiceThirdSection.css'
import './ServiceResponsive.css'


import { FaLocationDot } from 'react-icons/fa6'
import { AiFillClockCircle } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
const ServiceThirdSection = () => {
    return (
        <section className='third-service-section'>
            <div className='service-main-container col-xl-12 col-lg-10 col-md-10 col-sm-10 col-10'>
                <div className='service-contact-info col-xl-6 col-lg-6 col-md-10 col-sm-10 col-12'>
                    <ul>
                        <li>
                            <span><FaLocationDot /> 18A Ahmad Rajabli, Baku</span>
                        </li>
                        <li>
                            <span><AiFillClockCircle />09:00AM-06:00PM</span>
                        </li>
                        <li>
                            <span><BsFillTelephoneFill />+994 55 000 55 55</span>
                        </li>
                        <li>
                            <span><BiLogoGmail /> wave.eCommerce@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <div className='service-map col-xl-6 col-lg-6 col-md-10 col-sm-10 col-12'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6076.4210848599505!2d49.86247044535101!3d40.4041863857659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d50e13e6f29%3A0x6defee3980c2e360!2sMedi%20Style%20Hospital!5e0!3m2!1str!2saz!4v1697538037930!5m2!1str!2saz"
                        allowfullscreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ServiceThirdSection