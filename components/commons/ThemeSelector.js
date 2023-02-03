import useLanguage from "hooks/useLanguage";
import useTheme from "hooks/useTheme";
import { useRouter } from "next/router";
import React from "react";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
const text = {
  darkTheme: [
    { language: "es", content: "Tema oscuro" },
    { language: "en", content: "Dark theme" },
  ],
  lightTheme: [
    { language: "es", content: "Tema claro" },
    { language: "en", content: "Light theme" },
  ],
};

const ThemeSelector = ({ className }) => {
  const { translate } = useLanguage();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
        if (router.pathname === "/location/[locationId]") {
          router.reload(window.location.pathname);
        }
        if (router.pathname === "/event/[eventId]") {
          router.reload(window.location.pathname);
        }
      }}
      className={`flex items-center ml-4 bg-gray-200  rounded-md h-[30px] px-2 dark:bg-neutral-900 dark:text-white ${className}`}
    >
      {theme === "dark" ? <RiMoonClearLine /> : <RiSunLine />}
      <p className="ml-2 text-sm hover:underline">
        {theme === "dark"
          ? translate(text.darkTheme)
          : translate(text.lightTheme)}
      </p>
    </button>
  );
};

export default ThemeSelector;
