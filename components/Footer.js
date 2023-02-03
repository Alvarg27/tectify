import { useRouter } from "next/router";
import React from "react";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import LanguageSelector from "./commons/LanguageSelector";
import ThemeSelector from "./commons/ThemeSelector";

export default function Footer() {
  const router = useRouter();
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full  shadow bg-gray-50 dark:bg-black h-[50px] flex fixed bottom-0 z-[10]">
      <div className=" flex items-center justify-between w-[90%] max-w-[1200px] mx-auto ">
        <p className=" text-gray-500 text-sm">©{year} tectify</p>
        <div className="flex">
          <div className="flex items-center text-sm">
            <RiPhoneFill className="mr-1" />
            <p>01 800 099 1211</p>
          </div>
          <ThemeSelector className="mr-2" />
          <LanguageSelector className="h-[30px]" />
        </div>
      </div>
    </div>
  );
}
