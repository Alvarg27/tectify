import useLanguage from "hooks/useLanguage";
import React, { useEffect, useRef } from "react";
import languageConfig from "config/language.json";
import { TbWorld } from "react-icons/tb";

const LanguageSelector = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  const { defaultLanguage, translations } = languageConfig;
  const options = [defaultLanguage, ...translations];

  const handleLanguageSelect = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  };
  return (
    <div
      className={`flex items-center cursor-pointer bg-gray-200 dark:bg-neutral-900 dark:text-white  rounded-md pl-2 ${className}`}
    >
      <TbWorld />
      <select
        onChange={handleLanguageSelect}
        value={language}
        className="bg-transparent h-[30px] px-2 text-sm hover:underline"
      >
        {options.map((option, i) => (
          <option key={i} value={option.language}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
