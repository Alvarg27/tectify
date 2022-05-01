import { useRouter } from "next/router";
import React from "react";
import {
  FaUtensils,
  FaShoppingCart,
  FaCalendarAlt,
  FaDatabase,
  FaServer,
  FaLayerGroup,
  FaMobile,
  FaColumns,
  FaStore,
} from "react-icons/fa";

export default function ServiceCard({ service }) {
  const router = useRouter();
  const renderIcon = () => {
    if (service.icon === "FaShoppingCart") {
      return <FaShoppingCart className="my-auto xm-0 text-red-400 text-2xl" />;
    } else if (service.icon === "FaUtensils") {
      return <FaUtensils className="my-auto xm-0 text-cyan-900 text-2xl" />;
    } else if (service.icon === "FaCalendarAlt") {
      return <FaCalendarAlt className="my-auto xm-0 text-green-400 text-2xl" />;
    } else if (service.icon === "FaDatabase") {
      return <FaDatabase className="my-auto xm-0 text-yellow-400 text-2xl" />;
    } else if (service.icon === "FaServer") {
      return <FaServer className="my-auto xm-0 text-purple-900 text-2xl" />;
    } else if (service.icon === "FaLayerGroup") {
      return <FaLayerGroup className="my-auto xm-0 text-purple-400 text-2xl" />;
    } else if (service.icon === "FaMobileAlt") {
      return <FaMobile className="my-auto xm-0 text-indigo-400 text-2xl" />;
    } else if (service.icon === "FaColumns") {
      return <FaColumns className="my-auto xm-0 text-blue-700 text-2xl" />;
    }
  };
  return (
    <div>
      <div className="rounded-lg shadow-lg mx-1 my-4 bg-white p-4 h-[180px] flex flex-col">
        <div className="my-auto">
          <div className="flex justify-between my-auto">
            <h3 className="font-bold">{service.title}</h3>
            {renderIcon()}
          </div>
          <div className="my-auto">
            <p className="mr-8">{service.description}</p>
            <p
              onClick={() => router.push(service.link)}
              className="text-blue-700 mt-1 font-bold cursor-pointer"
            >
              Ver más
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
