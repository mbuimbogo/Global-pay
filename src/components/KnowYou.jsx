import React from 'react'
import image from "../assets/images/image.jpeg"

export default function KnowYou() {
  return (
    <div>
      <div className="flex justify-center items-center mt-2 sm:justify-start">
      <img src={image} alt="image"  width="220px" className='sm:w-[480px] object-cover'/>
      </div>
    </div>
  )
}
