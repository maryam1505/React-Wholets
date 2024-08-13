import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  
  // Destructure state with fallback defaults
  const { 
    selectedProduct, 
    shipping = "N/A", 
    price = 0, 
    quantity = 0, 
    code = "No Promo Code attached", 
    image = "", 
    title = "", 
    source 
  } = state || {};

  // Determine data based on the source
  let orderSummary;
  let imageURL;
  if (source === 'direct') {
    // Handle data from the product detail page
    orderSummary = {
      ...selectedProduct,
    };
    imageURL = orderSummary.images[0];
    
  } else if (source === 'cart') {
    // Handle data from the shopping cart
    orderSummary = {
      shipping,
      price,
      quantity,
      code,
      image,
      title
    };
    imageURL = orderSummary.image;
  }

  
  const countries = ["China", "Russia", "UK", "Pakistan"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const handleCountryChange = (country) => {
    setMenu(false);
    setCountry(country);     
  };

  const generateOrderId = () => {
    return `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const handleSubmit = () => {
    const orderId = generateOrderId();
    navigate('/confirmation', {
      state: {
        orderId: orderId,
        price: orderSummary.price,
        image: orderSummary.image,
        quantity: orderSummary.quantity,
        title: orderSummary.title,
      }
    });
  }
 

  /* Appling Validation */
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    cardNumber: Yup.string()
      .matches(/^[0-9\s]{13,19}$/, "Invalid card number")
      .required("Required"),
    expiryDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date (MM/YY)")
      .required("Required"),
    cvc: Yup.string()
      .matches(/^[0-9]{3,4}$/, "Invalid CVC")
      .required("Required"),
    nameOnCard: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    zip: Yup.string()
      .matches(/^\d{5}$/, "Invalid ZIP code")
      .required("Required"),
  });

  return (
    <div className="flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-blue-900">
              Checkout
            </p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
              <div className="flex flex-col justify-start items-start w-full space-y-4">
                <p className="text-xl md:text-2xl font-semibold leading-normal text-gray-800">
                  {orderSummary.title}
                </p>
                <p className="text-base font-semibold leading-none text-gray-600">
                  ${orderSummary.price}
                </p>
              </div>
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                <div className="size-96">
                  <img
                    src={imageURL}
                    alt={orderSummary.title}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              </div>
            </div>

            {/* Form with validation using Formik and Yup */}
            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
              <Formik
                initialValues={{
                  email: "",
                  cardNumber: "",
                  expiryDate: "",
                  cvc: "",
                  nameOnCard: "",
                  country: country,
                  zip: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit} 
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="mb-2">
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={`border p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600 ${
                          errors.email && touched.email
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <label className="my-8 text-base leading-4 text-gray-400">
                      Card details
                    </label>
                    <div className="mt-2 flex-col">
                      <div>
                        <Field
                          name="cardNumber"
                          type="text"
                          placeholder="0000 1234 6549 15151"
                          className={`border rounded-tl rounded-tr p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 ${
                            errors.cardNumber && touched.cardNumber
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        <ErrorMessage
                          name="cardNumber"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex-row flex mb-2">
                        <Field
                          name="expiryDate"
                          type="text"
                          placeholder="MM/YY"
                          className={`border rounded-bl p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 ${
                            errors.expiryDate && touched.expiryDate
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        <ErrorMessage
                          name="expiryDate"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                        <Field
                          name="cvc"
                          type="text"
                          placeholder="CVC"
                          className={`border rounded-br p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 ${
                            errors.cvc && touched.cvc
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        <ErrorMessage
                          name="cvc"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <label className="mt-8 text-base leading-4 text-gray-400">
                      Name on card
                    </label>
                    <div className="my-2 flex-col">
                      <div>
                        <Field
                          name="nameOnCard"
                          type="text"
                          placeholder="Name on card"
                          className={`border rounded p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 ${
                            errors.nameOnCard && touched.nameOnCard
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        <ErrorMessage
                          name="nameOnCard"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <label className="mt-8 text-base leading-4 text-gray-400">
                      Country or region
                    </label>
                    <div className="mt-2 flex-col">
                      <div className="relative">
                        <button
                          type="button"
                          className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                          onClick={() => setMenu(!menu)}
                        >
                          {country}
                        </button>
                        <svg
                          className={`transform cursor-pointer absolute top-4 right-4 ${
                            menu ? "rotate-180" : ""
                          }`}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 5.75L8 10.25L12.5 5.75"
                            stroke="#27272A"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div
                          className={`mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 ${
                            menu ? "block" : "hidden"
                          }`}
                        >
                          {countries.map((c) => (
                            <div
                              key={c}
                              className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                              onClick={() => handleCountryChange(c)}
                            >
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Field
                        name="zip"
                        type="text"
                        placeholder="ZIP"
                        className={`border rounded-bl rounded-br p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 ${
                          errors.zip && touched.zip
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      <ErrorMessage
                        name="zip"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                      <button
                        type="submit"
                        className="mt-8 border border-transparent hover:border-gray-300 bg-blue-950 hover:bg-white text-white hover:text-blue-900 flex justify-center items-center py-4 rounded w-full"
                      >
                        <div>
                          <p className="text-base leading-4">Pay ${orderSummary.price}</p>
                        </div>
                      </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
