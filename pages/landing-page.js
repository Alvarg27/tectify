import Link from "next/link";
import React from "react";
import Iphone from "../components/Iphone";

export default function LandingPage() {
  return (
    <div className="py-20">
      <div className="m-auto flex flex-col">
        <h1 className="bg-clip-text text-transparent text-6xl font-bold m-auto text-center py-2  bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] lg:text-8xl">
          Landing page
        </h1>
        <h2 className="text-2xl mb-6 text-center text-gray-500 lg: px-10">
          Una landing page, o página de aterrizaje, es una página web diseñada
          específicamente para convertir visitantes en leads.
        </h2>
      </div>
      <Link href="https://qsmsemiconductores.com">
        <a target="_blank">
          <Iphone>
            <img
              src="/landing-page.webp"
              className="cursor-pointer w-[120%] mt- object-cover"
            />
          </Iphone>
        </a>
      </Link>
      <h2 className=" mb-6 text-center text-gray-500 ">
        <b>Cada día son hackeados</b> alrededor de <b>30,000 sitios</b> web.
      </h2>
      <h2 className=" mb-6 text-center text-gray-500">
        <b>La ciberdelincuencia costará</b> al mundo{" "}
        <b>$10,5 trillones de dolares</b> anuales para 2025.
      </h2>
      <h2 className=" mb-6 text-center text-gray-500">
        <b>WordPress representó</b> alrededor del{" "}
        <b>90% de los sitios web hackeados</b> en 2018.
      </h2>
      <div className="bg-blue-700 w-[90%] h-[60px] m-auto rounded-xl">
        <p>Lite</p>
        <div>
          <h2>$10,000</h2>
        </div>
      </div>
    </div>
  );
}
