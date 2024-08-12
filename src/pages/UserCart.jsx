import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useLocation } from "react-router-dom";
import IncrementDecrement from "../components/IncementDecrement";
import { FaTrash } from "react-icons/fa";

const UserCart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productData = location.state || {};

  const [products, setProducts] = useState(productData.selectedProduct || null);
  const [quantity, setQuantity] = useState(productData.quantity ?? 1);
  const [totalPrice, setTotalPrice] = useState(products ? products.price * (productData.quantity ?? 1) : 0);


  useEffect(() => {
    if (products) {
      setTotalPrice(quantity * products.price);
    }
  }, [quantity, products]);

  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrement = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  const handleChange = (newQuantity) => setQuantity(newQuantity);

  
  const totalAmount = totalPrice.toFixed(2);
  const totalQuantity = quantity;
  const image = products ? products.images[0] : "";
  const title = products ? products.title : "";


  const checkOut = () => {
    navigate("/check_out", {
      state: {
        shipping: "Free",
        price: totalAmount,
        quantity: totalQuantity,
        code: "No Promo Code attached",
        image: image,
        title: title,
      },
    });
  };
  const removeItem = () => {
    console.log("removed");

    setProducts(null); // Clear the product
    // setQuantity(1); // Reset quantity
    // setTotalPrice(0); // Reset total price
  };

  return (
    <>
      <Helmet>
        <title>Wholets - Digital Seller :: Shopping Cart</title>
      </Helmet>
      <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
              <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-blue-950">
                  Shopping Cart
                </h2>
                {/* <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                  3 Items
                </h2> */}
              </div>
              {products ? (
                <>
                  <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                    <div className="col-span-12 md:col-span-7">
                      <p className="font-normal text-lg leading-8 text-gray-400">
                        Product Details
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                      <div className="grid grid-cols-5">
                        <div className="col-span-3">
                          <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                            Quantity
                          </p>
                        </div>
                        <div className="col-span-2">
                          <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                            Total
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                    <div className="w-full md:max-w-[126px]">
                      <img
                        src={products.images}
                        alt={products.title}
                        className="mx-auto rounded-xl"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                      <div className="md:col-span-2">
                        <div className="flex flex-col max-[500px]:items-center gap-3">
                          <h6 className="font-semibold text-base leading-7 text-black">
                            {products.title}
                          </h6>
                          <h6 className="font-normal text-base leading-7 text-gray-500">
                            {products.category}
                          </h6>
                          <div className="flex gap-12 items-center">
                            <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                              ${products.price}
                            </h6>
                            <FaTrash
                              className="text-red-600 hover:text-red-700 hover:cursor-pointer"
                              onClick={removeItem}
                            ></FaTrash>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                        <IncrementDecrement
                          value={quantity}
                          onChange={handleChange}
                          onIncrement={increment}
                          onDecrement={decrement}
                        />
                      </div>
                      <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                        <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                          ${totalPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={"/products"}>
                    <div className="flex items-center justify-end mt-8">
                      <button className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                        Back to Shopping
                        <svg
                          className="transition-all duration-500 group-hover:translate-x-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                            stroke="#4F46E5"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </Link>
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold text-gray-600">
                    No items in the cart yet
                  </h3>
                  <Link to="/products">
                    <button className="mt-4 px-5 py-3 rounded-lg border-none outline-0 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-lg">
                      Back to Shopping
                    </button>
                  </Link>
                </div>
              )}
            </div>
            {products && (
              <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-blue-950 pb-8 border-b border-gray-300">
                  Order Summary
                </h2>
                <div className="mt-8">
                  <div className="flex items-center justify-between pb-6">
                    <p className="font-normal text-lg leading-8 text-black">
                      {/* 3 Items */}
                      Total Price
                    </p>
                    <p className="font-medium text-lg leading-8 text-black">
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                  {/* <form> */}
                  <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                    Shipping
                  </label>
                  <div className="flex pb-6">
                    <div className="relative w-full">
                      <div className=" absolute left-0 top-0 py-3 px-4">
                        <span className="font-normal text-base text-gray-300">
                          Shipping Charges
                        </span>
                      </div>
                      <input
                        type="text"
                        className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                        placeholder="Free"
                        disabled
                      />
                    </div>
                  </div>
                  <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                    Promo Code
                  </label>
                  <div className="flex pb-4 w-full">
                    <div className="relative w-full ">
                      <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                      <input
                        type="text"
                        className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                        placeholder="No Code available"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-8">
                    <p className="font-medium text-xl leading-8 text-black">
                      Total Price
                    </p>
                    <p className="font-semibold text-xl leading-8 text-indigo-600">
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={checkOut}
                    className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700"
                  >
                    Checkout
                  </button>
                  {/* </form> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserCart;
