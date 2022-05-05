import React from "react";

export default function TextSection({ offsetY }) {
  return (
    <div
      className="w-full h-[600px] m bg-blue-700 rounded-t-3xl flex px-4 transition duration-300 z-0  sticky top-[90px] lg:h-[400px]"
      style={{
        transform: `translateY(${offsetY < 100 ? 100 : 0}%)`,
      }}
    >
      <div className="m-auto  text-center">
        <h2 className="text-white text-5xl font-bold mb-6">
          ¡Haciendo posible
          <br /> lo imposible!
        </h2>
        <h3 className="text-white text-2xl">
          Tú decides cómo hacer crecer tu empresa, <b>tectify</b> lo vuelve
          realidad
        </h3>
      </div>
    </div>
  );
}
