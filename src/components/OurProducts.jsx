import React from "react";
import { Link } from "react-router-dom";

const OurProducts = () => {
  return (
    <section class="py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <h2 class="font-manrope font-bold text-4xl text-blue-950 mb-8 max-lg:text-center">
            Our Products
          </h2>
          <div>
            <Link
              to={`/products`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-900 rounded-lg hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href="javascript:;"
            class="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
          >
            <div class="">
              <img
                src="https://pagedone.io/asset/uploads/1700726158.png"
                alt="face cream image"
                class="w-full aspect-square rounded-2xl"
              />
            </div>
            <div class="mt-5">
              <div class="flex items-center justify-between">
                <h6 class="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                  Face cream
                </h6>
                <h6 class="font-semibold text-xl leading-8 text-indigo-600">
                  $100
                </h6>
              </div>
              <p class="mt-2 font-normal text-sm leading-6 text-gray-500">
                Orange & Aloe Vera
              </p>
            </div>
          </a>

          <a
            href="javascript:;"
            class="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
          >
            <div class="">
              <img
                src="https://pagedone.io/asset/uploads/1700726174.png"
                alt="plastic bottle image"
                class="w-full aspect-square rounded-2xl"
              />
            </div>
            <div class="mt-5">
              <div class="flex items-center justify-between">
                <h6 class="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                  Plstic bottle
                </h6>
                <h6 class="font-semibold text-xl leading-8 text-indigo-600">
                  $40
                </h6>
              </div>
              <p class="mt-2 font-normal text-sm leading-6 text-gray-500">
                Black color
              </p>
            </div>
          </a>

          <a
            href="javascript:;"
            class="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
          >
            <div class="">
              <img
                src="https://pagedone.io/asset/uploads/1700726191.png"
                alt="cream image"
                class="w-full aspect-square rounded-2xl"
              />
            </div>
            <div class="mt-5">
              <div class="flex items-center justify-between">
                <h6 class="font-semibold text-xl leading-8 text-black  transition-all duration-500 group-hover:text-indigo-600">
                  Men cream
                </h6>
                <h6 class="font-semibold text-xl leading-8 text-indigo-600">
                  $100
                </h6>
              </div>
              <p class="mt-2 font-normal text-sm leading-6 text-gray-500">
                Aloe Vera and Neem
              </p>
            </div>
          </a>

          <a
            href="javascript:;"
            class="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
          >
            <div class="">
              <img
                src="https://pagedone.io/asset/uploads/1700726207.png"
                alt="perfume bottle image"
                class="w-full aspect-square rounded-2xl"
              />
            </div>
            <div class="mt-5">
              <div class="flex items-center justify-between">
                <h6 class="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                  Cold Perfume
                </h6>
                <h6 class="font-semibold text-xl leading-8 text-indigo-600">
                  $100
                </h6>
              </div>
              <p class="mt-2 font-normal text-sm leading-6 text-gray-500">
                White perfume
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
