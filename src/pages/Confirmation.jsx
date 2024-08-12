import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Confirmation = () => {
  const location = useLocation();
  const confirmationData = location.state || {};
  console.log(confirmationData);
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };
  const today = new Date();
  const futureDate = addDays(today, 3);
  const formattedDate = formatDate(futureDate);

  return (
    <>
      <Helmet>
        <title>Wholets - Digital Seller :: Payment Confirmation</title>
      </Helmet>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="font-manrope font-bold text-4xl leading-10 text-blue-900 text-center">
            Payment Successful
          </h2>
          <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
            Thanks for making a purchase you can check our order summary from
            below
          </p>
          <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
              <div className="data">
                <p className="font-semibold text-base leading-7 text-black">
                  Order Id:{" "}
                  <span className="text-blue-900 font-medium">
                    {confirmationData.orderId}
                  </span>
                </p>
                <p className="font-semibold text-base leading-7 text-black mt-4">
                  Order Payment :{" "}
                  <span className="text-gray-400 font-medium">
                    {" "}
                    {formatDate(today)}
                  </span>
                </p>
              </div>
              <Link to={"/order_tracking"}>
                <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-blue-900 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-blue-700 hover:shadow-indigo-400">
                  Track Your Order
                </button>
              </Link>
            </div>
            <div className="w-full px-3 min-[400px]:px-6">
              <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                <div className="img-box max-lg:w-full">
                  <img
                    src={confirmationData.image}
                    alt={confirmationData.title}
                    className="aspect-square w-full lg:max-w-[140px] rounded-xl"
                  />
                </div>
                <div className="flex flex-row items-center w-full ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                    <div className="flex items-center">
                      <div className="">
                        <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                          {confirmationData.title}
                        </h2>
                        <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                          By: Dust Studios
                        </p>
                        <div className="flex items-center ">
                          <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                            <FaTrash className="text-red-600"></FaTrash>
                          </p>
                          <p className="font-medium text-base leading-7 text-black ">
                            Qty:{" "}
                            <span className="text-gray-500">
                              {" "}
                              {confirmationData.quantity}{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm leading-7 text-black">
                            price
                          </p>
                          <p className="lg:mt-4 font-medium text-sm leading-7 text-blue-900">
                            ${confirmationData.price}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm leading-7 text-black">
                            Status
                          </p>
                          <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                            Ready for Delivery
                          </p>
                        </div>
                      </div>
                      <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                            Expected Delivery Time
                          </p>
                          <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                            {formattedDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-end">
              
              <p className="font-semibold text-lg text-black py-6">
                Total Price: <span className="text-blue-900"> ${confirmationData.price }</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Confirmation;
