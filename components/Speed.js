import React from "react";
import { FaBolt } from "react-icons/fa";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import CircularProgress from "./CircularProgress";

export default function Speed() {
  const { ref, inView } = useInView();
  console.log(inView);
  return (
    <div className="px-4 py-12 flex flex-col relative bg-white">
      <FaBolt className="text-yellow-400 m-auto text-5xl font-bold" />
      <h2 className="text-5xl font-bold mb-6 text-center lg: px-10 ">
        Sitios web ultrarrápidos
      </h2>
      <h2 className="text-3xl mb-6 text-center text-gray-500 lg: px-10">
        Vuelve tu página hasta <b>400% más rápida.</b>
      </h2>
      <div ref={ref}>
        <CircularProgress inView={inView} />
      </div>
      <Link href="https://pagespeed.web.dev/report?url=https%3A%2F%2Ftectify.io%2F&form_factor=desktop">
        <a target="_blank" className="mx-auto">
          <button className="bg-blue-700 h-12 rounded-md my-10 mx-auto px-8 text-white transition duration-300 hover:bg-blue-900">
            Probar esta página
          </button>
        </a>
      </Link>
      <h2 className=" mb-6 text-center text-gray-500">
        Walmart descubrió que <b>mejorar el tiempo de carga </b> de la página
        por
        <b> un segundo aumentó las conversiones en un 2%.</b>
      </h2>
      <h2 className=" mb-6 text-center text-gray-500">
        AutoAnything experimentó un <b>aumento del 12-13 % en las ventas </b>
        después de <b>reducir a la mitad el tiempo de carga</b> de la página.
      </h2>
      <h2 className=" mb-6 text-center text-gray-500">
        Mobify descubrió que la
        <b>
          {" "}
          reducción del tiempo de carga de su página de inicio por 0.1 segundos
        </b>{" "}
        resultó en un <b>aumento del 1,11 % en la conversión</b> basada en
        sesiones.
      </h2>
    </div>
  );
}
