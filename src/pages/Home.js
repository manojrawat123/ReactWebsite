import React, { useState, useEffect } from "react";
import "../index.css";
import Cart from "./Cart";
import Slider from "./Slider";
import Footer from "./Myfooter";
import img2 from "../myimg/img2.jpg";
import img3 from "../myimg/img3.jpg";
import img1 from "../myimg/img1.jpg";
import img4 from "../myimg/img4.jpg";

function App() {
  return (
    <>
      <Slider />
      <Cart />
      <div className="grid grid-cols-1  gap-10 mx-10 my-10 ">
        <div className="col-span-1 bg-white  flex  justify-center text-center items-center py-5 border-[4px] border-gray-300 rounded-xl ml-6">
          <img
            src={img4}
            alt="Product1"
            className="h-[5rem] rounded-[50%] border-[4px] border-gray-300 ml-4"
          />
          <div className=" mx-auto">
            <h2>Redima Kashyap</h2>
            <p>
              (She is Webdevloper And Hacker. She is the owner of MNC Company.)
            </p>
          </div>
          <br />
        </div>
      </div>

      
    </>
  );
}

export default App;
