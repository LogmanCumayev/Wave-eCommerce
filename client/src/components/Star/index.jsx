import React from 'react'
import './star.css'
// React Icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { HiOutlineStar } from "react-icons/hi"

const Star = ({ stars }) => {

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return <span key={index}>
      {
        stars >= index + 1 ? (
          <FaStar className='star-icon' />
        ) : stars >= number ? (
          <FaStarHalfAlt className='star-icon'  />
        ) : (
          <HiOutlineStar className='star-icon-outline'  />
        )}
    </span>
  })
  return (
    <>
      <div className='star-list'>
        {ratingStar}
      </div>
    </>
  )
}

export default Star