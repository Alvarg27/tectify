import React from "react";

export default function Iphone({ children }) {
  return (
    <div className="border-gray-800 h-[600px] border-[15px] rounded-[50px] w-[300px] mx-auto  relative my-10 flex flex-col transition duration-300 overflow-hidden shadow-lg ">
      <div className="w-[140px] h-[25px] bg-gray-800 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-[20px]"></div>
      {children}
    </div>
  );
}
