import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  return (
    <>
      <Helmet>
        <title>Wholets - Digital Seller :: Orders History</title>
      </Helmet>
      <section className="relative">
        <div className="w-full max-w-[90rem ] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <h2 className="font-manrope font-extrabold text-3xl lead-10 text-blue-900 mb-9">
              Order History
            </h2>
            <Link to={"/products"}>
              <button className="rounded-full px-7 py-3 bg-blue-900 shadow-sm shadow-transparent text-white font-semibold text-sm transition-all duration-500 hover:shadow-indigo-400 hover:bg-blue-700">
                Shop Again
              </button>
            </Link>
          </div>

          <div className="mt-7  pt-9">
            <div className="flex max-lg:flex-col items-center gap-8 lg:gap-24 px-3 md:px-11">
              <div className="grid grid-cols-4 w-full">
                <div className="col-span-4 sm:col-span-1">
                  <img
                    src="https://pagedone.io/asset/uploads/1705474774.png"
                    alt=""
                    className="max-sm:mx-auto"
                  />
                </div>
                <div className="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
                  <h6 className="font-manrope font-semibold text-xl leading-9 text-black mb-3 whitespace-nowrap">
                    Decoration Flower port
                  </h6>
                  <div className="flex items-center max-sm:flex-col gap-x-10 gap-y-3">
                    <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                      Size: s
                    </span>
                    <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                      Qty: 1
                    </span>
                    
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-around w-full  sm:pl-28 lg:pl-0">
                <div className="flex flex-col justify-center items-start max-sm:items-center">
                  <p className="font-semibold text-lg leading-8 text-green-500 text-left whitespace-nowrap">
                    Delivered
                  </p>
                </div>
                <div className="flex flex-col justify-center items-start max-sm:items-center">
                  <p className="font-semibold text-xl leading-8 text-black whitespace-nowrap">
                    Price $80.00
                  </p>
                </div>
              </div>
            </div>

            <svg
              className="my-9 w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="1216"
              height="2"
              viewBox="0 0 1216 2"
              fill="none"
            >
              <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg>

            <div className="flex max-lg:flex-col items-center gap-8 lg:gap-24 px-3 md:px-11">
              <div className="grid grid-cols-4 w-full">
                <div className="col-span-4 sm:col-span-1">
                  <img
                    src="https://pagedone.io/asset/uploads/1705474672.png"
                    alt=""
                    className="max-sm:mx-auto"
                  />
                </div>
                <div className="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
                  <h6 className="font-manrope font-semibold text-xl leading-9 text-black mb-3 whitespace-nowrap">
                    Decoration’s Item
                  </h6>
                  <div className="flex items-center max-sm:flex-col gap-x-10 gap-y-3">
                    <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                      Size: s
                    </span>
                    <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                      Qty: 1
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-around w-full sm:pl-28 lg:pl-0">
                <div className="flex flex-col justify-center items-start max-sm:items-center">
                  
                  <p className="font-semibold text-lg leading-8 text-red-500 text-left whitespace-nowrap">
                    Cancelled
                  </p>
                </div>
                <div className="flex flex-col justify-center items-start max-sm:items-center">
                <p className="font-semibold text-xl leading-8 text-black whitespace-nowrap">
                      Price $80.00
                    </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
