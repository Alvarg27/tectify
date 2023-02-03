import Button from "components/commons/Button";
import MenuIcon from "components/commons/MenuIcon";
import usePageOffset from "hooks/usePageOffset";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useRouter } from "next/router";
import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  const router = useRouter();
  const { offsetY } = usePageOffset();
  const { width } = useWindowDimensions();
  return (
    <div className={`w-full h-[70px] fixed top-0 z-50 `}>
      <div
        style={{ height: offsetY > 70 ? 70 : 0, transition: "0.3s" }}
        className={`absolute top-0 w-full ${
          offsetY > 70 ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      />
      <div className="flex justify-between max-w-[1200px] w-[95%] h-full items-center mx-auto relative">
        <p
          onClick={() => router.push("/")}
          className="text-blue-700 text-4xl font-bold mx-0 my-auto cursor-pointer"
        >
          tectify
        </p>
        {width > 1024 && (
          <div className="flex items-center ">
            <Navigation className="mr-6" />
            <Button className="bg-blue-700 text-white ">Contactar</Button>
          </div>
        )}
        {width <= 1024 && <MenuIcon />}
      </div>
    </div>
  );
}
