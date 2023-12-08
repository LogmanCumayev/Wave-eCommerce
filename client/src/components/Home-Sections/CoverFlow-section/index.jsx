import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// Css
import './coverflow.css';
import './productcard.css'
import './coverflowresponsive.css'

// FontAwesome
import "../../FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Axios
import axios from 'axios';
// Redux action
import { addToCartAction } from "../../../Redux/Action/addtocartAction";
// React-redux
import { useDispatch, useSelector } from 'react-redux';

// import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbScale, TbScaleOff } from 'react-icons/tb';
import Star from '../../Star';
import { DeleteFavorite, addToFavoriteAction } from '../../../Redux/Action/addtofavoriteAction';
import { DeleteCompare, addToCompareAction } from '../../../Redux/Action/addtocompareAction';


const Coverflow = () => {
  const { favorite, compare } = useSelector(state => state)
  const [clicked, setClicked] = useState(false)
  function isClicked() {
    setClicked(!clicked)
  }

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(res => setProducts(res.data))
    // .then(res => console.log(res?.data))

  }, [])

  const dispatch = useDispatch()
  function addCart(elem) {
    dispatch(addToCartAction(elem))
  }
  function addToFavorite(elem) {
    dispatch(addToFavoriteAction(elem))
  }
  function deleteFromFavorite(id) {
    dispatch(DeleteFavorite(id))
  }
  function addToCompare(elem) {
    dispatch(addToCompareAction(elem))
  }
  function deleteFromCompare(id) {
    dispatch(DeleteCompare(id))
  }

  return (
    <>
      <section className='Coverflow-section'>
        <div className='coverflow-container'>
          <svg id="visual" viewBox="0 0 1920 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <path d="M0 29L16.8 57.3C33.7 85.7 67.3 142.3 101 160C134.7 177.7 168.3 156.3 202 133.2C235.7 110 269.3 85 303 89.2C336.7 93.3 370.3 126.7 404 146.8C437.7 167 471.3 174 505 169.7C538.7 165.3 572.3 149.7 606 121.5C639.7 93.3 673.3 52.7 707 36.5C740.7 20.3 774.3 28.7 808 34.5C841.7 40.3 875.3 43.7 909.2 64.3C943 85 977 123 1010.8 141.5C1044.7 160 1078.3 159 1112 162.5C1145.7 166 1179.3 174 1213 153.7C1246.7 133.3 1280.3 84.7 1314 68.3C1347.7 52 1381.3 68 1415 83.5C1448.7 99 1482.3 114 1516 120.5C1549.7 127 1583.3 125 1617 124.2C1650.7 123.3 1684.3 123.7 1718 130.3C1751.7 137 1785.3 150 1819 136.8C1852.7 123.7 1886.3 84.3 1903.2 64.7L1920 45L1920 0L1903.2 0C1886.3 0 1852.7 0 1819 0C1785.3 0 1751.7 0 1718 0C1684.3 0 1650.7 0 1617 0C1583.3 0 1549.7 0 1516 0C1482.3 0 1448.7 0 1415 0C1381.3 0 1347.7 0 1314 0C1280.3 0 1246.7 0 1213 0C1179.3 0 1145.7 0 1112 0C1078.3 0 1044.7 0 1010.8 0C977 0 943 0 909.2 0C875.3 0 841.7 0 808 0C774.3 0 740.7 0 707 0C673.3 0 639.7 0 606 0C572.3 0 538.7 0 505 0C471.3 0 437.7 0 404 0C370.3 0 336.7 0 303 0C269.3 0 235.7 0 202 0C168.3 0 134.7 0 101 0C67.3 0 33.7 0 16.8 0L0 0Z" fill="#ffffff" stroke-linecap="round" stroke-linejoin="miter">
            </path>
          </svg>

          <div className='coverflow-bg'>
            <img src='https://www.pixground.com/wp-content/uploads/2023/10/Night-Halloween-Scenery-AI-Generated-4K-Wallpaper-jpg.webp' />
          </div>
          <div className='coverflow-content-header'>
            <span>HALLOWEEN</span>
          </div>
          <div className='coverflow-content'>
            <div className='coverflow-slide'>
              <Swiper
                modules={[EffectCoverflow, Autoplay]}
                effect={'coverflow'}
                grabCursor={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,

                }}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 60,
                  stretch: 50,
                  depth: 50,
                  modifier: 1,
                  slideShadows: false,
                }}
                className='CoverflowSlide'
              >

                {products.map((item, index) => {
                  if (item.category === "smartwatch") {
                    return (
                      <SwiperSlide key={index}>
                        <div className='productcard' >
                          <Link to={`/detail/${item.id}`} className="productLink" >
                            <div className='productcard-image'>
                              <img src={item.thumbnail} alt={item.title} />
                            </div>
                          </Link>

                          <div className='productcard-icons'>
                            {favorite.find(listItem => listItem.id === item.id) ?
                              <button className='deleteFavoriteBtn' onClick={() => deleteFromFavorite(item.id)} ><AiFillHeart /></button> :
                              <button className='addFavoriteBtn' onClick={() => addToFavorite(item)} ><AiOutlineHeart /></button>
                            }

                            {
                              compare.find(listItem => listItem.id === item.id) ?
                                <button className='deleteCompareBtn' onClick={() => deleteFromCompare(item.id)}><TbScaleOff /></button> :
                                <button className='addCompareBtn' onClick={() => addToCompare(item)}><TbScale /></button>
                            }

                            <button className='icon-share' >
                              <FontAwesomeIcon icon="fa-solid fa-share-nodes" />
                            </button>
                          </div>
                          <Link to={`/detail/${item.id}`} className="productLink">
                            <div className='productcard-info'>
                              <div className='productcard-title'>
                                <span>{item.title}</span>
                              </div>

                              <div className='productcard-price'>
                                <div className='shop-old-price-div'>
                                  {item.discountPercentage !== 0 && <span className='shop-old-price'>{item.price}$</span>}
                                </div>
                                <div className='shop-new-price-div'>
                                  {<span className='shop-new-price'>  {(item.price - item.price * item.discountPercentage / 100).toFixed(2)}$</span>}
                                </div>
                              </div>
                              <div className='productcard-rating'>
                                <Star stars={item.rating} />
                              </div>
                            </div>
                          </Link>
                          <div className='productcard-buy'>
                            <button class="CartBtn" onClick={() => addCart(item)}>
                              <span class="IconContainer">
                                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                              </span>
                              <p class="text">Add to Cart</p>
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  }
                }
                )
                }
              </Swiper>
            </div>
            <div className='coverflow-text'>
              <span>
                Up to 20 percent discount on smartwatches
              </span>
              <span>This event will run from the 29th of October until the 2nd of December Don't miss it </span>
            </div>
          </div>
        </div>

      <svg id="visual" viewBox="0 0 1920 125" className='Coverflow-footer-svg' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <path d="M0 102L11.5 102.3C23 102.7 46 103.3 68.8 105.8C91.7 108.3 114.3 112.7 137.2 98.5C160 84.3 183 51.7 205.8 48.3C228.7 45 251.3 71 274.2 80.7C297 90.3 320 83.7 342.8 68.5C365.7 53.3 388.3 29.7 411.2 36.3C434 43 457 80 480 93.5C503 107 526 97 548.8 89.8C571.7 82.7 594.3 78.3 617.2 75.8C640 73.3 663 72.7 685.8 73.3C708.7 74 731.3 76 754.2 82.2C777 88.3 800 98.7 822.8 88.2C845.7 77.7 868.3 46.3 891.2 38.8C914 31.3 937 47.7 960 50.3C983 53 1006 42 1028.8 50.8C1051.7 59.7 1074.3 88.3 1097.2 87.2C1120 86 1143 55 1165.8 37.8C1188.7 20.7 1211.3 17.3 1234.2 28C1257 38.7 1280 63.3 1302.8 62.5C1325.7 61.7 1348.3 35.3 1371.2 39.3C1394 43.3 1417 77.7 1440 95.5C1463 113.3 1486 114.7 1508.8 106.3C1531.7 98 1554.3 80 1577.2 74.7C1600 69.3 1623 76.7 1645.8 68.2C1668.7 59.7 1691.3 35.3 1714.2 29.2C1737 23 1760 35 1782.8 45.3C1805.7 55.7 1828.3 64.3 1851.2 76C1874 87.7 1897 102.3 1908.5 109.7L1920 117L1920 126L1908.5 126C1897 126 1874 126 1851.2 126C1828.3 126 1805.7 126 1782.8 126C1760 126 1737 126 1714.2 126C1691.3 126 1668.7 126 1645.8 126C1623 126 1600 126 1577.2 126C1554.3 126 1531.7 126 1508.8 126C1486 126 1463 126 1440 126C1417 126 1394 126 1371.2 126C1348.3 126 1325.7 126 1302.8 126C1280 126 1257 126 1234.2 126C1211.3 126 1188.7 126 1165.8 126C1143 126 1120 126 1097.2 126C1074.3 126 1051.7 126 1028.8 126C1006 126 983 126 960 126C937 126 914 126 891.2 126C868.3 126 845.7 126 822.8 126C800 126 777 126 754.2 126C731.3 126 708.7 126 685.8 126C663 126 640 126 617.2 126C594.3 126 571.7 126 548.8 126C526 126 503 126 480 126C457 126 434 126 411.2 126C388.3 126 365.7 126 342.8 126C320 126 297 126 274.2 126C251.3 126 228.7 126 205.8 126C183 126 160 126 137.2 126C114.3 126 91.7 126 68.8 126C46 126 23 126 11.5 126L0 126Z" fill="#ffffff" stroke-linecap="round" stroke-linejoin="miter">
        </path>
      </svg>
      </section>

      
    </>

  );
}
export default Coverflow



