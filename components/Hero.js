import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[600px] flex flex-col px-4 ">
      <div className="m-auto flex flex-col">
        <h2 className="text-6xl font-bold m-auto text-center">
          Soluciones tecnológicas para el futuro
        </h2>
        <button className="bg-blue-700 h-12 rounded-md my-10 mx-auto w-40 text-white transition duration-300 hover:bg-blue-900">
          Contactar
        </button>
      </div>
    </div>
  );
}
