import React from "react";
import { Topbar } from "./Topbar";

export const Addproduct = () => {
  return (
    <>
    <Topbar/>
      <div className="flex flex-col justify-start mt-10 mb-20 mr-5 gap-8">
        <div className="flex flex-col bg-stone-100 p-4 rounded-lg gap-4">
          <h1 className="text-4xl">Product Details</h1>
          <label htmlFor="Nmae" className="text-xl">
            product name
          </label>
          <input
            type="text"
            placeholder="product name"
            className="bg-slate-100 rounded-md p-3 "
          />
          <label htmlFor="Nmae" className="text-xl">
            product Description
          </label>
          <textarea
            name="product Description"
            placeholder="description"
            className="bg-slate-100 rounded-md p-2"
          ></textarea>
          <label htmlFor="Nmae" className="text-xl">
            product Image
          </label>
          <input type="file" placeholder="product name" />
          <label htmlFor="Nmae" className="text-xl">
            product Catogory
          </label>
          <input
            type="text"
            placeholder="eg.vegitables,fruits"
            className="p-3 bg-slate-100 rounded-md "
          />
        </div>
        {/* vegitable detail */}
        <div className="flex flex-col bg-stone-100 p-4 rounded-lg gap-4">
          <h1 className="text-4xl">Vegitable Details</h1>
          <label htmlFor="Nmae" className="text-xl">
            Vegitable Type
          </label>
          <input
            type="text"
            placeholder="eg.Organic,Non-Organic"
            className="bg-slate-100 rounded-md p-3"
          />
          <label htmlFor="Nmae" className="text-xl">
            Varity
          </label>
          <input
            type="text"
            placeholder="eg.Tomato,Potato"
            className="p-3 bg-slate-100 rounded-md "
          />
          <label htmlFor="Nmae" className="text-xl">
            Weigth/Quantity
          </label>
          <input
            type="text"
            placeholder="eg.25kg"
            className="p-3 bg-slate-100 rounded-md "
          />
          <label htmlFor="Nmae" className="text-xl">
            Unit Price
          </label>
          <input
            type="text"
            placeholder="Rs.per unit price"
            className="p-3 bg-slate-100 rounded-md "
          />
        </div>
        {/* Quality and freshness */}
        <div className="flex flex-col bg-stone-100 p-4 rounded-lg gap-4">
          <h1 className="text-4xl">Quality and freshness</h1>
          <label htmlFor="Nmae" className="text-xl">
            Freshness Grade
          </label>
          <input
            type="text"
            placeholder="eg.upto 3 days"
            className="bg-slate-100 rounded-md p-3"
          />
          <label htmlFor="Nmae" className="text-xl">
            Quality Grade
          </label>
         <select name="garde" id="" className="bg-slate-100 rounded-md p-3">
            <option value="grade A">Grade A</option>
            <option value="grade B">Grade B</option>
            <option value="grade C">Grade C</option>
            <option value="grade D">Grade D</option>
         </select>
        </div>
        {/* Logistic and availabity */}
        <div className="flex flex-col bg-stone-100 p-4 rounded-lg gap-4">
          <h1 className="text-4xl">Available Status</h1>
          <label htmlFor="Nmae" className="text-xl">
           Available Stock
          </label>
          <select name="garde" id="" className="bg-slate-100 rounded-md p-3">
            <option value="instock">In-stock</option>
            <option value="Out0f-stock">Out 0f-stock</option>
         </select>
          <label htmlFor="Nmae" className="text-xl">
            Estimated Time Delivery
          </label>
          <input
            type="text"
            placeholder="10 Hours"
            className="p-3 bg-slate-100 rounded-md "
          />
        </div>
        <button><div className=" bg-orange-500 p-2 rounded-lg text-white z-50">
        <h1>Submit</h1>
      </div></button>
      </div>
    </>
  );
};
