import React, { useEffect } from "react";
import "./offer.css";

export const OfferCard = ({ products }) => {
  useEffect(() => {
    const container = document.querySelector('.container');
    container.addEventListener('wheel', function(e) {
      if (e.deltaY > 0) {
        this.scrollLeft += 10; 
      } else {
        this.scrollLeft -= 10;
      }
      e.preventDefault(); 
    });

    return () => {
      container.removeEventListener('wheel', null); 
    };
  }, []);

  return (
    <div >
      <div id="border">
        <div className="inner">
          <p id="product-name">{products.name}</p>
          <p id="seller-name">SellerName</p>
          <p id="region">region</p>
          <p id="delivery">10 Hours</p>
          <p id="offer">{products.offer_price}%</p>
          <p id="normal-price">
            <del>${products.normal_price}</del>
          </p>
          <p id="selling-price">${products.selling_price}</p>
          <img src={products.image_url} alt={products.name} id="image" />
        </div>
      </div>
    </div>
  );
};
