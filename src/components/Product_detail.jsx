import React from "react";
import { useParams } from "react-router-dom";
import data from "../assets/products.json";
import { Topbar } from "./Topbar";
const Product_detail = () => {
  const { productId } = useParams();
  const product = data.find((item) => item.id === parseInt(productId, 10));
  if (!product) return <div>Product not found</div>;
  return (
    <>
    <Topbar/>
    <div className="p-4">
      <h1 className="text-3xl">{product.name}</h1>
      <img src={product.image_url} alt={product.name} className="w-full" />
      <p className="text-lg">Price: ${product.selling_price}</p>
      <p className="text-lg">Description: {product.description}</p>

      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        Buy Now
      </button>
    </div></>
  );
};

export default Product_detail;
