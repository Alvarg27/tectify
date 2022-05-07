import React from "react";
import { useState, useEffect } from "react";

export default function Counter({ inView, finalNumber, unit }) {
  const [number, setNumber] = useState(finalNumber);
  const animateNumber = (callback, from, to, duration) => {
    let start = null,
      animate = (timestamp) => {
        start = start || timestamp;
        let progress = Math.min((timestamp - start) / duration, 1);
        callback(progress * (to - from) + from);
        if (progress < 1) {
          window.requestAnimationFrame(animate);
        }
      };
    window.requestAnimationFrame(animate);
  };

  const counter = () => {
    animateNumber(
      (value) => {
        setNumber(Math.floor(value) + unit);
      },
      0,
      finalNumber,
      1000
    );
  };
  useEffect(() => {
    if (!inView) {
      return;
    }
    counter();
  }, [inView]);

  return (
    <div>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-tl from-[#a6c0fe] to-[#f68084] text-6xl font-bold text-center ">
        {number}
      </h2>
    </div>
  );
}
