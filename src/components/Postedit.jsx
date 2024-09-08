import React from "react";
import { FaStar } from "react-icons/fa";
import "./card.css";
import { MdEdit } from "react-icons/md";
export const Postedit = ({ Editproduct }) => {
  return (
    <>
      <div className="mt-12">
        <div id="contain">
          <img src={Editproduct.image_url} alt={Editproduct.name} />
          <p id="card-offer">{Editproduct.offer_price}%</p>
          <p id="edit">{<MdEdit />}</p>
          <p id="card-name">{Editproduct.name}</p>
          <p id="rating">
            {<FaStar />}
            {<FaStar />}
            {<FaStar />}
            {<FaStar />}
            {<FaStar />}
          </p>
          <p id="card-des">{Editproduct.description}</p>
        </div>
      </div>
    </>
  );
};
