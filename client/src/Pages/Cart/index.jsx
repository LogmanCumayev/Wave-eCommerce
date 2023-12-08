import React, { useState } from 'react'
// css
import "./cart.css"
import "./cart_responsive.css"


// Folder components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// FontAwesome
import "../../components/FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// Redux icon
import { HiXMark } from "react-icons/hi2"
import { MdRemoveShoppingCart } from "react-icons/md"


// Redux Actions
import { DeleteCart, IncreaseQuantity, DecreaseQuantity, RemoveAll } from '../../Redux/Action/addtocartAction';

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const Cart = () => {
    const cart = useSelector(state => state.cart.cartsItems)
    const numberCart = useSelector(state => state.cart.numberCart)
    
    const dispatch = useDispatch()
    function DeleteFromCart(key) {
        dispatch(DeleteCart(key))
    }
    function DecreaseQty(key) {
        dispatch(DecreaseQuantity(key))
    }
    function IncreaseQty(key) {
        dispatch(IncreaseQuantity(key))
    }
    function RemoveAllFromCart() {
        dispatch(RemoveAll())
    }


    let ListCart = [];
    let TotalCart = 0;
    Object.keys(cart).forEach(function (item) {
        TotalCart += cart[item].quantity * (cart[item].price-cart[item].price*cart[item].discountPercentage/100);
        ListCart.push(cart[item]);
    });


    if (cart.length > 0) {
        return (
            <>
                <Header />
                <section className='cart-page-section'>
                    <div className='cart-page-container row d-flex flex-wrap'>
                        <div className='cart-container
                            col-xl-8 col-lg-9 col-md-9 col-sm-9 col-12 '>
                            <div className='cart-heading'>
                                <h2>Cart</h2>
                                <span>{numberCart} Item</span>
                            </div>
                            <div className='cart-btn'>
                                <div className='delete-btn'>
                                    <button class="DeleteBtn" onClick={()=>RemoveAllFromCart()}>
                                        <span class="IconContainer">
                                            <FontAwesomeIcon icon="fa-solid fa-trash" />
                                        </span>
                                        <p class="text">Delete All</p>
                                    </button>
                                </div>
                            </div>
                            <div className='cart-items'>
                                {
                                    cart.map((item, key) => (
                                        <div className='item-container' key={key}>
                                            <div className='item-div'>
                                                <div className='item-image'>
                                                    <img src={item.thumbnail} alt={item.title} />
                                                </div>
                                                <div className='item-descp'>
                                                    <span>{item.description}</span>
                                                </div>
                                                <div className='item-counter'>
                                                    {item.quantity>1? <span className='decrease' onClick={() => DecreaseQty(key)}>
                                                        <FontAwesomeIcon icon="fa-solid fa-minus" />
                                                    </span>: " "}
                                                    <span className='item_quantity'>{item.quantity}</span>
                                                    <span className='increase' onClick={() => IncreaseQty(key)}>
                                                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                                                    </span>
                                                </div>
                                                <div className='item-price'>
                                                    {item.discountPercentage !== 0 && <span className='item-old-price'>{item.price}$</span>}
                                                    {<span className='item-new-price'>  {(item.price - item.price * item.discountPercentage / 100).toFixed(2)}$</span>}
                                                </div>
                                                <div className='xmark-delete'>
                                                    <HiXMark onClick={() => DeleteFromCart(key)} />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="check-container col-xl-4 col-lg-8 col-md-8 col-sm-8 col-12">
                            <div className='check-heading'>
                                <h2>Product:</h2>
                                <span>{numberCart} Products</span>
                            </div>
                            <div className='check-items'>
                                {
                                    cart.map((item, key) => (
                                        <div className='check-item-container' key={key}>
                                            <div className='check-item-data'>
                                                <div className='check-item-desc-container'>
                                                    <span className='check-item-desc'>{item.description}</span>
                                                </div>
                                                <div className='check-item-number-container'>{item.quantity}(item)</div>

                                            </div>
                                            <div className='check-item-price-container'>
                                                {<span>{((item.price - item.price * item.discountPercentage / 100) * item.quantity).toFixed(2)}$</span>}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='check-price-container'>
                                <span>Total Price:</span>
                                <span>{Number(TotalCart).toLocaleString('en-US')} $</span>

                            </div>
                            <div className='check-btns-container'>
                                <button className='check-btn'><Link to='/order' className='check-a-btn'>Order Formalization</Link></button>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>

        )
    } else {
        return (
            <>
                <Header />
                <section className='cart-noitem-section'>
                    <div className='cart-noitem-container'>
                        <div className='cart-noitem'>
                            <div className='noitem-img'>
                                <div className='noitem-svg'>
                                    <svg id="visual" viewBox="0 0 300 300" width="300" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                        <g transform="translate(151.4760888983585 148.09125686980207)">
                                            <path d="M63.1 -89C82.1 -73 98.1 -55.1 110.4 -32.3C122.7 -9.6 131.2 17.9 124.8 41.4C118.3 64.8 96.8 84.2 73.5 97.9C50.2 111.7 25.1 119.9 -1.8 122.3C-28.6 124.7 -57.2 121.4 -81 107.8C-104.8 94.2 -123.7 70.3 -128.6 44.4C-133.5 18.4 -124.3 -9.5 -111.7 -32.6C-99.1 -55.7 -83 -73.9 -63.9 -89.9C-44.7 -105.8 -22.3 -119.4 -0.1 -119.2C22 -119 44.1 -105 63.1 -89" fill="#1f96b7">
                                            </path>
                                        </g>
                                    </svg>
                                    <MdRemoveShoppingCart className='remove-shopping-cart' />
                                </div>
                            </div>
                            <div className='noitem-content'>
                                <span className='content-lg'>
                                    There are no products in your cart
                                </span>
                                <span className='content-sm'>
                                    Add the product you want to your cart
                                </span>
                                <Link to="/shop">
                                    <button className='noitem-btn'>
                                        Go to Shopping
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default Cart

