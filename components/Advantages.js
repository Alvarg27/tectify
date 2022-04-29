import React from "react";
import TechnologyCard from "./TechnologyCard";

export default function Advantages() {
  const technologies = [
    {
      id: 1,
      title: "React",
      image: "/react-logo.webp",
      description: "Reinventa la experiencia de usuario",
    },
    {
      id: 2,
      title: "Next",
      image: "/next-logo.webp",
      description: "Acelera la carga de tu página web",
    },
    {
      id: 3,
      title: "Tailwind",
      image: "/tailwind-logo.webp",
      description: "Diseño de paginas web inovador",
    },
    {
      id: 4,
      title: "Node",
      image: "/node-logo.webp",
      description: "Contola la lógica de negocios",
    },
  ];
  return (
    <div className="px-4 flex flex-col">
      <h2 className="text-5xl font-bold mb-6 text-center">
        Somos los mejores en lo que hacemos.
      </h2>

      <h2 className="text-3xl font-bold mb-6 text-center">
        Dile adios a wordpress y reinventa tu empresa con las tecnologías más
        modernas desarrolladas a tu medida.
      </h2>
      <div className="flex m-auto overflow-x-scroll">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
}
