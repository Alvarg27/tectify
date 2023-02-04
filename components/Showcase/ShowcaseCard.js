import useWindowDimensions from "hooks/useWindowDimensions";
import Image from "next/image";
import React from "react";

const ShowcaseCard = ({ image, containerRef, large }) => {
  return (
    <div className="relative drop-shadow-xl md:px-2 md:py-1 py-4">
      <Image
        src={image}
        height={600}
        width={900}
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default ShowcaseCard;
