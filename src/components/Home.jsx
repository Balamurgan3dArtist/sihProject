// src/components/Home.js
import React, { useState } from "react";
import SearchAndLocation from "./SearchAndLocation ";
import { OfferCard } from "./OfferCard";
import data from "../assets/products.json";
import "./offer.css";
import { Card } from "./Card";
import "./card.css";
import { Link } from "react-router-dom";
import { Topbar } from "./Topbar";

export const Home = () => {
  const [products] = useState(data);
  const [product] = useState(data);

  return (
    <>
      <div >
        <Topbar />
        <div className="text-1xl mt-8 sm:text-3xl md:text-5xl">
          <h1>Welcome Balamurugan</h1>
        </div>
        <br />
        <div className="text-2xl sm:text-4xl md:text-7xl">
          <h1>
            <span className="text-green-600">Fresh</span> and <br />
            <span className="text-red-600">Healthy</span> Product for You
          </h1>
        </div>
        <SearchAndLocation />
        <div className="text-2xl  sm:text-3xl md:text-5xl mt-7 ">Today offers</div>
        <div className="container">
          {products.map((product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`} key={products.id}>
                <OfferCard products={product} />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-2xl  sm:text-3xl md:text-5xl mt-7">Fresh Products</div>
        <div id="box" >
          {product.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Card product={product} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
