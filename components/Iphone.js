import React from "react";

export default function Iphone({ children }) {
  return (
    <div className="bg-gray-200 h-[620px] rounded-[50px] w-[300px] mx-auto  relative my-10 flex flex-col transition duration-300 shadow-[inset_0px_0px_10px_rgba(0,0,0,.2),0px_0px_30px_rgba(0,0,0,.3)] ">
      <div className="bg-white h-[590px] rounded-[40px] w-[270px] mx-auto my-auto relative flex flex-col transition duration-300 overflow-hidden">
        {children}
        <div className="w-[140px] h-[25px] bg-gray-200 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-[20px] z-10"></div>
      </div>
    </div>
  );
}
