import React from "react";
import { FaLock } from "react-icons/fa";

export default function Security() {
  return (
    <div className="px-4 py-12 flex flex-col">
      <FaLock className="text-blue-700 m-auto text-5xl font-bold" />
      <h2 className="text-5xl font-bold mb-6 text-center ">
        Más seguridad que nunca
      </h2>
      <h2 className="text-3xl mb-6 text-center text-gray-500">
        Diseñamos protocolos de seguridad robustos para{" "}
        <b>proteger tu información</b> y la de tus usuarios,{" "}
        <b>antes de que sea demasiado tarde.</b>
      </h2>

      <h2 className=" mb-6 text-center text-gray-500">
        <b>Cada día son hackeados</b> al rededor de <b>30,000 sitios</b> web.
      </h2>
      <h2 className=" mb-6 text-center text-gray-500">
        <b>Los costos de robo de datos</b> globales fueron de{" "}
        <b>4,24 millones de dolares</b> en 2021.
      </h2>
      <h2 className=" mb-6 text-center text-gray-500">
        <b>WordPress representó</b> alrededor del{" "}
        <b>90% de los sitios web hackeados</b> en 2018.
      </h2>
    </div>
  );
}
