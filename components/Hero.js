import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden  ">
      <div className="m-auto flex flex-col">
        <h2 className="bg-clip-text text-transparent text-6xl font-bold m-auto text-center py-2  bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] lg:text-8xl">
          Soluciones tecnológicas para el futuro
        </h2>
        <p className="text-center mt-10 mx-auto text-gray-500 px-6 lg:w-3/4">
          <b>tectify</b> busca impulsar la transición tecnológica de las
          empresas e instituciones con el objetivo de de optimizar sus procesos
          administrativos, logísticos y operativos. Logrando así mantenerlas
          competitivas y eficientes en la era digital.
        </p>
      </div>
    </div>
  );
}
