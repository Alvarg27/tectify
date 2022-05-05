import React from "react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function FaqCard({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="p-6 bg-gray-100 rounded-xl mx-6 my-2 transition duration-300 cursor-pointer"
    >
      <div className="flex relative ">
        <h3 className="">{question}</h3>
        <FaAngleDown
          className="transition duration-300 top-1 absolute right-0 text-gray-400"
          style={{
            opacity: open ? 0 : 1,
            transform: `translateY(${open ? 50 : 0}%)`,
          }}
        />
        <FaAngleUp
          className="transition duration-300 top-1 absolute right-0 text-gray-400"
          style={{
            opacity: open ? 1 : 0,
            transform: `translateY(${open ? 0 : -50}%)`,
          }}
        />
      </div>
      {open ? <p className="text-gray-400 mt-4 animate-fade">{answer}</p> : ""}
    </div>
  );
}
