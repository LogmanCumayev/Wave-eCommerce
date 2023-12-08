import React, { useState, useEffect } from 'react'
import "./compare.css"
import './compareresponsive.css'


// React Icons
import { SlScreenSmartphone } from 'react-icons/sl'
import { AiOutlineCamera } from 'react-icons/ai'
import { GiProcessor } from 'react-icons/gi'
import { BsCpu, BsBatteryHalf, BsImage } from 'react-icons/bs'
import { CgSmartphoneRam } from 'react-icons/cg'
import { GrStorage } from 'react-icons/gr'
import { MdOutlineDateRange } from 'react-icons/md'
import { FiInfo } from 'react-icons/fi'

// FontAwesome
import "../../components/FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



// Folder components
import Header from '../../components/Header'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCompare, addToCompareAction } from '../../Redux/Action/addtocompareAction';

const Compare = () => {


    const [data, setData] = useState([])
    const [compareItem, setCompareItem] = useState(data)
    const compare = useSelector(state => state.compare)

    useEffect(() => {
        let componentMounted = true;
        const getProducts = async () => {
            const response = await fetch("http://localhost:3000/products");
            if (componentMounted) {
                setData(await response.clone().json())
                setCompareItem(await response.json());
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])


    const [compareSearch, setCompareSearch] = useState('')

    const dispatch = useDispatch()
    function addCompare(elem) {
        dispatch(addToCompareAction(elem))
    }
    function deleteCompare(elem){
        dispatch(DeleteCompare(elem))
    }
    
    

    const funcSearchItemsList = () => {
        return (
            <>

                {
                    compareItem.filter((elem) => {
                        return compareSearch.toLocaleLowerCase() === '' ? elem : elem.title.toLocaleLowerCase().includes(compareSearch);
                    }).slice(0, 4).map((item, index) => (
                        <div className='compare-search-item' key={index}>
                            <div className='compare-search-item-image'>
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                            <div className='compare-search-item-title'>
                                <span>{item.title}</span>
                            </div>
                            <div className='compare-search-item-btn'>
                            {compare.find(listItem => listItem.id === item.id) ?
                                    <span className='compare-search-item-added'>added</span> :
                                    <button onClick={() => addCompare(item)}>+add</button>
                                }
                                
                            </div>

                        </div>
                    ))
                }
            </>
        )
    }

    const compareSlideItems = () => {
        return (
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="CompareSwiper"
            >
                {
                    compare.map((item, index) => {
                        return (
                            <SwiperSlide className='CompareSwiperSlide' key={index}>
                                <div className='compare-list-item-container'>
                                    <div className='compare-list-item-image'>
                                        <img src={item.thumbnail} alt={item.title} />
                                        <div className='compare-deleteBtnDiv'>
                                            <button onClick={()=>deleteCompare(item.id)}><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
                                        </div>
                                    </div>
                                    <div className='compare-list-item-info'>
                                        <span className='compare-list-item-title'>
                                            {item.title}
                                        </span>
                                        <div className='compare-list-item-price'>
                                            {item.discountPercentage !== 0 && <span className='item-old-price'>{item.price}$</span>}
                                            {<span className='item-new-price'>  {(item.price - item.price * item.discountPercentage / 100).toFixed(2)}$</span>}
                                        </div>
                                    </div>
                                    <div className='compare-list-item-details'>
                                        <div>
                                            <span>{item.details.screen}</span>
                                        </div>
                                        <div>
                                            <span>{item.details.camera}</span>
                                        </div>
                                        <div>
                                            <span>{item.details.processor}</span>
                                        </div>
                                        <div>
                                            <span>{item.details.CPU}</span>
                                        </div>
                                        <div>
                                            <span>{item.details.ram}</span>
                                        </div>
                                        <div>
                                            <span>{item.details.storage}</span>
                                        </div>
                                        <div>
                                            <span>{item.details.battery_capacity}</span>
                                        </div>
                                        <div>
                                            <span>{item.details.release_date}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    )}
            </Swiper>
        )
    }

    const compareNoItem=()=>{
        return(
            <>
                <div className='compareNoItemContainer'>
                    <span>No products to compare</span>
                    <span>Please add a product</span>
                </div>
            </>
        )
    }


   
    return (
        <>
            <Header />
            <section className='compare-section'>
                <div className='compare-main-container  col-11'>
                    <div className='compare-header '>
                        <div className='compare-header-name  '>
                            <span>Compare</span>
                        </div>
                        <div className='compare-header-search'>
                            <div className='compare-header-search-input'>
                                <input
                                    type='text'
                                    onChange={(e) => setCompareSearch(e.target.value)}
                                    placeholder="Add item to Compare"
                                />
                            </div>
                            <div className='compare-header-search-output-container'>
                                {compareSearch === '' ? " " : funcSearchItemsList()}
                            </div>
                        </div>
                    </div>
                    <div className='compare-side '>
                        <div className='compare-side-detail-info'>
                            <div className='compare-side-detail-info-image-icon'>
                                <BsImage />
                            </div>
                            <div className='compare-side-detail-info-data'>
                                <FiInfo />Info
                            </div>
                            <div className='compare-side-detail-info-screen'>
                                <SlScreenSmartphone />Screen
                            </div>
                            <div className='compare-side-detail-info-camera'>
                                <AiOutlineCamera />Camera
                            </div>
                            <div className='compare-side-detail-info-processor'>
                                <GiProcessor />Processor
                            </div>
                            <div className='compare-side-detail-info-cpu'>
                                <BsCpu />CPU
                            </div>
                            <div className='compare-side-detail-info-ram'>
                                <CgSmartphoneRam />RAM
                            </div>
                            <div className='compare-side-detail-info-storage'>
                                <GrStorage />Storage
                            </div>
                            <div className='compare-side-detail-info-battery'>
                                <BsBatteryHalf />Battery
                            </div>
                            <div className='compare-side-detail-info-releaseDate'>
                                <MdOutlineDateRange />Release Date
                            </div>
                        </div>
                        <div className='compare-side-detail-info-mobile '>
                            <div className='compare-side-detail-info-image-icon'>
                                <BsImage />
                            </div>
                            <div className='compare-side-detail-info-data'>
                                <FiInfo />
                            </div>
                            <div className='compare-side-detail-info-screen'>
                                <SlScreenSmartphone />
                            </div>
                            <div className='compare-side-detail-info-camera'>
                                <AiOutlineCamera />
                            </div>
                            <div className='compare-side-detail-info-processor'>
                                <GiProcessor />
                            </div>
                            <div className='compare-side-detail-info-cpu'>
                                <BsCpu />
                            </div>
                            <div className='compare-side-detail-info-ram'>
                                <CgSmartphoneRam />
                            </div>
                            <div className='compare-side-detail-info-storage'>
                                <GrStorage />
                            </div>
                            <div className='compare-side-detail-info-battery'>
                                <BsBatteryHalf />
                            </div>
                            <div className='compare-side-detail-info-releaseDate'>
                                <MdOutlineDateRange />
                            </div>
                        </div>
                    </div>
                    <div className='compare-list'>
                        {compare.length>0 ? compareSlideItems() : compareNoItem() }
                    </div>

                </div>
            </section>
        </>
    )
}

export default Compare

