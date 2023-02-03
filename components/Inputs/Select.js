import useLanguage from "hooks/useLanguage";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Select = ({
  options,
  value,
  setIsFocused,
  isFocused,
  handleInputChange,
  className,
}) => {
  const { translate } = useLanguage();
  return (
    <div className="relative">
      <FaChevronDown className="absolute top-1/2 -translate-y-1/2 text-blue-500 right-2 text-sm" />
      <select
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          e.preventDefault();
          setIsFocused(false);
          handleInputChange(e.target.value);
        }}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          handleInputChange(e.target.value);
        }}
        className={`bg-gray-100 dark:bg-neutral-900 dark:text-white rounded-lg h-[50px] p-2 w-full ${className} `}
      >
        {options.map((option, i) => (
          <option
            key={i}
            value={option?.value ? option?.value : translate(option.label)}
          >
            {translate(option.label)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
