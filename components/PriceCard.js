import React from "react";
import { FaCheck } from "react-icons/fa";
export default function PriceCard({ plan }) {
  return (
    <div className="w-[90%] mx-auto lg:w-1/3">
      <div
        className={`${plan.color}  p-10 my-5 mx-auto rounded-xl text-white shadow-lg  lg:mx-2`}
      >
        <p className="mb-3 text-2xl">{plan.title}</p>
        <div className="flex">
          <h2 className="text-4xl font-bold my-auto">{plan.price}</h2>
          <p className="my-auto mx-2">/{plan.frequency}</p>
        </div>
        <p className="my-6">{plan.description}</p>
        <ul>
          {plan.features.map((item) => (
            <li className="flex my-2">
              <FaCheck className="mx-0 my-auto" />
              <p className="mx-2 my-auto">{item}</p>
            </li>
          ))}
        </ul>
        <button className="bg-white h-12 rounded-md my-10 mx-auto w-[100%] text-blue-700 transition duration-300 hover:bg-gray-200">
          Contactar
        </button>
      </div>
    </div>
  );
}
