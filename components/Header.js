import React from "react";
import { CgMenuGridO } from "react-icons/cg";

export default function Header() {
  return (
    <div className="bg-white h-[90px] flex justify-between px-4 drop-shadow-md sticky top-0">
      <p className="text-blue-700 text-4xl font-bold mx-0 my-auto">tectify</p>
      <CgMenuGridO className="my-auto mx-0 text-5xl" />
    </div>
  );
}
