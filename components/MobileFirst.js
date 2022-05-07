import React from "react";
import Iphone from "./Iphone";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Counter from "./Counter";

export default function MobileFirst({}) {
  const { ref, inView } = useInView();
  return (
    <div className="flex flex-col py-20 relative bg-white overflow-hidden">
      <FaUser className="text-red-400 m-auto text-5xl font-bold" />
      <h2 className="text-5xl font-bold mb-6 text-center lg: px-10">
        Prioridad al usuario móvil
      </h2>
      <h2 className="text-3xl mb-6 text-center px-4 text-gray-500 lg:px-10">
        Desarrollamos sitios web que <b>adaptan</b> la experiencia de usuario a
        los <b>distintos tamaños de pantalla</b> que existen.
      </h2>
      <div
        style={{
          transform: `rotate(${inView ? 0 : 90}deg)`,
          transition: ".5s",
        }}
      >
        <Iphone>
          <div
            ref={ref}
            className="m-auto h-full py-20 flex flex-col bg-gradient-to-tl from-[#a6c0fe] to-[#f68084]"
          >
            <h3 className="text-gray-100 text-xl  mb-6  text-center ">
              Porcentaje de <b>usuarios web por tipo de dispositivo</b> en 2020
            </h3>
            <div className="m-auto">
              <Counter
                finalNumber={68}
                unit="%"
                inView={inView}
                styles={"text-gray-100 text-6xl font-bold text-center"}
              />
              <h3 className="text-gray-100  text-xl font-bold mb-6 text-center ">
                Móvil
              </h3>
            </div>
            <div className="m-auto">
              <Counter
                finalNumber={29}
                unit="%"
                inView={inView}
                styles={"text-gray-100 text-6xl font-bold text-center"}
              />
              <h3 className="text-gray-100  text-xl font-bold mb-6 text-center ">
                Escritorio
              </h3>
            </div>
            <div className="m-auto">
              <Counter
                finalNumber={3}
                unit="%"
                inView={inView}
                styles={"text-gray-100 text-6xl font-bold text-center"}
              />
              <h3 className="text-gray-100  text-xl font-bold mb-6 text-center ">
                Tablet
              </h3>
            </div>
          </div>
        </Iphone>
      </div>
    </div>
  );
}
