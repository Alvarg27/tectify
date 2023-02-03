import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`h-[50px] px-4 flex items-center justify-center rounded-xl hover:scale-105 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
