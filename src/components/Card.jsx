import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import RefreshError from "./RefreshError";

const Card = ({ data, error, loading }) => {
  if (loading) return <Loader />;

  if (error) return <RefreshError />;

  if (!Array.isArray(data)) {
    return (
      <p className="text-4xl pl-28 pt-14 pb-7 text-gray-300">
        No Products available
      </p>
    );
  }

  return (
    <>
      <p className="text-4xl font-bold pl-28 pt-14 pb-7 text-blue-950">
        Our Products
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-28 py-12">
        {data.map((value) => (
          <div
            key={value.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to={`/product_details/${value.id}`}>
              <div className="flex justify-center p-4">
                <div className="size-60">
                  <img
                    className="rounded-t-lg object-contain w-full h-full"
                    src={value.images}
                    alt={value.title}
                  />
                </div>
              </div>
            </Link>
            <div className="p-5 grid md:grid-rows-3">
              <Link to={`/product_details/${value.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                  {value.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                {value.description}
              </p>
              <div className="pt-6">
                <Link
                  to={`/product_details/${value.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
