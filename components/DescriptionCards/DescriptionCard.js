import React from "react";

import Image from "next/image";
import { RiCheckLine } from "react-icons/ri";
import Button from "components/commons/Button";

const DescriptionCard = ({ className, large, children, label, listItems }) => {
  return (
    <div
      className={`w-full md:w-1/3 relative md:my-0 my-2 bg-white dark:bg-neutral-900 rounded-xl shadow-xl pb-8 drop-shadow flex flex-col justify-between items-center transition duration-300 hover:scale-105 ${className}`}
    >
      <div
        className={`absolute left-1/2 -translate-x-1/2 -top-12 ${
          large ? "block" : "md:block hidden"
        }`}
      >
        {children}
      </div>
      <div>
        <div className="w-full h-full  absolute top-0 left-0 flex items-center justify-center">
          <div
            className={`w-1/2 aspect-square rounded-full blur-3xl opacity-30 ${
              large ? " bg-blue-500" : " bg-indigo-500"
            }`}
          ></div>
        </div>
        <p
          className={` font-medium text-center dark:text-white ${
            large ? "text-3xl" : "text-xl"
          }`}
        >
          {label}
        </p>
        <div>
          {listItems.map((x, i) => (
            <div
              key={i}
              className={`flex w-full mt-4 items-center text-gray-300  ${
                large ? "text-xl" : "text-md"
              }`}
            >
              <RiCheckLine className="mr-2" />
              <p className="">{x.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-6">
        <Button className="bg-blue-700 text-white">Descubre como</Button>
      </div>
    </div>
  );
};

export default DescriptionCard;
