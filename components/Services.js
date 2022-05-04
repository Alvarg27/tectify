import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services({ offsetY }) {
  const services = [
    {
      id: 2,
      title: "Pagina Web",
      description: "Sitio web profesional para todo tipo de industrias.",
      icon: "FaLayerGroup",
      link: "/pagina-web",
    },
    {
      id: 3,
      title: "E-commerce",
      description: "Soluciones de comercio electrónico integrales.",
      icon: "FaShoppingCart",
    },
    {
      id: 4,
      title: "Menú de restaurante",
      description: "Menú interactivo, rápido y facil de editar.",
      icon: "FaUtensils",
    },
    {
      id: 5,
      title: "Administrador de reservaciones",
      description:
        "Gestiona y organiza tus reservaciones de manera automatizada.",
      icon: "FaCalendarAlt",
    },
    {
      id: 6,
      title: "Aplicaciones móviles",
      description: "Aplicaciones mobiles especializadas a tus necesidades.",
      icon: "FaMobileAlt",
    },
    {
      id: 7,
      title: "Aplicaciones web",
      description:
        "Backend y servidores avanzados para resolver todo tipo de necesidades.",
      icon: "FaServer",
    },
    {
      id: 8,
      title: "Data science",
      description:
        "Diseño de estructuras de datos y análisis estadistico de información.",
      icon: "FaDatabase",
    },
  ];
  return (
    <div className="bg-blue-700 relative z-10">
      <div className="bg-white px-4 py-20 rounded-t-3xl">
        <h2 className="text-5xl font-bold mb-6 text-center">
          Conoce nuestros servicios...
        </h2>
        <p className="text-gray-500 text-center">
          Ofrecemos servicos que se adaptan a las necesidades de las diferentes
          instituciones e industrias.
        </p>
        <div className="flex  mt-10 flex-wrap w-full">
          {services.map((service) => {
            return <ServiceCard key={service.id} service={service} />;
          })}
        </div>
      </div>
    </div>
  );
}
