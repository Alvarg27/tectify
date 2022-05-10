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
    "Para empresas establecidas que buscan vender sus productos a tavés de canales digitales",
  price: "$30,000",
  frequency: "Pago único",
  features: [
    "Hosting en netlify",
    "Diseño de UX",
    "Página de inicio",
    "Página de contacto",
    "Página de about",
    "Página de producto",
    "Página de categoría de producto",
    "Página de checkout",
    "Página de agradecimiento",
    "Productos ilimitados",
    "2% de comisión por venta",
    "Pagos con tarjetas de débito y crédito a través de stripe",
    "Variantes de producto",
  ],
  color: "bg-blue-500",
};

export default function ECommerce() {
  const { ref, inView } = useInView();
  return (
    <div className="py-20 relative z-20 flex flex-col">
      <div className="m-auto flex flex-col">
        <h1 className="bg-clip-text text-transparent text-6xl font-bold mx-auto mb-4 text-center py-2  bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] lg:text-8xl">
          E commerce
        </h1>
        <h2 className="text-2xl text-center text-gray-500 mb-4 px-6">
          Haz crecer tus ventas implementando tu tienda online, de esta manera
          podrás llegar a millones de personas.
        </h2>
        <p className="text-center text-gray-400 px-6">
          NASDAQ estima que para el año 2040 el 95% de todas las compras se
          realizarán a través del comercio electrónico.
        </p>
      </div>

      <Iphone>
        <Image
          layout="fill"
          src="/e-commerce.webp"
          alt="e-commerce"
          placeholder="blur"
          blurDataURL="/e-commerce-blur.webp"
          className="w-[120%] mt- object-cover"
        />
      </Iphone>
      <h2 className="text-4xl font-bold mb-6 text-center lg: px-10  ">
        ¿Por qué es importante contar con un sitio de E commerce?
      </h2>
      <div className="flex flex-col mb-6 px-6">
        <div ref={ref} className="mx-auto my-6 ">
          <Counter finalNumber={23} unit="%" inView={inView} />
          <p className="text-center ">
            crece la industria del comerio electrónico cada año.
          </p>
        </div>
        <div className="mx-auto  my-6 ">
          <Counter finalNumber={93} unit="%" inView={inView} />
          <p className="text-center ">
            de los usuarios de Internet a nivel mundial han comprado productos
            en línea.
          </p>
        </div>
        <div className="mx-auto  my-6 ">
          <Counter finalNumber={27} unit="%" inView={inView} />
          <p className="text-center ">
            de la población mundial compra de manera online.
          </p>
        </div>
      </div>
      <h2 className="text-5xl font-bold mb-6 text-center lg: px-10  ">
        Precios
      </h2>

      <div className="flex flex-wrap mb-10">
        <PriceCard plan={proPlan} />
      </div>

      <h2 className="text-5xl font-bold mb-6 text-center lg: px-10 ">
        Resolvemos tus dudas
      </h2>
      <FaqCard
        question="¿De qué manera están construidad las páginas web?"
        answer="Nuestras páginas web están programadas desde cero en React, Tailwind y Next js. A diferencia de otros que utilizan creadores de páginas, limitando las posibilidades del clientes. "
      />
      <FaqCard
        question="¿Cómo la comisión del 2%?"
        answer="La comisión del 2% es el cargo de servicio de la plataforma de comercio electronico implementada en el backend (commercejs.com o swell.is), el cobro se realiza directamente a una tarjeta de crédtio ó débito de manera mensual en base al total de las ordenes completadas."
      />
      <FaqCard
        question="¿Dónde recibo los pagos de mis clientes?"
        answer="Todas las transacciónes son llevadas acabo por Stripe, quien sera el encargado de transferir diariamente el dinero generado a una cuenta báncaria de tu elección."
      />
      <FaqCard
        question="¿Cuál es la comisión de Stripe?"
        answer="La comision es de 3.6% + $3 MXN, similar a cualquier terminal bancaria."
      />
      <FaqCard
        question="¿Cómo puedo modificar mi tienda en linea?"
        answer="Tu tienda cuenta con un panel administrativo fácil de operar donde podrás añadir y editar productos, revisar estado de ordenes y concretarlas, así como cientos de funciones más."
      />
      <FaqCard
        question="¿Las páginas web estan diseñadas para teléfono?"
        answer="En tectify nos aseguramos de que todas nuestras páginas web se adapten a todos los tamaños de pantalla, ya sea telefono, tableta o computadora. Garantizando así la mejor experiencia de usuario."
      />
      <FaqCard
        question="¿Ustedes suben los productos?"
        answer="No, nosotros solo subimos algunos produtos para probar el funcionamiento, sin embargo entregamos un manual explicando claramente como realizar este procedimiento"
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
      <FaqCard
        question="¿Qué tan rápidas son sus páginas web?"
        answer="El tiempo total de carga de nuestras páginas web suele ser de menos de un segundo."
      />
      <FaqCard
        question="¿Qué tan seguras son sus páginas web?"
        answer="Son expremadamente seguras debido a su arquitectura moderna desacoplada."
      />
    </div>
  );
}
