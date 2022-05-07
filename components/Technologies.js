import React from "react";
import TechnologyCard from "./TechnologyCard";

export default function technologies() {
  const technologies = [
    {
      id: 1,
      title: "React",
      image: "/react-logo.webp",
      description: "Reinventa la experiencia de usuario.",
      website: "https://reactjs.org/",
    },
    {
      id: 2,
      title: "Next",
      image: "/next-logo.webp",
      description: "Acelera la carga de tu página web.",
      website: "https://nextjs.org/",
    },
    {
      id: 3,
      title: "Tailwind",
      image: "/tailwind-logo.webp",
      description: "Diseño de paginas web inovador.",
      website: "https://tailwindcss.com/",
    },
    {
      id: 5,
      title: "Sanity",
      image: "/sanity-logo.webp",
      description: "Panel de administrador fácil de editar.",
      website: "https://www.sanity.io/",
    },
    {
      id: 4,
      title: "Node",
      image: "/node-logo.webp",
      description: "Contola la lógica de negocios.",
      website: "https://nodejs.dev/",
    },
    {
      id: 5,
      title: "MongoDB",
      image: "/mongo-logo.webp",
      description: "Almacena tus bases de datos.",
      website: "https://www.mongodb.com/",
    },
    {
      id: 6,
      title: "Digital Ocean",
      image: "/digital-ocean-logo.webp",
      description: "Despliega tus aplicaciones de forma eficaz.",
      website: "https://www.digitalocean.com/",
    },
    {
      id: 7,
      title: "Netlify",
      image: "/netlify-logo.webp",
      description: "Despliega tu front-end con la tecnología más rápida.",
      website: "https://www.netlify.com/",
    },
    {
      id: 8,
      title: "Twilio",
      image: "/twilio-logo.webp",
      description: "Automatiza tu comunicación.",
      website: "https://www.netlify.com/",
    },
  ];
  return (
    <div className="px-4 py-12 flex flex-col relative bg-white">
      <h2 className="text-5xl font-bold mb-6 text-center lg: px-10">
        Somos los mejores en lo que hacemos.
      </h2>

      <h2 className="text-3xl mb-6 text-center text-gray-500">
        Dile adiós a Wordpress y <b>reinventa tu empresa</b> con las tecnologías
        más modernas desarrolladas a tu medida.
      </h2>
      <div className="h-[180px]  flex overflow-x-auto my-auto no-scrollbar lg:mx-auto">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
}
