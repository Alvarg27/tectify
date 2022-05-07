import React from "react";
import { FaLock } from "react-icons/fa";

export default function Security() {
  return (
    <div className="px-4 py-12 flex flex-col relative bg-white">
      <FaLock className="text-blue-700 m-auto text-5xl font-bold" />
      <h2 className="text-5xl font-bold mb-6 text-center lg:px-10">
        Más seguridad que nunca
      </h2>
      <h2 className="text-3xl mb-6 text-center text-gray-500 lg:px-10">
        <b>Protegemos tu información y la de tus usuarios</b>, antes de que sea
        demasiado tarde.
      </h2>

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
    </div>
  );
}
