import React, { useEffect, useState } from 'react'

import "./detailpage.css"
import "./detailpageresponsive.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'

// FontAwesome
import "../../components/FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// React Icons
import { AiOutlineLike, AiOutlineDislike, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BsArrowReturnRight } from "react-icons/bs"
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io"

// Redux action
import { addToCartAction } from "../../Redux/Action/addtocartAction";
// React-redux
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { useParams } from 'react-router'
import { DeleteCompare, addToCompareAction } from '../../Redux/Action/addtocompareAction'
import { DeleteFavorite, addToFavoriteAction } from '../../Redux/Action/addtofavoriteAction'
import { TbScale, TbScaleOff } from 'react-icons/tb'
import Star from '../../components/Star'




const DetailPage = () => {
  // UseSelector
  const { favorite, compare } = useSelector(state => state)


  function addCart(elem) {
    dispatch(addToCartAction(elem))
  }
  function addToCompare(elem) {
    dispatch(addToCompareAction(elem))
  }
  function deleteFromCompare(id) {
    dispatch(DeleteCompare(id))
  }
  function addToFavorite(elem) {
    dispatch(addToFavoriteAction(elem))
  }
  function deleteFromFavorite(id) {
    dispatch(DeleteFavorite(id))
  }


  const [detail, setDetail] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setDetail(res.data))

  }, [])

  const dispatch = useDispatch()
  function addCart(elem) {
    dispatch(addToCartAction(elem))
  }


  const [activeColor, setActiveColor] = useState();
  // Function for change image
  const colorChange = (elem) => {
    setActiveColor(elem);
  };


  const [comment, setComment] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:3000/comments/${id}`)
      .then(res => setComment(res.data.usersPost))


  }, [])

  const [username, setUsername] = useState('');
  const [postText, setPostText] = useState('');

  const UsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const PostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    localStorage.setItem('username', username);
    localStorage.setItem('postText', postText);
  };
  const savedUsername = localStorage.getItem('username');
  const savedPostText = localStorage.getItem('postText');
 

  return (
    <>
      {
        Object.keys(detail).length && Object.keys(comment).length ? <>
          <Header />
          <section className='detailpage-section'>
            <div className='detailpage-main-container col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12'>
              <div className='detailpage-image-div col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                <img src={activeColor ? detail.colors[activeColor] : detail.thumbnail} alt={detail.title} />
              </div>
              <div className='detailpage-info-div col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className='detailpage-item-title'>
                  <span>{detail.title}</span>
                </div>
                <div className='detailpage-icons'>
                  <button className='detail-heart'>
                    {favorite.find(listItem => listItem.id === detail.id) ?
                      <button className='detailFavoriteDeleteBtn' onClick={() => deleteFromFavorite(detail.id)} ><IoIosHeart /></button> :
                      <button className='detailFavoriteAddBtn' onClick={() => addToFavorite(detail)} ><IoIosHeartEmpty className='IoIosHeartEmpty' /></button>
                    }
                  </button>
                  <button className='detail-scale'>
                    {
                      compare.find(listItem => listItem.id === detail.id) ?
                        <button className='deleteCompareBtn' onClick={() => deleteFromCompare(detail.id)}><TbScaleOff /></button> :
                        <button className='addCompareBtn' onClick={() => addToCompare(detail)}><TbScale /></button>
                    }
                  </button>
                  <button className='detail-share' >
                    <FontAwesomeIcon icon="fa-solid fa-share-nodes" />
                  </button>
                </div>

                <div className='detailpage-item-info'>
                  <div className='info-colors'>
                    {
                      Object.keys(detail.colors).map((item, index) => (
                        <button key={index}
                          onClick={() => colorChange(item)}
                          className={activeColor == item}
                        >
                          <div className={item} ></div>
                        </button>
                      ))
                    }

                  </div>
                  <div className='info-rating'>
                    <Star stars={detail.rating} />

                  </div>
                  <div className='info-price'>
                    <div className='detail-old-price-div'>
                      {detail.discountPercentage !== 0 && <span className='detail-old-price'>{detail.price}$</span>}
                    </div>
                    <div className='detail-new-price-div'>
                      {<span className='detail-new-price'>  {(detail.price - detail.price * detail.discountPercentage / 100).toFixed(2)}$</span>}
                    </div>
                  </div>
                  <div className='info-stock'>
                    <span>in Stock:{detail.stock}</span>
                  </div>
                  <div className='detail-buy-btn'>
                    <button onClick={() => addCart(detail)}>
                      <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                          <svg xmlnsXlink="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill='#000'>
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                        </div>
                      </div>
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>





          </section >
          <svg id="detail-svg" className={activeColor ? `${activeColor}-color-svg` : `default-color-svg`} viewBox="0 0 1920 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <path d="M0 112L106.7 126.2C213.3 140.3 426.7 168.7 640 162.8C853.3 157 1066.7 117 1280 97.8C1493.3 78.7 1706.7 80.3 1813.3 81.2L1920 82L1920 301L1813.3 301C1706.7 301 1493.3 301 1280 301C1066.7 301 853.3 301 640 301C426.7 301 213.3 301 106.7 301L0 301Z" fill="#3066be" stroke-linecap="round" stroke-linejoin="miter">
            </path>
          </svg>



          <svg id="detail-svg" className={activeColor ? `${activeColor}-color-svg` : `default-color-svg`} viewBox="0 0 1920 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <path d="M0 154L106.7 144.2C213.3 134.3 426.7 114.7 640 104.5C853.3 94.3 1066.7 93.7 1280 117.3C1493.3 141 1706.7 189 1813.3 213L1920 237L1920 0L1813.3 0C1706.7 0 1493.3 0 1280 0C1066.7 0 853.3 0 640 0C426.7 0 213.3 0 106.7 0L0 0Z" fill="#3066be" stroke-linecap="round" stroke-linejoin="miter">
            </path>
          </svg>


          <section className='detailpage-details-section'>

            <div className='details-main-container col-xl-10 col-lg-12 col-md-12'>
              <div className='col-xl-12 col-lg-12 d-flex heading-features'>
                <span>Features</span>
              </div>
              <div className='details-feature-container'>
                <div className='feature-head-list'>
                  <ul>
                    {
                      Object.keys(detail.details).map(element => (
                        <li>{element}:</li>
                      ))
                    }
                  </ul>
                </div>
                <div className='feature-body-list'>
                  <ul>
                    {
                      Object.values(detail.details).map(element => (
                        <li>{element}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

          </section>
          <svg id="detail-svg" className={activeColor ? `${activeColor}-color-svg` : `default-color-svg`} viewBox="0 0 1920 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <path d="M0 109L106.7 109.8C213.3 110.7 426.7 112.3 640 127.3C853.3 142.3 1066.7 170.7 1280 168C1493.3 165.3 1706.7 131.7 1813.3 114.8L1920 98L1920 301L1813.3 301C1706.7 301 1493.3 301 1280 301C1066.7 301 853.3 301 640 301C426.7 301 213.3 301 106.7 301L0 301Z" fill="#3066be" stroke-linecap="round" stroke-linejoin="miter">
            </path>
          </svg>

          <svg id="detail-svg" className={activeColor ? `${activeColor}-color-svg` : `default-color-svg`} viewBox="0 0 1920 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <path d="M0 237L80 231.7C160 226.3 320 215.7 480 195.7C640 175.7 800 146.3 960 150C1120 153.7 1280 190.3 1440 213C1600 235.7 1760 244.3 1840 248.7L1920 253L1920 0L1840 0C1760 0 1600 0 1440 0C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0L0 0Z" fill="#3066be" stroke-linecap="round" stroke-linejoin="miter">
            </path>
          </svg>


          <section className='detailpage-comments-section'>


            <div className='comments-main-container col-xl-12 col-lg-12'>
              <div className='heading-comments'>
                <span>Comments</span>
              </div>
              <div className='comment-post-container'>
                <div className='comment-post-username'>
                  <input
                    type="text"
                    value={username}
                    onChange={UsernameChange}
                    placeholder='Username'
                  />
                </div>
                <div className='comment-post-userPost'>
                  <textarea
                    value={postText}
                    onChange={PostTextChange}
                  />
                </div>
                <div className='comment-post-submit'>
                  <button type="submit" onClick={handleSubmit}>Send Post</button>
                </div>
              </div>

              {
                savedUsername?.length>0 ? 
                <div className='comments-items-div'>
                <div className='comment-user-profile'>

                  <div className='profile-name'>
                    <div className='profile-pic'>
                      <img src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' alt='userProfile' />
                    </div>
                    <span>@{savedUsername}</span>

                  </div>
                </div>
                <div className='comment-user-posts'>
                  <span>{savedPostText}</span>
                </div>
              </div> : ' '
              }

              {
                comment.map(elem => (
                  <div className='comments-items-div'>
                    <div className='comment-user-profile'>

                      <div className='profile-name'>
                        <div className='profile-pic'>
                          <img src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' alt='userProfile' />
                        </div>
                        <span>@{elem.username}</span>
                      </div>
                      <div className='profile-date'>
                        <span>{elem.createdAt}</span>
                      </div>
                    </div>
                    <div className='comment-user-posts'>
                      <span>{elem.body}</span>
                    </div>
                  </div>

                ))}

            </div>
          </section>

          <Footer /></> : <>Loading...</>
      }
    </>
  )
}


export default DetailPage

