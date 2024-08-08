import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-200 bg-opacity-50 shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to={"/"}
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/wholetsLogo.png" className="h-12" alt="Wholets Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-blue-950 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to={"/about_us"} className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to={"/contact_us"} className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-blue-950 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-blue-950 sm:text-center dark:text-gray-400">
          © 2024 All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
