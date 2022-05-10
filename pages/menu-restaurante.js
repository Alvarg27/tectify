import Link from "next/link";
import React from "react";
import FaqCard from "../components/FaqCard";
import Iphone from "../components/Iphone";
import PriceCard from "../components/PriceCard";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Counter from "../components/Counter";

const proPlan = {
  title: "Pro",
  description:
    "Para restaurantes que buscan mejorar la experiencia de sus clientes. Además de un menú rápido y fácil de modificar.",
  price: "$7,000",
  frequency: "Pago único",
  features: [
    "Hosting en netlify",
    "Diseño de UX",
    "Panel de administrador en Sanity para editar contenido",
    "Categorías ilimitadas",
    "Subcategorías ilimitadas",
    "Productos ilimitados",
    "Imagenes de platillo",
    "Etiquetas de producto",
    "Multi-lenguaje",
    "Código QR",
  ],
  color: "bg-blue-500",
};

export default function RestaurantMenu() {
  const { ref, inView } = useInView();
  return (
    <div className="py-20 relative z-20 flex flex-col">
      <div className="m-auto flex flex-col">
        <h1 className="bg-clip-text text-transparent text-6xl font-bold mx-auto mb-4 text-center py-2  bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] lg:text-8xl">
          Menú de restaurante
        </h1>
        <h2 className="text-2xl text-center text-gray-500 mb-4 px-6">
          Lleva tu restaurante al siguiente nivel con un menú digitál
          profesional.
        </h2>
      </div>

      <div className="relative z-10 m-auto">
        <Iphone>
          <Image
            layout="fill"
            src="/casantonella-web.webp"
            alt="pagina-web"
            placeholder="blur"
            blurDataURL="/casantonella-web-blur.webp"
            className="w-[120%] mt- object-cover"
          />
        </Iphone>
      </div>

      <div className="my-20">
        <h2 className="text-4xl font-bold text-center  mb-4 px-10">
          Panel administrador personalizado y muy fácil de editar.
        </h2>
        <p className="text-center text-gray-400 px-6 mb-10">
          Únete a la nueva era y crea tu menú digital. Con un panel de
          administrador donde podrás añadir o modificar platillos de la manera
          más fácil y rápida posible.
        </p>
        <div className="rounded-lg overflow-hidden shadow-xl w-[90%] m-auto lg:w-[50%]">
          <img src="/administrador-menu.webp" />
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-6 text-center  px-10  ">
        ¿Por qué es importante con un un menú de restaurante digital?
      </h2>
      <div className="flex flex-col mb-6 px-6">
        <div ref={ref} className="mx-auto my-6 ">
          <Counter finalNumber={31} unit="%" inView={inView} />
          <p className="text-center ">
            de los restaurantes actualizan su menú mensualmente, 24% lo hace por
            temporada.
          </p>
        </div>
        <div className="mx-auto  my-6 ">
          <Counter finalNumber={73} unit="%" inView={inView} />
          <p className="text-center ">
            de los comensales está de acuerdo en que la tecnología de los
            restaurantes mejora la experiencia de sus huéspedes.
          </p>
        </div>
        <div className="mx-auto  my-6 ">
          <Counter finalNumber={95} unit="%" inView={inView} />
          <p className="text-center ">
            de los restauranteros está de acuerdo en que la tecnología de los
            restaurantes mejora la eficiencia de su negocio.
          </p>
        </div>
      </div>
      <h2 className="text-5xl font-bold mb-6 text-center lg: px-10  ">
        Precio
      </h2>

      <div className="flex flex-wrap mb-10">
        <PriceCard plan={proPlan} />
      </div>

      <h2 className="text-5xl font-bold mb-6 text-center lg: px-10 ">
        Resolvemos tus dudas
      </h2>

      <FaqCard
        question="¿Qué es hosting?"
        answer="Hosting es el servicio de alojamiento de la página web, tectify aloja todas sus paginas web en Netlify, uno de los provedores más estables, seguros y rápidos que existen en el mundo."
      />
      <FaqCard
        question="¿El precio incluye el dominio?"
        answer="No incluimos el dominio en el precio, ya que consideramos que todos los clientes deben ser dueños de su domino y no nosotros, sin embargo podemos acesorarlos en el proceso de compra de este, los precios varian desde $220 a $1080 al año dependiendo de la disponibilidad y la terminación."
      />
      <FaqCard
        question="¿Qué es el dominio?"
        answer="El domnio es el nombre por el cual tus clientes podran encontrar tu sitio web en los buscadores, por ejemplo: www.tectify.io"
      />
      <FaqCard
        question="¿Qué es diseño de UX?"
        answer="Es el diseño de experiencia de usuario, que implica el diseño gráfico y funcional del sitio. Una excelente experiencia de usuario que se adapte a los diferentes tipos de pantallas mejorará drasticamente las tasas de conversión de tus clientes."
      />

      <FaqCard
        question="¿Qué tan rápidas son sus menús digitales?"
        answer="El tiempo total de carga de nuestras páginas web suele ser de menos de un segundo."
      />
    </div>
  );
}
