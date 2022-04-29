import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Landing page",
      description: "Página estática informativa, de alta velocidad.",
    },
    {
      id: 2,
      title: "Pagina Web",
      description: "Sitio web profesional para todo tipo de industrias.",
    },
    {
      id: 3,
      title: "E-commerce",
      description: "Soluciones de comercio electrónico integrales.",
    },
    {
      id: 4,
      title: "Menú de restaurante",
      description: "Menú interactivo, rápido y facil de editar.",
    },
    {
      id: 5,
      title: "Administrador de reservaciones",
      description:
        "Gestiona y organiza tus reservaciones de manera automatizada.",
    },
    {
      id: 6,
      title: "Aplicaciones mobiles",
      description: "Aplicaciones mobiles especializadas a tus necesidades.",
    },
    {
      id: 7,
      title: "Desarrolo de backend",
      description:
        "Backend y servidores avanzados para resolver todo tipo de necesidades.",
    },
    {
      id: 8,
      title: "Data science",
      description:
        "Diseño de estructuras de datos y análisis estadistico de información.",
    },
  ];
  return (
    <div className="white">
      <div className="mt-20 px-4">
        <h2 className="text-6xl font-bold mb-6 text-center">
          Conoce nuestros servicios...
        </h2>
        <p className="text-gray-500 text-center">
          Ofrecemos servicos que se adaptan a las necesidades de las diferentes
          instituciones e industrias.
        </p>
        <div className="flex flex-col mt-10">
          {services.map((service) => {
            return <ServiceCard key={service.id} service={service} />;
          })}
        </div>
      </div>
    </div>
  );
}
