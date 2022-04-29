import Link from "next/link";
import React from "react";

export default function TechnologyCard({ technology }) {
  return (
    <Link href={technology.website}>
      <a target="_blank">
        <div>
          <div className="rounded-lg shadow-lg mx-1 my-4 bg-white p-4 h-[100px] w-[100px] flex flex-col">
            <img src={technology.image} className="w-[60px] m-auto" />
          </div>
        </div>
      </a>
    </Link>
  );
}
