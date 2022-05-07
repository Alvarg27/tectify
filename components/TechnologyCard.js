import Link from "next/link";
import React, { useState } from "react";

export default function TechnologyCard({ technology }) {
  const [isHover, setIsHover] = useState();
  return (
    <div className="relative">
      {isHover ? (
        <div className="absolute bottom-4 left-1 animate-fade">
          <span className="w-0 h-0 border-l-transparent border-r-transparent border-l-[5px] border-r-[5px] border-b-[5px] border-b-blue-700 absolute top-[-4px] left-[10px]" />
          <div className="bg-blue-700 w-[100px] h-10 flex rounded-md">
            <p className="m-auto text-white">{technology.title}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <Link href={technology.website}>
        <a target="_blank">
          <div
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            className="rounded-lg shadow-md mx-1 my-4 bg-white p-4 h-[100px] w-[100px] flex flex-col"
          >
            <img
              src={technology.image}
              className="w-[60px] m-auto"
              width="60px"
              height="100%"
              alt={technology.title + ", " + technology.description}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
