import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselHeader = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
  };
  const clipPathStyle = {
    clipPath:
      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
  };
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd446] to-[#ffcd6f] opacity-20"
              style={clipPathStyle}
            ></div>
          </div>
          <div className="flex">
            <div className="m-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-6xl tracking-wide font-bold font-mono line-h text-white sm:text-6xl capitalize">
                  Shop Till you drop, <br />
                  we won't stop
                </h2>
                <p className="my-6 text-lg leading-8 text-yellow-400 font-mono">
                  Your ultimate destination for premium products at unbeatable
                  prices! Discover a curated selection of the latest trends in
                  fashion, electronics, home goods, and more.
                </p>
                <Link to={"/products"}>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <img
              src="./images/graphic-1.png"
              alt="online Shoping Graphic"
              className="ml-auto hidden lg:block"
            />
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd446] to-[#ffcd6f] opacity-20"
              style={clipPathStyle}
            ></div>
          </div>
          <div className="flex">
            <div className="m-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-6xl tracking-wide font-bold font-mono line-h text-white sm:text-6xl capitalize">
                  Shop Till you drop, Drop
                  <br />
                  we won't stop
                </h2>
                <p className="my-6 text-lg leading-8 text-yellow-400 font-mono">
                  Your ultimate destination for premium products at unbeatable
                  prices! Discover a curated selection
                </p>
                <Link to={"/products"}>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <img
              src="./images/graphic-1.png"
              alt="online Shoping Graphic"
              className="ml-auto hidden lg:block"
            />
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd446] to-[#ffcd6f] opacity-20"
              style={clipPathStyle}
            ></div>
          </div>
          <div className="flex">
            <div className="m-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-6xl tracking-wide font-bold font-mono line-h text-white sm:text-6xl capitalize">
                  Shop Till you <br />
                  we won't stop
                </h2>
                <p className="my-6 text-lg leading-8 text-yellow-400 font-mono">
                  Your ultimate destination for premium products at unbeatable
                  prices! Discover a curated selection of the latest trends
                </p>
                <Link to={"/products"}>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <img
              src="./images/graphic-1.png"
              alt="online Shoping Graphic"
              className="ml-auto hidden lg:block"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselHeader;
