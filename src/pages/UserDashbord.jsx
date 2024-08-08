import React, { useState } from "react";
import OrderHistory from "./OrderHistory";
import OrderTracking from "./OrderTracking";
import UserProfile from "../components/UserProfile";
import ProfileSettings from "../components/ProfileSettings";

const UserDashbord = () => {
  const [activeTab, setActiveTab] = useState("track_order");

  // Function to handle tab activation
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="relative pt-40 pb-24">
      <div className="w-full top-0 left-0 z-0 h-60 absolute bg-gradient-to-r from-blue-950 rounded-b-[30rem]"></div>
      <div className="w-full ml-32 px-6 md:px-8">
        <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
          <img
            src="https://pagedone.io/asset/uploads/1705471668.png"
            alt="user-avatar-image"
            className="border-4 border-solid border-white rounded-full"
          />
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
          <div className="block">
            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">
              Emma Smith
            </h3>
            <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center">
              New York, United States
            </p>
          </div>
        </div>
        <div className="flex">
          <div
            className=" flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start"
            id="sidenav-main"
          >
            <div className="pl-3 my-5">
              <div className="flex flex-col w-full font-medium">
                <div>
                  <span
                    onClick={() => handleTabClick("track_order")}
                    className={`select-none flex items-center py-[.775rem] flex-grow text-[1.15rem] px-4 cursor-pointer my-[.4rem] rounded-[.95rem] dark:text-neutral-400/75 hover:text-dark ${
                      activeTab === "track_order"
                        ? "bg-gradient-to-r from-blue-950 text-white"
                        : "hover:bg-gradient-to-r hover:from-blue-950 hover:text-white text-stone-500"
                    }`}
                  >
                    Track Order
                  </span>
                </div>

                <div>
                  <span
                    onClick={() => handleTabClick("orders")}
                    className={`select-none flex items-center py-[.775rem] flex-grow text-[1.15rem] px-4 cursor-pointer my-[.4rem] rounded-[.95rem] dark:text-neutral-400/75 hover:text-dark ${
                      activeTab === "orders"
                        ? "bg-gradient-to-r from-blue-950 text-white"
                        : "hover:bg-gradient-to-r hover:from-blue-950 hover:text-white text-stone-500"
                    }`}
                  >
                    Orders History
                  </span>
                </div>

                <div>
                  <span
                    onClick={() => handleTabClick("profile")}
                    className={`select-none flex items-center py-[.775rem] flex-grow text-[1.15rem] px-4 cursor-pointer my-[.4rem] rounded-[.95rem] dark:text-neutral-400/75 hover:text-dark ${
                      activeTab === "profile"
                        ? "bg-gradient-to-r from-blue-950 text-white"
                        : "hover:bg-gradient-to-r hover:from-blue-950 hover:text-white text-stone-500"
                    }`}
                  >
                    Profile
                  </span>
                </div>

                <div>
                <span
                    onClick={() => handleTabClick("settings")}
                    className={`select-none flex items-center py-[.775rem] flex-grow text-[1.15rem] px-4 cursor-pointer my-[.4rem] rounded-[.95rem] dark:text-neutral-400/75 hover:text-dark ${
                      activeTab === "settings"
                        ? "bg-gradient-to-r from-blue-950 text-white"
                        : "hover:bg-gradient-to-r hover:from-blue-950 hover:text-white text-stone-500"
                    }`}
                  >
                      Account Settings
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            id="Order_History"
            className={`transition-all duration-300 ease-in-out w-2/3 ${
              activeTab === "orders" ? "block" : "hidden"
            }`}
          >
            <OrderHistory />
          </div>
          <div
            id="Order_History"
            className={`transition-all duration-300 ease-in-out w-2/3 ${
              activeTab === "track_order" ? "block" : "hidden"
            }`}
          >
            <OrderTracking />
          </div>
          <div
            id="Order_History"
            className={`transition-all duration-300 ease-in-out w-2/3 ${
              activeTab === "profile" ? "block" : "hidden"
            }`}
          >
            <UserProfile />
          </div>
          <div
            id="Order_History"
            className={`transition-all duration-300 ease-in-out w-2/3 ${
              activeTab === "settings" ? "block" : "hidden"
            }`}
          >
            <ProfileSettings />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashbord;
