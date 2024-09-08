import React from 'react'
import { FaStar } from "react-icons/fa";
import './card.css'
export const Card = ({product}) => {

  return (
    <div  >
      <div id='contain'>
      <img src={product.image_url} alt={product.name}  />
      <p id='card-offer'>{product.offer_price}%</p>
        <p id='card-name' >{product.name}</p>
        <p id='rating'>{<FaStar />}{<FaStar />}{<FaStar />}{<FaStar />}{<FaStar />}</p>
        <p id='card-des'>{product.description}</p>
      </div>
    </div>

  )
}
