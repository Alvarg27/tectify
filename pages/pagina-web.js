import Link from "next/link";
import React from "react";
import Iphone from "../components/Iphone";
import PriceCard from "../components/PriceCard";

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
        <h2 className="text-2xl mb-6 text-center text-gray-500 lg: px-10">
          Una landing page, o página de aterrizaje, es una página web diseñada
          específicamente para convertir visitantes en leads.
        </h2>
      </div>

      <Iphone>
        <img src="/grupo-farma.webp" className="w-[120%] mt- object-cover" />
      </Iphone>

      <h2 className=" mb-6 text-center text-gray-500 ">
        <b>Cada día son hackeados</b> alrededor de <b>30,000 sitios</b> web.
      </h2>
      <h2 className=" mb-6 text-center text-gray-500">
        <b>La ciberdelincuencia costará</b> al mundo{" "}
        <b>$10,5 trillones de dolares</b> anuales para 2025.
      </h2>
      <h2 className=" mb-6 text-center text-gray-500">
        <b>WordPress representó</b> alrededor del{" "}
        <b>90% de los sitios web hackeados</b> en 2018.
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
    </div>
  );
}
