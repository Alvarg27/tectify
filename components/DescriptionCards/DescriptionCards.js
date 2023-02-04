import React from "react";
import DescriptionCard from "./DescriptionCard";
import image1 from "public/dashboard2.webp";
import code2 from "public/code2.webp";
import tropica1 from "public/tropica2.webp";
import commerce from "public/commerce.webp";
import Image from "next/image";
import whatsapp from "public/whatsapp.webp";
const DescriptionCards = () => {
  return (
    <div className="max-w-[1000px] w-[90%] m-auto relative  py-10 md:h-[600px]">
      <div className="w-full">
        <DescriptionCard
          large
          className="md:!absolute  top-0 left-1/2 -translate-x-1/2 z-[1] md:!w-[40%] h-[450px]  px-8 pt-24"
          label="Eficientar procesos operativos"
          listItems={[
            { label: "Aumento de productividad" },
            { label: "Reducción de costos" },
            { label: "Organización interna" },
          ]}
        >
          <div className="w-[250px] relative z-[2] mr-4 drop-shadow">
            <Image fill src={image1} className="rounded-[5px] object-contain" />
          </div>
          <div className="w-[80px] absolute z-[3] bottom-8 right-8 drop-shadow">
            <Image
              fill
              src={tropica1}
              className="rounded-[5px]  object-contain "
            />
          </div>
          <div className="w-[250px] z-[1] absolute bottom-6 -left-6 drop-shadow">
            <Image fill src={code2} className="rounded-[5px] object-contain" />
          </div>
        </DescriptionCard>
        <div className="flex md:justify-between w-full md:flex-row flex-col">
          <DescriptionCard
            className="pl-8 pr-14 md:pt-24 pt-8"
            label="Automatizar comunicaciones"
            listItems={[
              { label: "Mejorar relación con clientes" },
              { label: "Aumentar ROI de publicidad" },
            ]}
          >
            <div className="w-[80px] absolute left-1/2 -translate-x-1/2 -top-[80px]  z-[3]  drop-shadow">
              <Image
                fill
                src={whatsapp}
                className="rounded-[5px]  object-contain "
              />
            </div>
          </DescriptionCard>
          <DescriptionCard
            className="pr-8 pl-14 md:pt-24 pt-8"
            label="Aumentar las conversiones digitales"
            listItems={[
              { label: "Cumplimiento de objectivos" },
              { label: "Aumento en ventas" },
            ]}
          >
            <div className="w-[200px] relative z-[2] drop-shadow">
              <Image
                fill
                src={commerce}
                className="rounded-[3px] object-contain"
              />
            </div>
          </DescriptionCard>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCards;
