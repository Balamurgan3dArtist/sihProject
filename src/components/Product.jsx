import React,{useState} from 'react'
import data from "../assets/products.json";
import './card.css'
import { Postedit } from './Postedit';
import { Topbar } from './Topbar';
export const Product = () => {
    const [Editproduct] = useState(data);
  return (
   <>
   <Topbar/>
    <div>
    <h1 className='text-3xl mt-10'>Edit your product Details</h1>
    <div id="box">
          {Editproduct.map((Editproduct) => (
           <Postedit  key={Editproduct.name} Editproduct={Editproduct} />
          ))}
        </div>
    </div>
    </>
  )
}
