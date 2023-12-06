"use client";
import React from "react";

const Product = () => {
  const goNext = () => {
    const productCon = window.document.querySelector(".productCon");
    productCon.scrollLeft = productCon.scrollLeft + productCon.clientHeight;
  };

  return (
    <>
      <div className="flex mainSection   h-[500px] overflow-hidden productCon">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(() => {
          return (
            <>
              <div className=" innerSection   bg-black m-5">
                <div>fjefoij</div>
              </div>
            </>
          );
        })}
      </div>
      <button className="bg-black  text-white " onClick={goNext}>
        Prev
      </button>
      <button className="bg-black  text-white ml-5" onClick={goNext}>
        Next
      </button>
    </>
  );
};

export default Product;
