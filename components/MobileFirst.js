import React from "react";
import Iphone from "./Iphone";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

export default function MobileFirst() {
  return (
    <div className="flex flex-col py-20">
      <FaUser className="text-red-400 m-auto text-5xl font-bold" />
      <h2 className="text-5xl font-bold mb-6 text-center ">
        Prioridad al usuario móvil
      </h2>
      <h2 className="text-3xl mb-6 text-center px-4 text-gray-500">
        Desarrollamos sitios web que <b>adaptan</b> la experiencia de usuario a
        los <b>diferentes tamaños de pantallas</b> que existen.
      </h2>
      <Iphone>
        <div className="m-auto flex flex-col">
          <h3 className="text-gray-500 text-xl  mb-6  text-center ">
            Porcentaje de <b>usuarios web por tipo de dispositivo</b> en 2020
          </h3>
          <div className="m-auto">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] text-6xl font-bold text-center ">
              68%
            </h2>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] text-xl font-bold mb-6 text-center ">
              Móvil
            </h3>
          </div>
          <div className="m-auto">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] text-5xl font-bold text-center ">
              29%
            </h2>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] text-xl font-bold mb-6 text-center ">
              Escritorio
            </h3>
          </div>
          <div className="m-auto">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] text-4xl font-bold text-center ">
              3%
            </h2>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] text-xl font-bold text-center ">
              Tablet
            </h3>
          </div>
          <Link href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fwhimsical-mermaid-ea9d22.netlify.app%2F&form_factor=desktop">
            <a target="_blank" className="m-auto">
              <button className="bg-blue-700 h-12 rounded-md my-10 mx-auto px-8 text-white transition duration-300 hover:bg-blue-900">
                Ver más
              </button>
            </a>
          </Link>
        </div>
      </Iphone>
    </div>
  );
}
