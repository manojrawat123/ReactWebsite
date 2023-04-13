import React, { useState, useEffect }  from 'react'
import cart1 from "../myimg/shoes2.jpg";
import cart2 from "../myimg/laptop3.jpg";
import cart3 from "../myimg/1.jpg";
import cart4 from "../myimg/2.jpg";

export default function Cart() {
  return (
    <>
    
    <div className='grid grid-cols-1 xl:grid-cols-4 gap-10 mx-10 my-10 sm:grid-cols-2'>
        <div className='col-span-1 bg-white  flex flex-col justify-center text-center items-center py-5 border-[4px] border-gray-300 rounded-xl'>
            <img src={cart1} alt='Product1' className='h-[5rem]'/>
            <h2>Addidas Shoes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          laboriosam reprehenderit, earum harum consectetur quos tempore
          distinctio, provident quaerat, dolor nam ratione quidem in illo
          dolores voluptatum sunt! Rerum, repudiandae!</p>
          <span>Rs. 12000</span>
        <br/>
          <button className='border border-blue-500 text-blue-700 font-semibold py-2 px-4 hover:text-white hover:bg-blue-500 rounded'>Buy Now</button>
        

           
        </div>
        <div className='col-span-1 bg-white  flex flex-col justify-center text-center items-center py-5 border-[4px] border-gray-300 rounded-xl'>
        <img src={cart2} alt='Product2' className='h-[5rem]'/>
        <h2>Laptop</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          laboriosam reprehenderit, earum harum consectetur quos tempore
          distinctio, provident quaerat, dolor nam ratione quidem in illo
          dolores voluptatum sunt! Rerum, repudiandae!</p>
          <span>Rs. 12000</span>
        <br/>
          <button className='border border-blue-500 text-blue-700 font-semibold py-2 px-4 hover:text-white hover:bg-blue-500 rounded'>Buy Now</button>
        
        </div>
        
        <div className='col-span-1 bg-white  flex flex-col justify-center text-center items-center py-5 border-[4px] border-gray-300 rounded-xl'>
            <img src={cart3} alt='Product3' className='h-[5rem]'/>
            <h2>Headphone</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          laboriosam reprehenderit, earum harum consectetur quos tempore
          distinctio, provident quaerat, dolor nam ratione quidem in illo
          dolores voluptatum sunt! Rerum, repudiandae!</p>
          <span>Rs. 12000</span>
        <br/>
          <button className='border border-blue-500 text-blue-700 font-semibold py-2 px-4 hover:text-white hover:bg-blue-500 rounded'>Buy Now</button>
        
        </div>
        <div className='col-span-1 bg-white  flex flex-col justify-center text-center items-center py-5 border-[4px] border-gray-300 rounded-xl'>
            <img src={cart4} alt='Product4' className='h-[5rem]'/>
            <h2 className='text-2xl font-semibold'>Camera</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          laboriosam reprehenderit, earum harum consectetur quos tempore
          distinctio, provident quaerat, dolor nam ratione quidem in illo
          dolores voluptatum sunt! Rerum, repudiandae!</p>
        <span>Rs. 12000</span>
        <br/>
          <button className='border border-blue-500 text-blue-700 font-semibold py-2 px-4 hover:text-white hover:bg-blue-500 rounded'>Buy Now</button>
        </div>
    </div>
    </>
  )
}
