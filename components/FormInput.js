import React, { useState, useEffect } from "react";

export default function FormInput({
  label,
  type,
  autoComplete,
  data,
  setData,
  width,
}) {
  const selectedValue = data[type] ? data[type] : undefined;
  const [input, setInput] = useState(selectedValue);

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    data[type] = input;
    setData({ ...data });
  }, [input]);
  return (
    <div className="flex flex-col w-full">
      <input
        className="my-2 border-gray-300 border-b-2  h-[50px] px-2 mx-2 text-2xl"
        autoComplete={autoComplete}
        name={type}
        type={type}
        onChange={(e) => handleInput(e)}
        placeholder={label}
        value={input}
      />
    </div>
  );
}
