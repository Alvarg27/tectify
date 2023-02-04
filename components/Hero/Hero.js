import useWindowDimensions from "hooks/useWindowDimensions";
import React from "react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const { height } = useWindowDimensions();
  return (
    <section
      style={{ maxHeight: height, minHeight: height }}
      className="w-full  flex flex-col relative"
    >
      <HeroBackground />

      <div className="m-auto lg:max-w-[700px] md:max-w-[380px] relative">
        <h2 className="bg-clip-text text-transparent text-5xl font-bold m-auto text-center py-2  bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] lg:text-[70px]">
          Soluciones tecnológicas para el futuro
        </h2>
        <p className="text-center mt-10 mx-auto text-gray-500 px-6 ">
          <b>tectify</b> busca impulsar la transición tecnológica de las
          empresas e instituciones con el objetivo de de optimizar sus procesos
          administrativos, logísticos y operativos. Logrando así mantenerlas
          competitivas y eficientes en la era digital.
        </p>
      </div>
    </section>
  );
}
