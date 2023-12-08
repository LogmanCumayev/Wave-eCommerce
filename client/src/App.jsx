import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Favorite from './Pages/Favorite'
import Compare from './Pages/Compare'
import Cart from './Pages/Cart'
import DetailPage from './Pages/DetailPage'
import OrderPage from './Pages/Order'
import NoPage from './Pages/NoPage'
import CursorAnimetion from './components/Cursor'


const App = () => {
  return (
    <>
      <CursorAnimetion/>
      <Routes>  
        <Route element={<Home />} path='/' />
        <Route element={<Shop />} path='/shop' />
        <Route element={<Services />} path='/service' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Favorite />} path='/favorite' />
        <Route element={<Compare />} path='/compare' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<DetailPage />} path='/detail/:id' />
        <Route element={<OrderPage />} path='/order' />
        <Route element={<NoPage />} path='*' />
      </Routes>
    </>
  )
}

export default App