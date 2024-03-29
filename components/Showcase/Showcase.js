import React, { useRef, useState } from "react";
import ShowcaseCard from "./ShowcaseCard";
const Showcase = () => {
  const containerRef = useRef(null);
  return (
    <section className="max-w-[1200px] mx-auto relative my-10 w-[90%]">
      <div className="max-w-[600px] mb-4 mx-auto text-center">
        <p className="text-center text-5xl font-bold dark:text-white">
          Showcase
        </p>
        <p className="text-gray-500">
          We’re honored some of the most successful business and institutions
          are powered by tectify.
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex flex-col md:flex-row relative w-full "
      >
        <div className="md:w-2/3">
          <ShowcaseCard
            image={item1}
            title="Trópica"
            url="https://tropica.mx"
          />
          <ShowcaseCard
            image={item4}
            title="Secretaría de Turismo Municipio de Querétaro"
          />
        </div>
        <div className="md:w-1/3">
          <ShowcaseCard
            image={item2}
            title="Secretaría de Turismo Municipio de Querétaro"
          />
          <ShowcaseCard
            image={item3}
            title="The Power of People"
            url="https://thepowerofpeople.co/"
          />
          <ShowcaseCard
            image="https://cdn.tectify.io/tectify-web/showcase/ave-showcase"
            title="Ave"
            url="https://ave.tectify.app"
          />
          <ShowcaseCard
            image={item5}
            title="Grupo Farma"
            url="https://grupofarmafr.com/"
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex flex-col md:flex-row relative w-full "
      >
        <ShowcaseCard image={item7} title="Luca experiences" />
        <ShowcaseCard
          image={item8}
          title="Casa Antonella"
          url="https://casantonella.tectify.io/"
        />
        <ShowcaseCard
          image={item9}
          title="Grupo Sirilo"
          url="https://gruposirilo.tectify.io/"
        />
      </div>
    </section>
  );
};

export default Showcase;
