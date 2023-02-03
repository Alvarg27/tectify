import React, { useEffect, useRef } from "react";

const Input = ({
  value,
  type,
  maxLength,
  setIsFocused,
  isFocused,
  handleInputChange,
  className,
  placeholder,
}) => {
  const textareaRef = useRef(null);
  const MIN_TEXTAREA_HEIGHT = 32;
  useEffect(() => {
    if (!textareaRef?.current) {
      return;
    }
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);
  if (type === "textarea") {
    return (
      <textarea
        ref={textareaRef}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          e.preventDefault();
          setIsFocused(false);
          handleInputChange(e.target.value);
        }}
        type={type || "text"}
        maxLength={1000}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          handleInputChange(e.target.value);
        }}
        className={`bg-gray-100 dark:bg-neutral-900 dark:text-white rounded-lg p-2 w-full h-[100px] overflow-hidden no-scrollbar mt-1 ${className} bg-gray-100 dark:bg-neutral-900 dark:text-white `}
      />
    );
  }
  return (
    <input
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        e.preventDefault();
        setIsFocused(false);
        handleInputChange(e.target.value);
      }}
      type={type || "text"}
      maxLength={maxLength || 256}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        e.preventDefault();
        handleInputChange(e.target.value);
      }}
      className={` rounded-lg h-[50px] p-2 w-full mt-1 bg-gray-100 dark:bg-neutral-900 dark:text-white   ${className} ${
        isFocused ? "border-blue-500" : "border-gray-200"
      }`}
    />
  );
};

export default Input;
