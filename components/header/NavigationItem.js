import React from "react";

const NavigationItem = ({ item }) => {
  return (
    <div className="mx-1 text-lg dark:text-white hover:bg-black hover:dark:bg-white hover:dark:bg-opacity-10 hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
      <p>{item.label}</p>
    </div>
  );
};

export default NavigationItem;
