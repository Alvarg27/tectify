import React from "react";
import { FaLock } from "react-icons/fa";

export default function Security() {
  return (
    <div className="px-4 py-12 flex flex-col">
      <FaLock className="text-blue-700 m-auto text-5xl font-bold" />
      <h2 className="text-5xl font-bold mb-6 text-center ">
        Protegemos tu información y la de tus usuarios
      </h2>
      <h2 className="text-3xl mb-6 text-center text-gray-500">
        Diseñamos protocolos de seguridad robustos para proteger un informacion
        y la de tus usuarios antes de que sea demasiado tarde
      </h2>

      <h2 className=" mb-6 text-center text-gray-500">
        Cada día son hackeados al rededor de 30,000 sitios web.
      </h2>
      <h2 className=" mb-6 text-center text-gray-500">
        Los costos de robo de datos globales fueron de USD 4,24 millones de
        dolares en 2021
      </h2>
      <h2 className=" mb-6 text-center text-gray-500">
        WordPress representó alrededor del 90% de los sitios web hackeados en
        2018.
      </h2>
    </div>
  );
}
