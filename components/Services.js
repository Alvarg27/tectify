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
    <div className="bg-blue-200">
      <div className="flex flex-col">
        {services.map((service) => {
          return <ServiceCard key={service.key} service={service} />;
        })}
      </div>
    </div>
  );
}
