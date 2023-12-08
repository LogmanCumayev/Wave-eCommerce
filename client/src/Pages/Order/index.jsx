import React, { useState } from 'react'
import './orderpage.css'
import '../Cart/cart.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'

// GIF
import order404 from './404Orderpage.gif'
import { Link } from 'react-router-dom'



const OrderPage = () => {
  const cart = useSelector(state => state.cart.cartsItems)
  const numberCart = useSelector(state => state.cart.numberCart)
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(cart).forEach(function (item) {
    TotalCart += cart[item].quantity * (cart[item].price - cart[item].price * cart[item].discountPercentage / 100);
    ListCart.push(cart[item]);
  });


  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    number: '',
    email: '',
    country: '',
    city: '',
    address: '',
    message: '',
    paymentMethod: 'cash',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cardCVV: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  if (cart.length > 0) {
  return (
    <>
      <Header />

      <section className='order-section'>
        <div className='order-main-container col-xl-12 col-lg-12'>
          <div className='order-forms col-xl-7 col-lg-7 col-md-8 col-sm-8 col-12'>
            <div className='order-form-heading'>
              <span>Order Formalization</span>
            </div>
            <form onSubmit={handleSubmit}>
              <span className='form-heading'>Personal Information</span>


              <div className='order-formgroup'>
                <label htmlFor="name">First Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className='order-formgroup'>
                <label htmlFor="surname">Last Name:</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='order-formgroup'>
                <label htmlFor="number">Phone Number:</label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='order-formgroup'>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <span className='form-heading'>Address Information</span>

              <div className='order-formgroup'>
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='order-formgroup'>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='order-formgroup'>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='order-formgroup'>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Add any additional information'
                />
              </div>

              <span className='form-heading'>Payment Information</span>
              <div className='order-formgroup'>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleChange}
                  /> Cash
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                  /> Card
                </label>
              </div>
              {formData.paymentMethod === 'card' && (
                <div className='order-cart-container'>
                  <div className='order-formgroup-card'>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      placeholder='Card Number'
                      pattern="[0-9]*"
                      maxLength="18"
                    />
                    <input
                      type="text"
                      id="cardMonth"
                      name="cardMonth"
                      value={formData.cardMonth}
                      onChange={handleChange}
                      required
                      placeholder="MM"
                      pattern="[0-9]*"
                      maxLength="2"
                    />
                    <input
                      type="text"
                      id="cardYear"
                      name="cardYear"
                      value={formData.cardYear}
                      onChange={handleChange}
                      required
                      placeholder='YYYY'
                      pattern="[0-9]*"
                      maxLength="4"
                    />
                    <input
                      type="text"
                      id="cardCVV"
                      name="cardCVV"
                      value={formData.cardCVV}
                      onChange={handleChange}
                      required
                      placeholder='CVV'
                      pattern="[0-9]*"
                      maxLength="3"
                    />
                  </div>
                </div>
              )}
              <div className='order-btn'>
                <button className='order-submit' type="submit">Complete Order</button>
              </div>

            </form>

          </div>
          <div className='order-check col-xl-5 col-lg-5 col-md-8 col-sm-8 col-12'>
            <div className="check-container">
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
                        {<span>{(((item.price - item.price * item.discountPercentage / 100)) * item.quantity).toFixed(2)}$</span>}
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className='check-price-container'>
                <span>Total Price:</span>
                <span>{Number(TotalCart).toLocaleString('en-US')} $</span>

              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )}else{
    return(
    <>
    <center><img src={order404} alt='error'/></center>
    <center>
    <Link to='/shop'><button className='order-error-btn'>Back To Shop</button></Link>
    </center>
    </>
    )
  }
}

export default OrderPage