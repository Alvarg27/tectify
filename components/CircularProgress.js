import React, { useEffect, useState } from "react";

const CircularProgress = ({ inView }) => {
  const percentage = 100;
  const size = 150;
  const strokeWidth = 10;
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (inView) {
      setProgress(percentage);
    } else {
      setProgress(0);
    }
  }, [inView]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <div className="flex flex-col" onClick={() => counter()}>
      <svg className="mx-auto" width={size} height={size} viewBox={viewBox}>
        <circle
          fill="#effaf1"
          stroke="#effaf1"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="none"
          stroke={"#5cc971"}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap="round"
          style={{ transition: "1s " }}
        />
        <text
          fill="#3b8624"
          fontSize="50px"
          x="50%"
          y="50%"
          dy="20"
          textAnchor="middle"
        >
          {`${percentage}`}
        </text>
      </svg>
      <p className="mx-auto mt-4 text-2xl">Rendimiento</p>
    </div>
  );
};

export default CircularProgress;
