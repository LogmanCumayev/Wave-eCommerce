import React from 'react'
import "./favorite.css"
import "./favoriteresponsive.css"



// Folder components
import Header from '../../components/Header'
import Star from '../../components/Star';

// FontAwesome
import "../../components/FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteFavorite } from '../../Redux/Action/addtofavoriteAction';
import { addToCartAction } from '../../Redux/Action/addtocartAction';



const Favorite = () => {
    const favorite = useSelector(state => state.favorite)

    const dispatch = useDispatch()
    function addCart(elem) {
        dispatch(addToCartAction(elem))
    }
    function deleteFromFavorite(id) {
        dispatch(DeleteFavorite(id))
    }

    // //////////Favorite Item List 
    const ShowFavList = () => {
        return (
            <>
                {
                    favorite.map((item, index) => (
                        <SwiperSlide key={index} className='FavoriteSwiperSlide'>
                            <div className='favoriteItem-image'>
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                            <div className='favoriteItem-info'>
                                <div className='favoriteItem-info-descr'>{item.description}</div>
                                <div className='favoriteItem-info-rating'><Star stars={item.rating} /><span className='favoriteItem-info-ratingNumber'>{item.rating}</span></div>
                                <div className='favoriteItem-info-price'>
                                    {item.discountPercentage !== 0 && <span className='item-old-price'>{item.price}$</span>}
                                    {<span className='item-new-price'>  {(item.price - item.price * item.discountPercentage / 100).toFixed(2)}$</span>}

                                    <div className='favoriteItem-info-cartBtn'>
                                        <button onClick={() => addCart(item)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div className='favoriteItem-info-cartBtn-mobile'>
                                        <button onClick={() => addCart(item)}>
                                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                                        </button>
                                    </div>
                                    <div className='favoriteItem-info-detailBtn'>
                                        <Link to={`/detail/${item.id}`}>
                                            See Detail
                                        </Link>
                                    </div>
                                    <div className='favoriteItem-info-detailBtn-mobile'>
                                        <Link to={`/detail/${item.id}`}>
                                        <FontAwesomeIcon icon="fa-solid fa-eye" />
                                        </Link>
                                    </div>
                                </div>


                            </div>
                            <div className='favoriteItem-closeBtn'>
                                <button onClick={() => deleteFromFavorite(item.id)}>
                                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                                </button>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </>
        )
    }

    /////////////No Item Favorite list
    const NoItemFav = () => {
        return (
            <div className='noItemFav-div'>
                <div className='noItemFav-content'>
                    <span>Your favorite list is empty!</span>
                    <span>Go to shop and choose your favorite item</span>
                    <Link to='/shop'>
                        <button>
                            Go to Shop
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <Header />
            <section className='favorite-section'>
                <div className='favorite-main-container col-12'>
                    <div className='favorite-header'>
                        <span className='favorite-page-name'>Favorite</span>
                    </div>
                    <div className='favorite-list col-12'>
                        <Swiper
                            direction={'vertical'}
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            mousewheel={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Mousewheel, Pagination]}
                            className="FavoriteSwiper"
                        >
                            {
                                favorite?.length > 0 ? ShowFavList() : NoItemFav()
                            }
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Favorite