import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Checkout = () => {
  const countries = ["China", "Russia", "UK", "Pakistan"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

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
                <p className="text-xl md:text-2xl leading-normal text-gray-800">
                  Logitech K251
                </p>
                <p className="text-base font-semibold leading-none text-gray-600">
                  $520.00
                </p>
              </div>
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                <img
                  src="https://i.ibb.co/0GFzTP4/Rectangle-131.png"
                  alt="headphones"
                />
              </div>
            </div>

            {/* Form with validation using Formik and Yup */}
            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
              <button className="border border-transparent hover:border-gray-300 bg-blue-950 hover:bg-white text-white hover:text-blue-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                <div>
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-base leading-4">Pay</p>
                </div>
              </button>
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
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ setFieldValue, errors, touched }) => (
                  <Form>
                    {" "}
                    <div className="flex flex-row justify-center items-center mt-6">
                      <hr className="border w-full" />
                      <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">
                        or pay with card
                      </p>
                      <hr className="border w-full" />
                    </div>
                    <div className="mt-8">
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
                    <label className="mt-8 text-base leading-4 text-gray-800">
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
                      <div className="flex-row flex">
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
                    <label className="mt-8 text-base leading-4 text-gray-800">
                      Name on card
                    </label>
                    <div className="mt-2 flex-col">
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
                    <label className="mt-8 text-base leading-4 text-gray-800">
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
                    <Link to={"/confirmation"}>
                      <button
                        type="submit"
                        className="mt-8 border border-transparent hover:border-gray-300 bg-blue-950 hover:bg-white text-white hover:text-blue-900 flex justify-center items-center py-4 rounded w-full"
                      >
                        <div>
                          <p className="text-base leading-4">Pay $54652</p>
                        </div>
                      </button>
                    </Link>
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
