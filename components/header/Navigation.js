import React from "react";
import NavigationItem from "./NavigationItem";

const Navigation = ({ className }) => {
  return (
    <div className={`flex ${className}`}>
      <NavigationItem item={{ label: "Inicio" }} />
      <NavigationItem item={{ label: "Productos" }} />
      <NavigationItem item={{ label: "Precios" }} />
      <NavigationItem item={{ label: "Showcase" }} />
      <NavigationItem item={{ label: "Blog" }} />
    </div>
  );
};

export default Navigation;
