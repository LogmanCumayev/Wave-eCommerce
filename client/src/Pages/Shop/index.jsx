import React from 'react'


// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from '../../components/Shop-sections/Slider'
import ShopProducts from '../../components/Shop-sections/Products'
import CursorAnimetion from '../../components/Cursor'



const Shop = () => {


  return (
    <>
      <Header />
      <Slider />
      <ShopProducts/>
      <Footer />
    </>
  )
}

export default Shop