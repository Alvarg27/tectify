import React from "react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function FaqCard({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="p-6 bg-gray-100 rounded-xl mx-6 my-2  cursor-pointer "
    >
      <div className="flex relative text-lg ">
        <h3 className="mr-[20px]">{question}</h3>
        <FaAngleDown
          className="transition duration-300 top-1 absolute right-0 text-gray-400"
          style={{
            opacity: open ? 0 : 1,
            transform: `translateY(${open ? 100 : 0}%)`,
          }}
        />
        <FaAngleUp
          className="transition duration-300 top-1 absolute right-0 text-gray-400"
          style={{
            opacity: open ? 1 : 0,
            transform: `translateY(${open ? 0 : -100}%)`,
          }}
        />
      </div>
      <p
        style={{
          opacity: open ? "1" : "0",
          maxHeight: open ? "150px" : "0px",
          transition: ".3s",
          paddingTop: open ? "10px" : 0,
        }}
        className="text-gray-400 animate-fade overflow-hidden"
      >
        {answer}
      </p>
    </div>
  );
}
