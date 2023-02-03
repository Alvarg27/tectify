import Button from "components/commons/Button";
import { useRouter } from "next/router";
import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className=" h-[70px] w-full fixed top-0 z-[50]">
      <div className="flex h-full justify-between px-4 items-center max-w-[1200px] m-auto">
        <p
          onClick={() => router.push("/")}
          className="text-blue-700 text-4xl font-bold mx-0 my-auto cursor-pointer"
        >
          tectify
        </p>
        <div className="flex items-center">
          <Navigation className="mr-6" />
          <Button className="bg-blue-500 text-white ">Contactar</Button>
        </div>
      </div>
    </div>
  );
}
