import Link from "next/link";
import React from "react";
import FaqCard from "../components/FaqCard";
import Iphone from "../components/Iphone";
import PriceCard from "../components/PriceCard";
import Image from "next/image";

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

export default function website() {
  return (
    <div className="py-20 relative z-20">
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
      <h2 className="text-5xl font-bold mb-6 text-center lg: px-10 ">
        Precios
      </h2>
      <div className="flex flex-wrap ">
        <PriceCard plan={litePlan} />
        <PriceCard
          plan={proPlan}
          features={["Hosting en netlify", "Diseño de UX", "Página de inicio"]}
        />
        <PriceCard
          plan={proMaxPlan}
          features={["Hosting en netlify", "Diseño de UX", "Página de inicio"]}
        />
      </div>
      <FaqCard />
    </div>
  );
}
