import React from 'react'





// AoS import
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
// FontAwesome
import "../../../FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TabletTab = () => {
    return (
        <section className='Tab-section'>
            <div className='TabItem-image-container'>
                <div className='TabItem-image-bg'
                data-aos="fade-right"
                data-aos-duration="1000"    
                >
                    <svg id="visual" viewBox="0 0 665 650" width="665" height="650" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                        <g transform="translate(394.0353157262342 344.8767110845275)">
                            <path d="M184.6 -119.7C213.9 -55.8 194.9 22.9 156.1 81.1C117.3 139.4 58.6 177.2 -29.3 194.1C-117.3 211 -234.5 207.1 -287.7 140.6C-340.8 74.1 -329.7 -55 -271.1 -135.8C-212.5 -216.7 -106.2 -249.3 -14.3 -241.1C77.7 -232.8 155.3 -183.7 184.6 -119.7" fill="#002233">
                            </path>
                        </g>
                    </svg>

                </div>
                <div className='TabItem-image-item'>
                    <div className='TabItem-image-item-pic'
                     data-aos="fade-right"
                    data-aos-duration="1000">
                        <img src="https://images.samsung.com/is/image/samsung/p6pim/hk_en/ef-zx900pbegww/gallery/hk-en-galaxy-tab-s8-ultra-note-view-cover-ef-zx900-ef-zx900pbegww-thumb-532358358?$480_480_PNG$" alt='SamsungGalaxyTabs8ultra' />
                    </div>
                </div>
            </div>
            <div className='TabItem-content-container'>
                <div className='TabItem-content-title'
                data-aos="fade-down"
                data-aos-duration="1000">
                    <span>Galaxy Tab S8 Ulrta</span>
                </div>
                <div className='TabItem-content-features-div'
                data-aos="fade-left"
                data-aos-duration="1000">
                        <div className='TabItem-content-features-div-icon'>
                            <svg id="visual" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(49.77766495630399 49.12298827552166)">
                                    <path d="M15.8 -12.4C19 -8.5 19.3 -2 17.5 3.3C15.7 8.6 11.9 12.8 6.9 15.8C1.8 18.8 -4.5 20.7 -9 18.5C-13.4 16.4 -16 10.3 -17.3 4.1C-18.6 -2.2 -18.7 -8.6 -15.6 -12.4C-12.5 -16.3 -6.3 -17.7 0 -17.7C6.3 -17.7 12.5 -16.3 15.8 -12.4" fill="#002233">
                                    </path>
                                </g>
                            </svg>
                            <FontAwesomeIcon icon="fa-solid fa-battery-full" />
                        </div>
                        <div className='TabItem-content-features-div-text'>
                        The Samsung Galaxy S8 comes with a lithium-ion battery with a capacity of 3,000 mAh, which offers enough charge life for daily use</div>
                    </div>
                <div className='TabItem-content-features'
                data-aos="fade-left"
                data-aos-duration="1000">
                    <div className='TabItem-content-features-div'>
                        <div className='TabItem-content-features-div-icon'>
                            <svg id="visual" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(50.954455055118075 48.420454190008115)">
                                    <path d="M13.2 -10.5C16.6 -6.2 18.5 -0.8 17.8 4.6C17 10 13.5 15.4 8.3 18.3C3 21.3 -3.9 21.9 -9.5 19.4C-15 16.8 -19.2 11.1 -19.8 5.4C-20.3 -0.2 -17.2 -5.7 -13.3 -10.1C-9.4 -14.5 -4.7 -17.7 0.1 -17.8C4.9 -17.9 9.8 -14.8 13.2 -10.5" fill="#002233">
                                    </path>
                                </g>
                            </svg>
                            <FontAwesomeIcon icon="fa-solid fa-mobile" />
                        </div>
                        <div className='TabItem-content-features-div-text'>
                        The Samsung Galaxy S8 Ultra comes with a large Dynamic AMOLED display, It also supports 120Hz refresh rate </div>
                    </div>
                    
                    <div className='TabItem-content-features-div'
                    data-aos="fade-left"
                    data-aos-duration="1000">
                        <div className='TabItem-content-features-div-icon'>
                            <svg id="visual" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(50.985586398178924 51.290789021429966)">
                                    <path d="M12.7 -11.3C15.6 -6.5 16.6 -1.2 15.8 4.2C15 9.6 12.5 15.1 8.3 17.2C4 19.2 -1.9 17.7 -7 15C-12 12.4 -16.3 8.5 -17.6 3.7C-18.9 -1 -17.2 -6.8 -13.8 -11.7C-10.4 -16.6 -5.2 -20.8 -0.2 -20.7C4.9 -20.6 9.8 -16.1 12.7 -11.3" fill="#002233">
                                    </path>
                                </g>
                            </svg>
                            <FontAwesomeIcon icon="fa-solid fa-microchip" />
                        </div>
                        <div className='TabItem-content-features-div-text'>
                        It offers a powerful processor, high RAM capacity and a wide range of storage options for superior performance. </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TabletTab