import Link from "next/link";
import React from "react";
import FaqCard from "../components/FaqCard";
import Iphone from "../components/Iphone";
import PriceCard from "../components/PriceCard";
import Image from "next/image";
import { useState } from "react";

const litePlan = {
  title: "Lite",
  description: "Para empresas que bucan hacer su lanzamiento web",
  price: "$13,000",
  frequency: "Pago único",
  features: ["Hosting en netlify", "Diseño de UX", "Página de inicio"],
  color: "bg-blue-300",
};

const proPlan = {
  title: "Pro",
  description: "Para empresas establesidas que buscan un sitio web completo",
  price: "$16,000",
  frequency: "Pago único",
  features: [
    "Hosting en netlify",
    "Diseño de UX",
    "Página de inicio",
    "Página de contacto",
    "Página de about",
  ],
  color: "bg-blue-500",
};

const proMaxPlan = {
  title: "Pro Max",
  description: "Para empresas establesidas que buscan un sitio web extenso",
  price: "$20,000",
  frequency: "Pago único",
  features: [
    "Hosting en netlify",
    "Diseño de UX",
    "Página de inicio",
    "Página de contacto",
    "Página de about",
    "Página de servicios",
    "Página informativa",
  ],
  color: "bg-blue-700",
};

const litePlanD = {
  title: "Lite Dinámico",
  description:
    "Para empresas que bucan hacer su lanzamiento web y requieren cambion constantes en su contenido.",
  price: "$13,000",
  frequency: "Pago único",
  features: [
    "Hosting en netlify",
    "Diseño de UX",
    "Panel de administrador en Sanity para editar contenido",
    "Página de inicio",
  ],
  color: "bg-blue-300",
};

const proPlanD = {
  title: "Pro Dinámica",
  description:
    "Para empresas establesidas que buscan un sitio web completo y requieren cambion constantes en su contenido.",
  price: "$16,000",
  frequency: "Pago único",
  features: [
    "Hosting en netlify",
    "Diseño de UX",
    "Panel de administrador en Sanity para editar contenido",
    "Página de inicio",
    "Página de contacto",
    "Página de about",
  ],
  color: "bg-blue-500",
};

const proMaxPlanD = {
  title: "Pro Max Dinámica",
  description:
    "Para empresas establesidas que buscan un sitio web extenso y requieren cambion constantes en su contenido.",
  price: "$20,000",
  frequency: "Pago único",
  features: [
    "Hosting en netlify",
    "Diseño de UX",
    "Panel de administrador en Sanity para editar contenido",
    "Página de inicio",
    "Página de contacto",
    "Página de about",
    "Página de servicios",
    "Página informativa",
  ],
  color: "bg-blue-700",
};

export default function Website() {
  const [dynamic, setDynamic] = useState(false);
  return (
    <div className="py-20 relative z-20 flex flex-col">
      <div className="m-auto flex flex-col">
        <h1 className="bg-clip-text text-transparent text-6xl font-bold m-auto text-center py-2  bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] lg:text-8xl">
          Página web
        </h1>
        <h2 className="text-2xl text-center text-gray-500 lg: px-10">
          Lleva tu empresa al siguiente nivel con una página web moderna, rápida
          y eficaz.
        </h2>
        <p className="text-center text-gray-400">
          En 2010, había más de 2 mil millones de usuarios de Internet en todo
          el mundo. En 2021, había más de 4.6 mil millones.
        </p>
      </div>

      <Iphone>
        <Image
          layout="fill"
          src="/grupo-farma.webp"
          alt="pagina-web"
          placeholder="blur"
          blurDataURL="/grupo-farma-blur.webp"
          className="w-[120%] mt- object-cover"
        />
      </Iphone>
      <div className="flex flex-col mb-6 px-6">
        <div className="mx-auto my-6 ">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] text-6xl font-bold text-center ">
            75%
          </h2>
          <p className="text-center ">
            de los usuarios admite emitir juicios sobre la credibilidad de una
            empresa en función del diseño de su sitio web.
          </p>
        </div>
        <div className="mx-auto  my-6 ">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] text-6xl font-bold text-center ">
            85%
          </h2>
          <p className="text-center ">
            de los clientes B2B buscan en la web antes de tomar una decisión de
            compra
          </p>
        </div>
        <div className="mx-auto my-6 ">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] text-6xl font-bold text-center ">
            0.05s
          </h2>
          <p className="text-center ">
            tardan los usuarios en formar una opinión sobre su sitio web.
          </p>
        </div>
      </div>
      <h2 className="text-5xl font-bold mb-6 text-center lg: px-10  ">
        Precios
      </h2>
      <div className="flex mx-auto w-[90%]  overflow-hidden rounded-lg bg-gray-100 cursor-pointer h-[50px] relative">
        <div
          onClick={() => setDynamic(false)}
          className="w-1/2 flex relative z-10"
        >
          <p
            style={{
              color: dynamic ? "" : "white",
            }}
            className="m-auto"
          >
            Página estática
          </p>
        </div>
        <div
          onClick={() => setDynamic(true)}
          className="w-1/2 flex relative z-10"
        >
          <p
            style={{
              color: dynamic ? "white" : "",
            }}
            className="m-auto"
          >
            Página estática
          </p>
        </div>
        <div
          style={{ left: dynamic ? "50%" : 0, transition: "0.3s" }}
          className="w-1/2 h-full bg-blue-700 absolute z-0 rounded-lg"
        ></div>
      </div>
      {dynamic ? (
        <div className="flex flex-wrap mb-10">
          <PriceCard plan={litePlanD} />
          <PriceCard plan={proPlanD} />
          <PriceCard plan={proMaxPlanD} />
        </div>
      ) : (
        <div className="flex flex-wrap mb-10">
          <PriceCard plan={litePlan} />
          <PriceCard plan={proPlan} />
          <PriceCard plan={proMaxPlan} />
        </div>
      )}
      <h2 className="text-5xl font-bold mb-6 text-center lg: px-10 ">
        Resolvemos tus dudas
      </h2>
      <FaqCard
        question="¿Qué es una página web dinámica?"
        answer="Es una página donde el contenido de texto o imágenes puede cambiar
          segun las necesidades de la empresa, a traves de un panel de
          admistración facil de manipular construido en Sanity. Es útil para empresas que constantemente requieren cambios en su contenido"
      />
      <FaqCard
        question="¿Qué es una página web estática?"
        answer="Es una página dónde el contenido es añadido directamente en el código y no puede ser manipulado a través de un panel administrativo. Es útil para empresas que no suelen cambiar su contenido constantemente"
      />
      <FaqCard
        question="¿Es fácil editar una página dinámica?"
        answer="Nuestras páginas dinámicas tienen un panel de administrador diseñado a tu medida con Sanity. A diferencia de WordPress este panel al ser programado para tu empresa solo contiene lo que necesitas, por lo que la experiencia de usuario es muy fácil y cualquiera puede editar el contenido."
      />
      <FaqCard
        question="¿Qué es hosting?"
        answer="Hosting es el servicio de alojamiento de la página web, tectify aloja todas sus paginas web en Netlify, uno de los provedores más estables, seguros y rápidos que existen en el mundo."
      />
      <FaqCard
        question="¿Qué es el dominio?"
        answer="El domnio es el nombre por el cual tus clientes podran encontrar tu sitio web en los buscadores, por ejemplo: www.tectify.io"
      />
      <FaqCard
        question="¿El precio incluye el dominio?"
        answer="No incluimos el dominio en el precio, ya que consideramos que todos los clientes deben ser dueños de su domino y no nosotros, sin embargo podemos acesorarlos en el proceso de compra de este, los precios varian desde $220 a $1080 al año dependiendo de la disponibilidad y la terminación."
      />
      <FaqCard
        question="¿Qué es diseño de UX?"
        answer="Es el diseño de experiencia de usuario, que implica el diseño gráfico y funcional del sitio. Una excelente experiencia de usuario que se adapte a los diferentes tipos de pantallas mejorará drasticamente las tasas de conversión de tus clientes."
      />
      <FaqCard
        question="Si mi empresa no requiere alguna de las páginas del paquete ¿Puedo interambiarla?"
        answer="Sí, puedes cambiar cualquier página del paquete por una página personalizada."
      />
      <FaqCard
        question="¿Qué es una página personalizada?"
        answer="Una página personalizada es una pagina diseñada para cumplir las necesidades especificas de tu empresa, el precio puede cambiar según las funciones requeridas o extensión."
      />
    </div>
  );
}
