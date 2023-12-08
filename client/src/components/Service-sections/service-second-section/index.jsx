import React from 'react'

// CSS
import './ServiceSecondSection.css'
import './ServiceResponsive.css'

// SVG


import customerSupport from './customerSupport.svg'
import policy from './policy.svg'
import terms from './terms.svg'
import iteration from './iteration.svg'
import rewies from './rewies.svg'
import quality from './quality.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const ServiceSecondSection = () => {
    return (
        <section className='second-service-section'>
            <div className='service-main-container'>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="ServiceSwiper"
                >
                    <SwiperSlide className='ServiceSwiper-firstSlide'>
                        <div className='services-infos-img-container col-xl-5 col-lg-6 col-md-8 col-sm-8 col-12' >
                            <svg id="visual" viewBox="0 0 600 600" width="600" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(353.24753148498206 309.15314786928235)">
                                    <path d="M114.1 -122.4C139.1 -89.1 144.6 -44.5 141.3 -3.3C138 37.9 125.9 75.9 100.9 107.4C75.9 138.9 37.9 163.9 -11.7 175.6C-61.3 187.3 -122.6 185.6 -168.1 154.1C-213.6 122.6 -243.3 61.3 -248 -4.7C-252.7 -70.7 -232.4 -141.4 -186.9 -174.8C-141.4 -208.1 -70.7 -204 -13.1 -191C44.5 -177.9 89.1 -155.8 114.1 -122.4" fill="#ffffff">
                                    </path>
                                </g>
                            </svg>
                            <img src={customerSupport} alt='customersupprot' />
                        </div>
                        <div className='services-infos-content  col-xl-7 col-lg-6 col-md-8 col-sm-8 col-12'>
                            <div className='infos-content-heading'>
                                <span>Customer Support</span>
                            </div>
                            <div className='infos-content-body'>
                                <span> Offering customer support through various channels, such as email, chat, or phone, to address inquiries, provide assistance, and resolve issues.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='ServiceSwiper-secondSlide'>
                        <div className='services-infos-img-container col-xl-5 col-lg-6 col-md-8 col-sm-8 col-12' data-aos="fade-right" data-aos-duration="1000">
                            <svg id="visual" viewBox="0 0 600 600" width="600" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(250.10677971763076 282.22776763596795)">
                                    <path d="M191.3 -167.8C241.1 -141.4 270 -70.7 268.6 -1.4C267.2 67.9 235.4 135.8 185.6 174.8C135.8 213.8 67.9 223.9 10.1 213.7C-47.6 203.6 -95.2 173.2 -120.2 134.2C-145.2 95.2 -147.6 47.6 -156.3 -8.7C-165.1 -65.1 -180.1 -130.1 -155.1 -156.4C-130.1 -182.8 -65.1 -170.4 2.8 -173.2C70.7 -176 141.4 -194.1 191.3 -167.8" fill="#ffffff">
                                    </path>
                                </g>
                            </svg>
                            <img className='policy-svg' src={policy} alt='policy' />
                            <img className='terms-svg' src={terms} alt='terms' />
                        </div>
                        <div className='services-infos-content col-xl-7 col-lg-6 col-md-8 col-sm-8 col-12'>
                            <div className='infos-content-heading' data-aos="fade-down" data-aos-duration="1000">
                                <span>Privacy Policy and Terms</span>
                            </div>
                            <div className='infos-content-body' data-aos="fade-up" data-aos-duration="1000">
                                <span> Having clear privacy policies and terms of service that protect both the business and the customers.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='ServiceSwiper-thirdSlide'>
                        <div className='services-infos-img-container col-xl-5 col-lg-6 col-md-8 col-sm-8 col-12' data-aos="fade-right" data-aos-duration="1000">
                            <svg id="visual" viewBox="0 0 600 600" width="600" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(308.48739406546855 279.12772128379726)">
                                    <path d="M135.6 -116C180.3 -91 224.2 -45.5 223.8 -0.4C223.5 44.8 178.9 89.6 134.2 127.4C89.6 165.2 44.8 196.1 -13 209.1C-70.7 222 -141.4 217.1 -184.3 179.3C-227.1 141.4 -242 70.7 -240.7 1.3C-239.5 -68.1 -221.9 -136.2 -179.1 -161.2C-136.2 -186.2 -68.1 -168.1 -11.3 -156.8C45.5 -145.5 91 -141 135.6 -116" fill="#ffffff">
                                    </path>
                                </g>
                            </svg>
                            <img className='iteration-svg' src={iteration} alt='iteration' />
                            <img className='quality-svg' src={quality} alt='quality' />
                        </div>
                        <div className='services-infos-content col-xl-7 col-lg-6 col-md-8 col-sm-8 col-12'>
                            <div className='infos-content-heading' data-aos="fade-down" data-aos-duration="1000">
                                <span>Product Warranty and Support</span>
                            </div>
                            <div className='infos-content-body' data-aos="fade-up" data-aos-duration="1000">
                                <span> Providing information about product warranties and post-purchase support for technical issues or repairs.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='ServiceSwiper-fourthSlide'>
                        <div className='services-infos-img-container col-xl-5 col-lg-6 col-md-8 col-sm-8 col-12' >
                            <svg id="visual" viewBox="0 0 600 600" width="600" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(262.61621279605004 345.80877601476794)">
                                    <path d="M188.6 -187.1C235.8 -141.4 259.4 -70.7 244.9 -14.5C230.4 41.7 177.8 83.4 130.6 108.4C83.4 133.4 41.7 141.7 -7.8 149.5C-57.3 157.3 -114.6 164.6 -143.6 139.6C-172.6 114.6 -173.3 57.3 -174.1 -0.8C-174.9 -58.9 -175.9 -117.9 -146.9 -163.5C-117.9 -209.2 -58.9 -241.6 5.9 -247.5C70.7 -253.4 141.4 -232.8 188.6 -187.1" fill="#ffffff">
                                    </path>
                                </g>
                            </svg>
                            <img src={rewies} alt='rewies' />
                        </div>
                        <div className='services-infos-content  col-xl-7 col-lg-6 col-md-8 col-sm-8 col-12'>
                            <div className='infos-content-heading' data-aos="fade-down" data-aos-duration="1000">
                                <span>Product Reviews</span>
                            </div>
                            <div className='infos-content-body' data-aos="fade-up" data-aos-duration="1000">
                                <span>Allowing customers to leave reviews and ratings for products, which can help other customers make informed choices.</span>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}

export default ServiceSecondSection