import React, { useEffect, useState } from "react";
import restaurants1 from "public/restaurants.webp";
import code1 from "public/code.webp";
import restaurants3 from "public/restaurants3.webp";
import Image from "next/image";
import useWindowDimensions from "hooks/useWindowDimensions";
import { RiNumbersFill, RiShoppingCartFill } from "react-icons/ri";
import { FaCloud } from "react-icons/fa";

const HeroBackground = () => {
  const { height } = useWindowDimensions();
  const [mouseOffset, setMouseOffset] = useState({ clientX: 0, clientY: 0 });

  useEffect(() => {
    const handleMouseMovement = (e) => {
      mouseOffset.clientX = e.clientX;
      mouseOffset.clientY = e.clientY;
      setMouseOffset({ ...mouseOffset });
    };
    window.addEventListener("mousemove", handleMouseMovement);
    return () => window.removeEventListener("mousemove", handleMouseMovement);
  }, []);
  return (
    <div
      style={{ height }}
      className="w-full 0 z-0 mx-auto absolute md:block hidden"
    >
      <div className={`absolute top-[200px] left-10 flex  flex-col `}>
        <div>
          <div className="bg-gray-100 dark:bg-neutral-900 w-[200px] h-[120px] absolute -bottom-[100px] -left-4 rounded-md"></div>
          <div className="bg-gray-100 dark:bg-neutral-900 w-[60px] h-[120px] absolute -top-[10px] left-10 rounded-md"></div>
          <div className="bg-gray-100 dark:bg-neutral-900 w-[60px] h-[60px] absolute top-[150px] left-[100px] rounded-md"></div>
          <div className="flex items-end mb-10">
            <div
              className="w-[60px] drop-shadow-lg"
              style={{
                transform: `translate(${mouseOffset.clientX / 40}px, ${
                  mouseOffset.clientY / 40
                }px)`,
              }}
            >
              <Image
                src={restaurants1}
                className=" rounded-[5px]  object-cover opacity-70"
              />
            </div>
            <div
              className="w-[60px] h-[60px] bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 rounded-lg ml-10 flex justify-center items-center"
              style={{
                transform: `translate(${mouseOffset.clientX / 70}px, ${
                  mouseOffset.clientY / 25
                }px)`,
              }}
            >
              <FaCloud className="text-white dark:text-black opacity-40 text-3xl" />
            </div>
          </div>
          <div
            style={{
              transform: `translate(${mouseOffset.clientX / 30}px, ${
                mouseOffset.clientY / 30
              }px)`,
            }}
            className="flex"
          >
            <div className="w-[210px]  relative z-[1] drop-shadow-lg mr-4">
              <Image
                fill
                src={restaurants3}
                className="rounded-[5px]  object-contain "
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute right-10 flex  flex-col top-[120px]`}>
        <div>
          <div className="bg-gray-100 dark:bg-neutral-900 w-[180px] h-[100px] absolute -top-[40px] -left-4 rounded-md"></div>
          <div className="bg-gray-100 dark:bg-neutral-900 w-[60px] h-[60px] absolute -bottom-[20px] right-[30px] rounded-md"></div>
          <div
            style={{
              transform: `translate(${mouseOffset.clientX / 60}px, ${
                mouseOffset.clientY / 60
              }px)`,
            }}
            className="flex"
          >
            <div className="w-[180px]  relative z-[1] drop-shadow-lg mr-4">
              <Image
                fill
                src={code1}
                className="rounded-[5px]  object-contain"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4 pr-4">
            <div
              className="w-[60px] h-[60px] bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 rounded-lg ml-10 flex justify-center items-center"
              style={{
                transform: `translate(${mouseOffset.clientX / 35}px, ${
                  mouseOffset.clientY / 35
                }px)`,
              }}
            >
              <RiShoppingCartFill className="text-white dark:text-black opacity-60 text-4xl bg-clip-text text-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute right-[150px] flex  flex-col bottom-[100px]`}>
        <div className="bg-gray-100 dark:bg-neutral-900 w-[60px] h-[60px] absolute -right-[30px] rounded-md"></div>

        <div
          className="w-[60px] h-[60px] bg-gradient-to-br from-indigo-300 to-purple-400 flex justify-center items-center  rounded-md"
          style={{
            transform: `translate(${mouseOffset.clientX / 50}px, ${
              mouseOffset.clientY / 50
            }px)`,
          }}
        >
          <RiNumbersFill className="text-white dark:text-black opacity-60 text-4xl bg-clip-text text-transparent" />
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;
