import React from 'react'
import { Item } from '../Data/Data'
import Data from '../Data/Data'
import { useParams } from 'react-router-dom'
import Product from '../Data/Product'
import { Featured } from '../Data/Data'
import MovingText from 'react-moving-text'

export default function Single() {
  let { id } = useParams();
  var abc = Product.find((a) => a.id == id)
  
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 text-center'>
            <img width="600" src={abc.img} />
          </div>
          <div className='col-lg-6 text-center d-flex flex-column justify-content-center fs-1 fw-1'>
            <div className='box d-flex flex-column justify-content-center '>
              <p>{abc.title}</p>
              <h1><img  width="50" src="https://img.favpng.com/19/12/4/indian-rupee-currency-nepalese-rupee-computer-icons-money-png-favpng-5Vrcnnv4y0QGJJvXxQwkTxugv.jpg" /><span>{abc.price}</span></h1>
              <h1 className='text-center text-info'>Limited offer! hurry up</h1>
              <div>
              <button className='btn btn-primary'>ADD CART</button><span><button className='btn btn-primary mx-3 my-3'>SHOP NOW</button></span>
              </div>
             </div>
            </div>
        </div>
        </div>

    </>
  )
}



