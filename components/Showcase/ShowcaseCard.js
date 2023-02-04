import useWindowDimensions from "hooks/useWindowDimensions";
import Image from "next/image";
import React, { useState } from "react";

const ShowcaseCard = ({ image, containerRef, large, title, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative drop-shadow-xl md:px-2 md:py-1 py-4">
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        className="relative w-full h-full"
      >
        <Image
          src={image}
          height={600}
          width={900}
          className="object-cover w-full h-full rounded-2xl relative"
        />
        <div className="h-[100px] bg-black absolute bottom-[6px] z-[1] w-full rounded-b-2xl flex flex-col justify-center px-6 bg-opacity-70">
          <p className="text-white">{title}</p>
          <p className="text-blue-500 text-sm">{url ? url : "Coming soon"}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
