import React, { useRef } from "react";
import ShowcaseCard from "./ShowcaseCard";

import item1 from "public/tropica-showcase.webp";
import item2 from "public/sirilo-showcase.webp";
import item3 from "public/ave-showcase.webp";
import item4 from "public/turismo-showcase-2.webp";
import item5 from "public/casantonella-showcase.webp";
import item6 from "public/powerofpeople-showcase.webp";
import item7 from "public/luca-showcase.webp";
import item8 from "public/farma-showcase.webp";
import item9 from "public/arbolitos-showcase.webp";

const Showcase = () => {
  const containerRef = useRef(null);
  return (
    <section className="max-w-[1200px] mx-auto relative my-10">
      <div ref={containerRef} className="flex relative w-full ">
        <div className="w-2/3">
          <ShowcaseCard image={item1} />
        </div>
        <div className="w-1/3">
          <ShowcaseCard image={item2} />
          <ShowcaseCard image={item3} />
        </div>
      </div>
      <div ref={containerRef} className="flex relative w-full ">
        <div className="w-2/3">
          <ShowcaseCard image={item4} />
        </div>
        <div className="w-1/3">
          <ShowcaseCard image={item6} />
          <ShowcaseCard image={item5} />
        </div>
      </div>
      <div ref={containerRef} className="flex relative w-full ">
        <ShowcaseCard image={item7} />
        <ShowcaseCard image={item8} />
        <ShowcaseCard image={item9} />
      </div>
    </section>
  );
};

export default Showcase;
