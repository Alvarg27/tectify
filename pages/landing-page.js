import React from "react";

export default function LandingPage() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden lg:px-10">
      <div className="m-auto flex flex-col">
        <h1 className="bg-clip-text text-transparent text-6xl font-bold m-auto text-center py-2  bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] lg:text-8xl">
          Landing page
        </h1>
        <h2 className="text-3xl mb-6 text-center text-gray-500 lg: px-10">
          Páginas independientes de alta veloidad diseñadas para atraer
          clientes.
        </h2>
        <button className="bg-blue-700 h-12 rounded-md my-10 mx-auto w-40 text-white transition duration-300 hover:bg-blue-900">
          Contactar
        </button>
      </div>
    </div>
  );
}
