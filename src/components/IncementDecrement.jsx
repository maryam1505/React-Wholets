import React from 'react';

const IncrementDecrement = ({ value, onChange, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center justify-center border border-gray-400 rounded-full">
      {/* Decrement Button */}
      <button
        className="group py-[14px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300"
        onClick={onDecrement}
      >
        <svg
          className="stroke-black group-hover:stroke-black"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 11H5.5"
            stroke=""
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="font-semibold text-gray-900 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-900 text-center hover:text-indigo-600 outline-0 hover:placeholder:text-indigo-600 border border-transparent"
        placeholder="1"
      />

      {/* Increment Button */}
      <button
        className="group py-[14px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300"
        onClick={onIncrement}
      >
        <svg
          className="stroke-black group-hover:stroke-black"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 5.5V16.5M16.5 11H5.5"
            stroke="#9CA3AF"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default IncrementDecrement;
