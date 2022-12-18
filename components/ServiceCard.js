import { useRouter } from "next/router";
import React, { useState } from "react";
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
  FaArrowRight,
  FaCloud,
} from "react-icons/fa";

export default function ServiceCard({ service }) {
  const [isHover, setIsHover] = useState(false);
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
    } else if (service.icon === "FaCloud") {
      return <FaCloud className="my-auto xm-0 text-blue-500 text-2xl" />;
    }
  };
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className="w-full lg:w-[25%]"
    >
      <div className="rounded-lg shadow-lg mx-1 my-4 bg-white px-4  py-6 flex flex-col  lg:h-[200px] justify-center">
        <div className="my-auto flex flex-col justify-between h-full">
          <div className="my-0">
            <div className="flex justify-between my-0">
              <h3 className="font-bold text-lg">{service.title}</h3>
              {renderIcon()}
            </div>

            <p className="mr-8">{service.description}</p>
          </div>
          {false && (
            <div className="flex my-0">
              <p className="text-blue-700 font-bold cursor-pointer my-auto mr-2 w-auto">
                Ver más
              </p>
              <FaArrowRight
                className="my-auto  text-blue-700 transition duration-300"
                style={{
                  opacity: isHover ? 1 : 0,
                  transform: `translateX(${isHover ? 0 : -40}%)`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
