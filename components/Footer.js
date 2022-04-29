import React from "react";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="w-full bg-blue-700  flex flex-col rounded-t-3xl ">
      <h2 className="text-white font-bold text-4xl mx-auto my-4">tectify</h2>
      <div className="text-white text-2xl flex mx-auto">
        <FaInstagram className="m-auto mx-4  my-4" />
        <FaEnvelope className="m-auto mx-4 my-4" />
        <FaWhatsapp className="m-auto mx-4 my-4" />
      </div>
      <p className="mx-auto text-white my-2 text-sm">
        {" "}
        © Copyright {year}, tectify
      </p>
    </div>
  );
}
