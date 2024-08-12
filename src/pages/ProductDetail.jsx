import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../features/products/productSlice";
import { Helmet } from "react-helmet";
import RelatedProducts from "../components/RelatedProducts";
import { featureData } from "../features/products/FeatureSlice";
import Loader from "../components/Loader";
import RefreshError from "../components/RefreshError";
import IncrementDecrement from "../components/IncementDecrement";
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.productData
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  /* Fetching Other Products */
  const dataDispatch = useDispatch();
  const { data, dataLoading, dataError } = useSelector(
    (state) => state.featureData
  );
  useEffect(() => {
    dataDispatch(featureData());
  }, [dataDispatch]);

  /* Add to cart logic starts here */
  const [value, setValue] = useState(1);

  const increment = () => setValue(prevValue => prevValue + 1);
  const decrement = () => setValue(prevValue => (prevValue > 1 ? prevValue - 1 : 1));
  const handleChange = (newValue) => setValue(newValue);
  
  const navigate = useNavigate();
  

  const addToCart = () => {
    navigate('/shopping_cart', {
      state: {
       selectedProduct,
        id,
        quantity: value
      }
    });
  };


  if (loading) return <Loader />;

  if (error) return <RefreshError />;

  return (
    <>
      <Helmet>
        <title>
          Wholets :: Product Details - {selectedProduct?.title || "Loading..."}
        </title>
      </Helmet>
      {selectedProduct ? (
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <div className="size-96">
                  <img
                    className="w-full dark:hidden h-full object-contain"
                    src={selectedProduct.images}
                    alt={selectedProduct.title}
                  />
                  <img
                    className="w-full hidden dark:block h-full object-contain"
                    src={selectedProduct.images}
                    alt={selectedProduct.title}
                  />
                </div>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold text-blue-900 sm:text-2xl dark:text-white">
                    {selectedProduct.title}
                  </h1>
                  <button className="group transition-all duration-500 p-0.5">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100"
                        cx="30"
                        cy="30"
                        r="30"
                        fill=""
                      />
                      <path
                        className="stroke-blue-950 transition-all duration-500 group-hover:stroke-blue-950"
                        d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
                        stroke=""
                        strokeWidth="1.6"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                    ${selectedProduct.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                      ({selectedProduct.rating})
                    </p>
                    <a
                      href="#"
                      className="text-sm font-medium leading-none text-gray-900 hover:underline dark:text-white"
                    >
                      {selectedProduct.reviews
                        ? selectedProduct.reviews.length
                        : 0}{" "}
                      Reviews
                    </a>
                  </div>
                </div>
                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                <p className="mb-6 text-gray-500 dark:text-gray-400">
                  {selectedProduct.description}
                </p>
                <div className="my-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <IncrementDecrement
                    value={value}
                    onChange={handleChange}
                    onIncrement={increment}
                    onDecrement={decrement}
                  />
                  <div className="w-full">
                    <a
                      onClick={addToCart}
                      title=""
                      role="button"
                    >
                      <button className="group py-3 px-5 rounded-full bg-indigo-50 text-blue-900 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-100">
                        <svg
                          className="stroke-blue-900 transition-all duration-500 group-hover:stroke-blue-900"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </a>
                  </div>
                </div>
                <button className="text-center w-full px-5 py-3 rounded-[100px] bg-blue-950 flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-blue-900 hover:shadow-indigo-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>No product details available</p>
      )}
      <p className="text-4xl font-bold pl-28 pt-14 pb-7 text-blue-950">
        Related Products
      </p>
      <RelatedProducts data={data} loading={dataLoading} error={dataError} />
    </>
  );
};

export default ProductDetail;
