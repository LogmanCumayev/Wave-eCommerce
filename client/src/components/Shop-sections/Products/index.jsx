import React, { useState, useEffect } from 'react'
import "../Products/shop.css"
import "./productcard.css"
import './shopresponsive.css'
// Components
import Star from '../../Star'
// React-Icons
import { FiSmartphone } from "react-icons/fi"
import { AiFillApple, AiOutlineTablet, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { SiSamsung, SiXiaomi, SiGarmin } from "react-icons/si"
import { BsSmartwatch, BsHeadphones, BsFilterLeft } from "react-icons/bs"
import { TbScale, TbScaleOff } from "react-icons/tb"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// React Spinner
import { MutatingDots } from 'react-loader-spinner'
// FontAwesome
import "../../FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Redux action
import { addToCartAction } from '../../../Redux/Action/addtocartAction'
import { DeleteCompare, addToCompareAction } from '../../../Redux/Action/addtocompareAction'
// React-redux
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { DeleteFavorite, addToFavoriteAction } from '../../../Redux/Action/addtofavoriteAction'



const ShopProducts = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;
    const [search, setSearch] = useState('')
    const [categoryItem, setCategoryItem] = useState('')
    const [brandItem, setBrandItem] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedBrand, setSelectedBrand] = useState('all')

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');




    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("http://localhost:3000/products");
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json());
                setLoading(false)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])




    const succesAddCart = () => toast.success("Added to Cart" + " " + "🛒");
    const succesAddCompare = () => toast.success("Added to Compare" + " " + "⚖️");
    const succesAddFav = () => toast.success("Added to Favorite " + "❤️");

    const dangerDeleteCompare = () => toast.error("Deleted from Compare" + " " + "⚖️");
    const dangerDeleteFav = () => toast.error("Deleted from Favorite " + "❤️");


    // Dispatchs
    const dispatch = useDispatch()
    function addCart(elem) {
        dispatch(addToCartAction(elem))
        succesAddCart()
    }
    function addCompare(elem) {
        dispatch(addToCompareAction(elem))
        succesAddCompare()
    }
    function deleteCompare(id) {
        dispatch(DeleteCompare(id))
        dangerDeleteCompare()
    }
    function addFavorite(elem) {
        dispatch(addToFavoriteAction(elem))
        succesAddFav()
    }
    function deleteFavorite(id) {
        dispatch(DeleteFavorite(id))
        dangerDeleteFav()
    }



    // UseSelector
    const { favorite, compare } = useSelector(state => state)

    // ---------------
    // Producta gorunen itemlara limit qoyur
    const [visible, setVisible] = useState(8)
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 8)
    }




    // FIlter buttonu ucun state
    const [openFilter, setOpenFilter] = useState(false)


    // =====================Listdeki Productlar =================================//
    const ShowProducts = () => {
        return (
            <>
                {
                    filter.filter((elem) => {
                        return search.toLowerCase() === '' ? elem : elem.title.toLowerCase().includes(search);
                    }).slice(0, visible).map((item, index) => (
                        <div className='productcard' key={index}>
                            <Link to={`/detail/${item.id}`} className="productLink" >
                                <div className='productcard-image'>
                                    <img src={item.thumbnail} alt={item.title} />
                                </div>
                            </Link>

                            <div className='productcard-icons'>
                                {favorite.find(listItem => listItem.id === item.id) ?
                                    <button className='deleteFavoriteBtn' onClick={() => deleteFavorite(item.id)} ><AiFillHeart /></button> :
                                    <button className='addFavoriteBtn' onClick={() => addFavorite(item)} ><AiOutlineHeart /></button>
                                }

                                {
                                    compare.find(listItem => listItem.id === item.id) ?
                                        <button className='deleteCompareBtn' onClick={() => deleteCompare(item.id)}><TbScaleOff /></button> :
                                        <button className='addCompareBtn' onClick={() => addCompare(item)}><TbScale /></button>
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
                                        <span className='productcard-rating-number'>{item.rating}</span>
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

                    ))
                }
            </>
        )

    }


    // =====================Listdeki Productlar ucun loading =================================//

    const Loading = () => {
        return (
            <>
                <div className='loading-shop'>
                    <MutatingDots
                        height="100"
                        width="100"
                        color="#002233"
                        secondaryColor='#3066be'
                        radius='12.5'
                        ariaLabel="mutating-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>

            </>
        )
    }

    // =====================Listdeki Productlar ucun loading =================================//

    // =====================Listdeki Productlari filtirlemek ucun functionlar =================================//

    function filterProducts(category, brand) {
        const updatedList = data.filter((item) => {
            if (category && brand) {
                return item.category === category && item.brand === brand;
            } else if (category) {
                return item.category === category;
            } else if (brand) {
                return item.brand === brand;
            }
            return true;
        });

        setFilter(updatedList);
    }
    function sortLowPrice() {
        const updatedList = filter.sort((a, b) => a.price - b.price);
        setFilter([...updatedList]);
        console.log(updatedList);
        console.log(filter);
    }

    function sortHighPrice() {
        const updatedList = filter.sort((a, b) => b.price - a.price);
        setFilter([...updatedList]);
        console.log(updatedList);
        console.log(filter);
    }
    const PriceChanger = (minPrice, maxPrice) => {
        const filteredPrice = data.filter((item) => {
            if (minPrice && maxPrice) {
                return item.price >= minPrice && item.price <= maxPrice;
            } else if (minPrice) {
                return item.price >= minPrice;
            } else if (maxPrice) {
                return item.price <= maxPrice;
            }
            return true;
        });
        const sortedFilteredPrice = filteredPrice.sort((a, b) => a.price - b.price)
        setFilter(sortedFilteredPrice);
    };
    const clearFilter = () => {
        setFilter(data)
        setSelectedCategory("all")
        setSelectedBrand("all")
        setMaxPrice(' ')
        setMinPrice(' ')
        setCategoryItem()
        setBrandItem()
    }
    const SortPriceFunc = (value) => {
        if (value === "1") {
            sortLowPrice()
        } else if (value === "2") {
            sortHighPrice()
        } else if (value === "0") {
            setFilter(data)
        }
    }
    // =====================Listdeki Productlari filtirlemek ucun fucntionlar =================================//


    return (
        <section className='shop-section'>
            <div className='main-container col-xl-12 col-lg-12'>
                <div className='shop-container col-xl-12 col-lg-12'>

                    <div className='shop-filter-container'>
                        <div className='shop-filter-heading'>
                            <div className='shop-filter-btn-div'>
                                {openFilter ?
                                    <button onClick={() => setOpenFilter(!openFilter)}>
                                        < BsFilterLeft /> Filter-
                                    </button>
                                    :
                                    <button onClick={() => setOpenFilter(!openFilter)}>
                                        < BsFilterLeft /> Filter+
                                    </button>
                                }
                            </div>
                            <div className='shop-search-btn-div'>
                                <input
                                    type='text'
                                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                        <div className={openFilter ? "shop-filter-body" : "shop-filter-body-close"}>
                            <div className='shop-filter-category'>
                                <div className='shop-filter-category-heading'>
                                    <span>Category</span>
                                </div>
                                <div className='shop-filter-category-list'>
                                    <button name='category'
                                        value="all"
                                        className={selectedCategory === "all" ? "activeFilter" : ""}
                                        onClick={(e) => {
                                            setSelectedCategory(e.target.value)
                                            filterProducts(brandItem)

                                        }}>
                                        All
                                    </button>
                                    <button name='category'
                                        value="smartphones"
                                        className={selectedCategory === "smartphones" ? "activeFilter" : ""}
                                        onClick={(e) => {
                                            setSelectedCategory(e.target.value)
                                            setCategoryItem(e.target.value)
                                            filterProducts(e.target.value, brandItem)
                                        }}>
                                        <FiSmartphone />Smartphones
                                    </button>
                                    <button name='category'
                                        value="tablet"
                                        className={selectedCategory === "tablet" ? "activeFilter" : ""}
                                        onClick={(e) => {
                                            setSelectedCategory(e.target.value)
                                            setCategoryItem(e.target.value)
                                            filterProducts(e.target.value, brandItem)
                                        }}>
                                        <AiOutlineTablet />  Tablets
                                    </button>
                                    <button name='category'
                                        value="smartwatch"
                                        className={selectedCategory === "smartwatch" ? "activeFilter" : ""}
                                        onClick={(e) => {
                                            setSelectedCategory(e.target.value)
                                            setCategoryItem(e.target.value)
                                            filterProducts(e.target.value, brandItem)
                                        }}>
                                        <BsSmartwatch />  Smartwatches
                                    </button>
                                    <button name='category'
                                        value="headphone"
                                        className={selectedCategory === "headphone" ? "activeFilter" : ""}
                                        onClick={(e) => {
                                            setSelectedCategory(e.target.value)
                                            setCategoryItem(e.target.value)
                                            filterProducts(e.target.value, brandItem)
                                        }}>
                                        <BsHeadphones /> Headphones
                                    </button>
                                </div>
                            </div>
                            <div className='shop-filter-company'>
                                <div className='shop-filter-company-heading'>
                                    <span>Brands</span>
                                </div>
                                <div className='shop-filter-company-list'>
                                    <button name='brand'
                                        value="all"
                                        className={selectedBrand === "all" ? "activeFilter" : ""}
                                        onClick={(e) => {
                                            setSelectedBrand(e.target.value)
                                            filterProducts(categoryItem)

                                        }}>
                                        All
                                    </button>
                                    <button name='brand'
                                        value="Apple"
                                        className={selectedBrand === "Apple" ? "activeFilter" : ""}
                                        onClick={(e) => {
                                            setSelectedBrand(e.target.value)
                                            setBrandItem(e.target.value)
                                            filterProducts(categoryItem, e.target.value)
                                        }}>
                                        <AiFillApple />Apple
                                    </button>
                                    <button name='brand'
                                        value="Xiaomi"
                                        className={selectedBrand === "Xiaomi" ? "activeFilter" : ""}
                                        onClick={(e) => {
                                            setSelectedBrand(e.target.value)
                                            setBrandItem(e.target.value)
                                            filterProducts(categoryItem, e.target.value)
                                        }}>
                                        <SiXiaomi />Xiaomi
                                    </button>
                                    <button name='brand'
                                        value="Samsung"
                                        className={selectedBrand === "Samsung" ? "activeFilter" : ""}
                                        onClick={(e) => {
                                            setSelectedBrand(e.target.value)
                                            setBrandItem(e.target.value)
                                            filterProducts(categoryItem, e.target.value)
                                        }}>
                                        <SiSamsung />Samsung
                                    </button>
                                    <button name='brand'
                                        value="Garmin"
                                        className={selectedBrand === "Garmin" ? "activeFilter" : ""}
                                        onClick={(e) => {
                                            setSelectedBrand(e.target.value)
                                            setBrandItem(e.target.value)
                                            filterProducts(categoryItem, e.target.value)
                                        }} >
                                        <SiGarmin />Garmin
                                    </button>
                                </div>
                            </div>
                            <div className='shop-filter-tools'>
                                <div className='shop-filter-tools-price-heading'>
                                    <span>Filter price</span>
                                </div>
                                <div className='shop-filter-tools-price-select-container'>
                                    <select className='shop-filter-price-select' onChange={(e) => {
                                        SortPriceFunc(e.target.value)
                                    }}>
                                        <option value={0}>Default</option>
                                        <option value={1}>Low Price</option>
                                        <option value={2}>High Price</option>
                                    </select>
                                </div>
                                <div className='shop-filter-tools-price-range'>

                                    <label htmlFor="minPrice">Minimum Price:</label>
                                    <input
                                        type="number"
                                        id="minPrice"
                                        className='priceInput'
                                        value={minPrice}
                                        onChange={(e) => {
                                            setMinPrice(e.target.value)
                                            PriceChanger(e.target.value, maxPrice)
                                        }}

                                    />

                                    <label htmlFor="maxPrice">Maximum Price:</label>
                                    <input
                                        type="number"
                                        id="maxPrice"
                                        className='priceInput'
                                        value={maxPrice}
                                        onChange={(e) => {
                                            setMaxPrice(e.target.value)
                                            PriceChanger(minPrice, e.target.value)
                                        }}
                                    />

                                    <span>Price Range: {minPrice} - {maxPrice}</span>
                                    <div className='filterClear'>
                                        <button onClick={() => clearFilter()}>Clear Filter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {filter.length > 0 ?
                        <div className='shop-products'>
                            {loading ? <Loading /> : <ShowProducts />}
                            <div className='seeMoreDiv'>
                                {filter.length-visible > 0 && <button onClick={showMoreItems}>See more</button>}
                            </div>
                        </div> :
                        <div className='shop-productsNoitem-container'>
                            <div className='shop-productsNoitem'>
                                <p>Unfortunately,</p>
                                <p>We don't have this product</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </section>
    )

}

export default ShopProducts