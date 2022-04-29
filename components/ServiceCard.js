import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div>
      <div className="rounded-lg shadow-lg mx-6 my-4 bg-white p-3 h-[120px]">
        <h3 className="font-bold">{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
}
