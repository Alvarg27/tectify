import Link from "next/link";
import React from "react";

export default function SpeedElement() {
  return (
    <div className="mx-auto my-6 flex flex-col">
      <div className="h-[150px] w-[150px] bg-[#effaf1] rounded-full border-[#5cc971] border-[10px] flex">
        <p className="m-auto text-5xl text-[#3b8624] ">100</p>
      </div>
      <p className="mx-auto mt-4 text-2xl">Rendimiento</p>
    </div>
  );
}
