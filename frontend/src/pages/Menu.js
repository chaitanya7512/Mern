import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Allproduct from "../component/Allproduct";
import { addCartItems } from "../redux/productSlice";

//This file contains the menu page
const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();
  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  //test case for productDisplay
  if (!productDisplay) {
    return (
      <div className="flex justify-center mt-10  font-bold text-2xl text-orange-600">
        Products are loading...
      </div>
    );
  }
  //add to cart in menu

  const addCartProduct = (e) => {
    dispatch(addCartItems(productDisplay));
  };
  return (
    <div className="p-2 md:py-4">
      <div className="w-full max-w-3xl bg-white m-auto md:flex">
        <div className="max-w-sm shadow overflow-hidden w-full p-3 ">
          <img
            src={productDisplay.image}
            alt="img"
            className="hover:scale-105 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-slate-600 capitalize text-lg md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-sm capitalize md:text-2xl">
            {productDisplay.category}
          </p>
          <p className="font-bold text-sm text-red-400 md:text-xl">
            {productDisplay.price}
          </p>
          <div className=" flex gap-3">
            <button className="bg-yellow-300 hover:bg-yellow-600 text-white font-bold min-w-[100px] p-1">
              Buy Now
            </button>
            <button
              onClick={addCartProduct}
              className="bg-yellow-300 hover:bg-yellow-600 text-white font-bold min-w-[100px] p-1"
            >
              Add Cart
            </button>
          </div>
          <div>
            <p className="font-bold text-sm">Description:</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>
      <Allproduct heading={"Related Products"} />
    </div>
  );
};

export default Menu;
