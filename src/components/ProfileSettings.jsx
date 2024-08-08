import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    oldPassword: Yup.string()
    .required('Old password is required'),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const ProfileSettings = () => {
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="oldPassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Old Password
        </label>
        <input
          type="password"
          id="oldPassword"
          name="oldPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.oldPassword}
          className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${
            formik.touched.oldPassword && formik.errors.oldPassword
              ? "border-red-500"
              : ""
          }`}
          placeholder="************"
        />
        {formik.touched.oldPassword && formik.errors.oldPassword ? (
          <p className="text-sm text-red-500">{formik.errors.oldPassword}</p>
        ) : null}
      </div>

      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          New Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="************"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${
            formik.touched.password && formik.errors.password
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-sm text-red-500">{formik.errors.password}</p>
        ) : null}
      </div>

      <div className="mb-5">
        <label
          htmlFor="repeatPassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          placeholder="************"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
          className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${
            formik.touched.repeatPassword && formik.errors.repeatPassword
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <p className="text-sm text-red-500">{formik.errors.repeatPassword}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update Password
      </button>
    </form>
  );
};

export default ProfileSettings;
