import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <div className="m-auto flex flex-col">
        <h2 className="bg-clip-text text-transparent text-6xl font-bold m-auto text-center bg-gradient-to-tl from-[#a6c0fe] to-[#f68084]">
          Soluciones tecnológicas para el futuro
        </h2>
        <p className="text-center mt-10 text-gray-500 px-8">
          <b>tectify</b> busca impulsar la transición tecnológica de las
          empresas e instituciones con el objetivo de de optimizar sus procesos
          administrativos, logísticos y operativos. Logrando así mantenerlas
          competitivas y eficientes en la era digital.
        </p>
        <button className="bg-blue-700 h-12 rounded-md my-10 mx-auto w-40 text-white transition duration-300 hover:bg-blue-900">
          Contactar
        </button>
      </div>
    </div>
  );
}
