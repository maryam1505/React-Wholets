import React from "react";
import { Helmet } from "react-helmet";

const OrderTracking = () => {
  return (
    <>
      <Helmet>
        <title>Wholets - Digital Seller :: Track Your Order</title>
      </Helmet>
      <section className="py-3 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
            
            <div className="w-full justify-end items-start gap-8 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-full p-8 bg-white rounded-xl flex-col justify-start items-start gap-5 flex">
                  <h2 className="w-full text-gray-900 text-2xl font-semibold font-manrope leading-9 pb-5 border-b border-gray-200">
                    Order Tracking
                  </h2>
                  <div className="w-full flex-col justify-center items-center">
                    <ol className="flex md:flex-row flex-col md:items-start items-center justify-between w-full md:gap-1 gap-4">
                      <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-36">
                        <div className="w-full mr-1 z-10 flex flex-col items-center justify-start gap-1">
                          <div className="justify-center items-center gap-1.5 inline-flex">
                            <h5 className="text-center text-gray-900 text-lg font-medium leading-normal">
                              Order Placed
                            </h5>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M9.10815 11.2157C9.10815 11.2157 9.11044 11.2147 9.11433 11.2141C9.10997 11.2157 9.10815 11.2157 9.10815 11.2157Z"
                                fill="#047857"
                              />
                              <path
                                d="M9.13686 11.2157C9.13686 11.2157 9.13456 11.2147 9.13068 11.2141C9.13331 11.2151 9.136 11.2157 9.136 11.2157L9.13686 11.2157Z"
                                fill="#047857"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.83337 9.99992C1.83337 5.48959 5.48972 1.83325 10 1.83325C14.5104 1.83325 18.1667 5.48959 18.1667 9.99992C18.1667 14.5102 14.5104 18.1666 10 18.1666C5.48972 18.1666 1.83337 14.5102 1.83337 9.99992ZM14.3635 7.92721C14.6239 7.66687 14.6239 7.24476 14.3635 6.98441C14.1032 6.72406 13.6811 6.72406 13.4207 6.98441L9.82961 10.5755C9.53851 10.8666 9.3666 11.0365 9.22848 11.1419C9.17307 11.1842 9.13961 11.2029 9.1225 11.2107C9.1054 11.2029 9.07194 11.1842 9.01653 11.1419C8.87841 11.0365 8.7065 10.8666 8.4154 10.5755L7.13815 9.29825C6.8778 9.03791 6.45569 9.03791 6.19534 9.29825C5.93499 9.55861 5.93499 9.98071 6.19534 10.2411L7.50018 11.5459C7.75408 11.7999 7.98968 12.0355 8.20775 12.2019C8.44909 12.3861 8.74554 12.5469 9.1225 12.5469C9.49946 12.5469 9.79592 12.3861 10.0373 12.2019C10.2553 12.0355 10.4909 11.7999 10.7448 11.5459L14.3635 7.92721Z"
                                fill="#047857"
                              />
                            </svg>
                          </div>
                          <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                            20 May, 2024
                          </h6>
                        </div>
                      </li>
                      <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-32">
                        <div className="w-full mr-1 z-10 flex flex-col items-center justify-start gap-1">
                          <div className="justify-center items-center gap-1.5 inline-flex">
                            <h5 className="text-center text-gray-900 text-lg font-medium leading-normal">
                              Picked
                            </h5>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M9.10815 11.2157C9.10815 11.2157 9.11044 11.2147 9.11433 11.2141C9.10997 11.2157 9.10815 11.2157 9.10815 11.2157Z"
                                fill="#047857"
                              />
                              <path
                                d="M9.13686 11.2157C9.13686 11.2157 9.13456 11.2147 9.13068 11.2141C9.13331 11.2151 9.136 11.2157 9.136 11.2157L9.13686 11.2157Z"
                                fill="#047857"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.83337 9.99992C1.83337 5.48959 5.48972 1.83325 10 1.83325C14.5104 1.83325 18.1667 5.48959 18.1667 9.99992C18.1667 14.5102 14.5104 18.1666 10 18.1666C5.48972 18.1666 1.83337 14.5102 1.83337 9.99992ZM14.3635 7.92721C14.6239 7.66687 14.6239 7.24476 14.3635 6.98441C14.1032 6.72406 13.6811 6.72406 13.4207 6.98441L9.82961 10.5755C9.53851 10.8666 9.3666 11.0365 9.22848 11.1419C9.17307 11.1842 9.13961 11.2029 9.1225 11.2107C9.1054 11.2029 9.07194 11.1842 9.01653 11.1419C8.87841 11.0365 8.7065 10.8666 8.4154 10.5755L7.13815 9.29825C6.8778 9.03791 6.45569 9.03791 6.19534 9.29825C5.93499 9.55861 5.93499 9.98071 6.19534 10.2411L7.50018 11.5459C7.75408 11.7999 7.98968 12.0355 8.20775 12.2019C8.44909 12.3861 8.74554 12.5469 9.1225 12.5469C9.49946 12.5469 9.79592 12.3861 10.0373 12.2019C10.2553 12.0355 10.4909 11.7999 10.7448 11.5459L14.3635 7.92721Z"
                                fill="#047857"
                              />
                            </svg>
                          </div>
                          <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                            22 May, 2024
                          </h6>
                        </div>
                      </li>
                      <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-32">
                        <div className="w-full mr-1 z-10 flex flex-col items-center justify-start gap-1">
                          <div className="justify-center items-center gap-1.5 inline-flex">
                            <h5 className="text-center text-gray-900 text-lg font-medium leading-normal">
                              Packed
                            </h5>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M9.10815 11.2157C9.10815 11.2157 9.11044 11.2147 9.11433 11.2141C9.10997 11.2157 9.10815 11.2157 9.10815 11.2157Z"
                                fill="#047857"
                              />
                              <path
                                d="M9.13686 11.2157C9.13686 11.2157 9.13456 11.2147 9.13068 11.2141C9.13331 11.2151 9.136 11.2157 9.136 11.2157L9.13686 11.2157Z"
                                fill="#047857"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.83337 9.99992C1.83337 5.48959 5.48972 1.83325 10 1.83325C14.5104 1.83325 18.1667 5.48959 18.1667 9.99992C18.1667 14.5102 14.5104 18.1666 10 18.1666C5.48972 18.1666 1.83337 14.5102 1.83337 9.99992ZM14.3635 7.92721C14.6239 7.66687 14.6239 7.24476 14.3635 6.98441C14.1032 6.72406 13.6811 6.72406 13.4207 6.98441L9.82961 10.5755C9.53851 10.8666 9.3666 11.0365 9.22848 11.1419C9.17307 11.1842 9.13961 11.2029 9.1225 11.2107C9.1054 11.2029 9.07194 11.1842 9.01653 11.1419C8.87841 11.0365 8.7065 10.8666 8.4154 10.5755L7.13815 9.29825C6.8778 9.03791 6.45569 9.03791 6.19534 9.29825C5.93499 9.55861 5.93499 9.98071 6.19534 10.2411L7.50018 11.5459C7.75408 11.7999 7.98968 12.0355 8.20775 12.2019C8.44909 12.3861 8.74554 12.5469 9.1225 12.5469C9.49946 12.5469 9.79592 12.3861 10.0373 12.2019C10.2553 12.0355 10.4909 11.7999 10.7448 11.5459L14.3635 7.92721Z"
                                fill="#047857"
                              />
                            </svg>
                          </div>
                          <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                            23 May, 2024
                          </h6>
                        </div>
                      </li>
                      <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-[155px]">
                        <div className="w-full mr-1 z-10 flex flex-col items-center justify-start gap-1">
                          <div className="justify-center items-center gap-1.5 inline-flex">
                            <h5 className="text-center text-gray-900 text-lg font-medium leading-normal whitespace-nowrap">
                              Oder Shipped
                            </h5>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M9.10815 11.2157C9.10815 11.2157 9.11044 11.2147 9.11433 11.2141C9.10997 11.2157 9.10815 11.2157 9.10815 11.2157Z"
                                fill="#047857"
                              />
                              <path
                                d="M9.13686 11.2157C9.13686 11.2157 9.13456 11.2147 9.13068 11.2141C9.13331 11.2151 9.136 11.2157 9.136 11.2157L9.13686 11.2157Z"
                                fill="#047857"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.83337 9.99992C1.83337 5.48959 5.48972 1.83325 10 1.83325C14.5104 1.83325 18.1667 5.48959 18.1667 9.99992C18.1667 14.5102 14.5104 18.1666 10 18.1666C5.48972 18.1666 1.83337 14.5102 1.83337 9.99992ZM14.3635 7.92721C14.6239 7.66687 14.6239 7.24476 14.3635 6.98441C14.1032 6.72406 13.6811 6.72406 13.4207 6.98441L9.82961 10.5755C9.53851 10.8666 9.3666 11.0365 9.22848 11.1419C9.17307 11.1842 9.13961 11.2029 9.1225 11.2107C9.1054 11.2029 9.07194 11.1842 9.01653 11.1419C8.87841 11.0365 8.7065 10.8666 8.4154 10.5755L7.13815 9.29825C6.8778 9.03791 6.45569 9.03791 6.19534 9.29825C5.93499 9.55861 5.93499 9.98071 6.19534 10.2411L7.50018 11.5459C7.75408 11.7999 7.98968 12.0355 8.20775 12.2019C8.44909 12.3861 8.74554 12.5469 9.1225 12.5469C9.49946 12.5469 9.79592 12.3861 10.0373 12.2019C10.2553 12.0355 10.4909 11.7999 10.7448 11.5459L14.3635 7.92721Z"
                                fill="#047857"
                              />
                            </svg>
                          </div>
                          <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                            28 May, 2024
                          </h6>
                        </div>
                      </li>
                      <li className="group flex relative justify-start">
                        <div className="w-full z-10 flex flex-col items-center justify-start gap-1">
                          <div className="justify-center items-center gap-1.5 inline-flex">
                            <h5 className="text-center text-gray-500 text-lg font-medium leading-normal">
                              Oder Delivered
                            </h5>
                          </div>
                          <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                            2 Jun, 2024
                          </h6>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="w-full p-8 bg-white rounded-xl flex-col justify-start items-start gap-5 flex">
                  <h2 className="w-full text-gray-900 text-2xl font-semibold font-manrope leading-9 pb-5 border-b border-gray-200">
                    Order Items
                  </h2>
                  <div className="w-full flex-col justify-start items-start gap-5 flex pb-5 border-b border-gray-200">
                    <div className="w-full justify-start items-center lg:gap-8 gap-4 grid md:grid-cols-12 grid-cols-1">
                      <div className="md:col-span-8 col-span-12 w-full justify-start items-center lg:gap-5 gap-4 flex md:flex-row flex-col">
                        <img
                          className="rounded-md"
                          src="https://pagedone.io/asset/uploads/1718189222.png"
                          alt="Pure Cotton T-Shirt image"
                        />
                        <div className="w-full flex-col justify-start md:items-start items-center gap-3 inline-flex">
                          <h4 className="text-gray-900 text-xl font-medium leading-8">
                            Pure Cotton Regular Fit T-Shirt
                          </h4>
                          <div className="flex-col justify-start md:items-start items-center gap-0.5 flex">
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed whitespace-nowrap">
                              Size: M
                            </h6>
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                              Color: White
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-4 col-span-12 justify-between items-center gap-4 flex md:flex-row flex-col">
                        <h4 className="text-gray-500 text-xl font-semibold leading-8">
                          $40 x 2
                        </h4>
                        <h4 className="text-gray-900 text-xl font-semibold leading-8">
                          $80
                        </h4>
                      </div>
                    </div>
                    <div className="w-full justify-start items-center lg:gap-8 gap-4 grid md:grid-cols-12 grid-cols-1">
                      <div className="md:col-span-8 col-span-12 w-full justify-start items-center lg:gap-5 gap-4 flex md:flex-row flex-col">
                        <img
                          className="rounded-md"
                          src="https://pagedone.io/asset/uploads/1718189265.png"
                          alt="Men Stretchable Jeans image"
                        />
                        <div className="w-full flex-col justify-start md:items-start items-center gap-3 inline-flex">
                          <h4 className="text-gray-900 text-xl font-medium leading-8">
                            Men Skinny Fit Stretchable Jeans
                          </h4>
                          <div className="flex-col justify-start md:items-start items-center gap-0.5 flex">
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                              Size: 32
                            </h6>
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                              Color: Blue
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-4 col-span-12 justify-between items-center gap-4 flex md:flex-row flex-col">
                        <h4 className="text-gray-500 text-xl font-semibold leading-8">
                          $52 x 1
                        </h4>
                        <h4 className="text-gray-900 text-xl font-semibold leading-8">
                          $52
                        </h4>
                      </div>
                    </div>
                    <div className="w-full justify-start items-center lg:gap-8 gap-4 grid md:grid-cols-12 grid-cols-1">
                      <div className="md:col-span-8 col-span-12 justify-start items-center lg:gap-5 gap-4 flex md:flex-row flex-col">
                        <img
                          className="rounded-md"
                          src="https://pagedone.io/asset/uploads/1718189276.png"
                          alt="Men Cotton Casual Shirt image"
                        />
                        <div className="flex-col justify-start md:items-start items-center gap-3 inline-flex">
                          <h4 className="text-gray-900 text-xl font-medium leading-8">
                            Men Checked Cotton Casual Shirt
                          </h4>
                          <div className="flex-col justify-start md:items-start items-center gap-0.5 flex">
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                              Size: M
                            </h6>
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                              Color: Dark Blue
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-4 col-span-12 justify-between items-center gap-4 flex md:flex-row flex-col">
                        <h4 className="text-gray-500 text-xl font-semibold leading-8">
                          $22 x 1
                        </h4>
                        <h4 className="text-gray-900 text-xl font-semibold leading-8">
                          $22
                        </h4>
                      </div>
                    </div>
                    <div className="w-full justify-start items-center lg:gap-8 gap-4 grid md:grid-cols-12 grid-cols-1 pb-2.5">
                      <div className="md:col-span-8 col-span-12 justify-start items-center lg:gap-5 gap-4 flex md:flex-row flex-col">
                        <img
                          className="rounded-md"
                          src="https://pagedone.io/asset/uploads/1718189288.png"
                          alt="Men Colourblocked PU Sneakers image"
                        />
                        <div className="flex-col justify-start md:items-start items-center gap-3 inline-flex">
                          <h4 className="text-gray-900 text-xl font-medium leading-8">
                            Men Colourblocked PU Sneakers
                          </h4>
                          <div className="flex-col justify-start md:items-start items-center gap-0.5 flex">
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                              Size: 38
                            </h6>
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                              Color: Green & Gray
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-4 col-span-12 justify-between items-center gap-4 flex md:flex-row flex-col">
                        <h4 className="text-gray-500 text-xl font-semibold leading-8">
                          $56 x 1
                        </h4>
                        <h4 className="text-gray-900 text-xl font-semibold leading-8">
                          $56
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-5 flex">
                    <div className="w-full pb-1.5 flex-col justify-start items-start gap-4 flex">
                      <div className="w-full justify-between items-start gap-6 inline-flex">
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Subtotal
                        </h6>
                        <h6 className="text-right text-gray-500 text-base font-medium leading-relaxed">
                          $210.00
                        </h6>
                      </div>
                      <div className="w-full justify-between items-start gap-6 inline-flex">
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Shipping Charge
                        </h6>
                        <h6 className="text-right text-gray-500 text-base font-medium leading-relaxed">
                          $10.00
                        </h6>
                      </div>
                      <div className="w-full justify-between items-start gap-6 inline-flex">
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Tax Fee
                        </h6>
                        <h6 className="text-right text-gray-500 text-base font-medium leading-relaxed">
                          $22.00
                        </h6>
                      </div>
                    </div>
                    <div className="w-full justify-between items-start gap-6 inline-flex">
                      <h5 className="text-gray-900 text-lg font-semibold leading-relaxed">
                        Total
                      </h5>
                      <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                        $242.00
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderTracking;
