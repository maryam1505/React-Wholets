import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  country: Yup.string().required("Country is required"),
  streetAddress: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  region: Yup.string().required("State / Province is required"),
  postalCode: Yup.string().required("ZIP / Postal code is required"),
});

const UserProfile = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      streetAddress: "",
      city: "",
      region: "",
      postalCode: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <section className="flex justify-center items-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="col-span-full flex justify-center items-center">
              <div className="mt-2 flex items-center gap-y-3 flex-col">
                <UserCircleIcon
                  aria-hidden="true"
                  className="w-28 h-28 text-gray-300"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>
          </div>

          <div className="pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive orders.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/** Form Fields **/}
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      formik.touched.firstName && formik.errors.firstName
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.firstName}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      formik.touched.lastName && formik.errors.lastName
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.lastName}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ${
                      formik.touched.country && formik.errors.country
                        ? "border-red-500"
                        : ""
                    }`}
                  >
                    <option value="" label="Select a country" />
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                  {formik.touched.country && formik.errors.country ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.country}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    id="streetAddress"
                    name="streetAddress"
                    type="text"
                    autoComplete="street-address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.streetAddress}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      formik.touched.streetAddress &&
                      formik.errors.streetAddress
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.streetAddress &&
                  formik.errors.streetAddress ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.streetAddress}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      formik.touched.city && formik.errors.city
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <p className="text-sm text-red-500">{formik.errors.city}</p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    id="region"
                    name="region"
                    type="text"
                    autoComplete="address-level1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.region}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      formik.touched.region && formik.errors.region
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.region && formik.errors.region ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.region}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    autoComplete="postal-code"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.postalCode}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      formik.touched.postalCode && formik.errors.postalCode
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.postalCode && formik.errors.postalCode ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.postalCode}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => formik.resetForm()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UserProfile;
