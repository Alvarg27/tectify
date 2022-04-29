import React from "react";

export default function Header() {
  return (
    <div className="bg-white h-20 flex justify-between px-4 drop-shadow-md">
      <p className="text-blue-700 text-4xl font-bold mx-0 my-auto">tectify</p>
      <ul className="flex mx-0 my-auto">
        <li className="mx-3 hover:text-blue-700 transition duration-300 cursor-pointer">
          Servicios
        </li>
        <li className="mx-3 hover:text-blue-700 transition duration-300 cursor-pointer">
          Precios
        </li>
        <li className="mx-3 hover:text-blue-700 transition duration-300 cursor-pointer">
          Contacto
        </li>
      </ul>
    </div>
  );
}
