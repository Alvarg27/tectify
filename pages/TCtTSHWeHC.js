import moment from "moment";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ChristmasCard = () => {
  const router = useRouter();
  const [destinatario, setDestinatario] = useState();

  useEffect(() => {
    if (router.isReady && !router.query.destinatario) {
      return;
    }
    setDestinatario(router.query.destinatario);
  }, [router]);

  return (
    <>
      {destinatario && (
        <div className="min-h-screen bg-blue-500 flex items-center justify-center">
          <div className="px-10 flex flex-col justify-center items-center">
            <p className="text-gray-200 font-medium text-[80px] mb-12 rotate-90 ">{`*<]:{)`}</p>
            <p className=" text-center text-gray-200 font-medium text-xl">
              ¡Feliz navidad y año nuevo!
            </p>
            <div className="text-gray-500 my-4 bg-white p-6 rounded-xl shadow-lg">
              <p>{`{`}</p>
              <div className="ml-4 text-sm">
                <div className="flex">
                  <p className="text-rose-400">
                    {`"destinatario"`}
                    <b className="font-normal text-black mx-1">:</b>
                  </p>
                  <p className="text-blue-500">{`"${destinatario}"`}</p>
                </div>
                <div className="flex">
                  <p className="text-rose-400">
                    {`"mensaje"`}{" "}
                    <b className="font-normal text-black mx-1">:</b>
                  </p>
                  <p className="text-blue-500">{` "Mis mejores deseos para estas fiestas"`}</p>
                </div>
                <div className="flex">
                  <p className="text-rose-400">
                    {`"remitente"`}{" "}
                    <b className="font-normal text-black mx-1">:</b>
                  </p>
                  <p className="text-blue-500">{` "Alvar García Besné"`}</p>
                </div>
                <div className="flex">
                  <p className="text-rose-400">
                    {`"fecha"`} <b className="font-normal text-black mx-1">:</b>
                  </p>
                  <p className="text-blue-500">{`"${moment().format(
                    "DD/MM/YY"
                  )}""`}</p>
                </div>
              </div>
              <p>{`}`}</p>
            </div>
            <p
              onClick={() => router.push("/")}
              className="text-gray-200 mt-4 font-bold cursor-pointer mx-auto"
            >
              tectify
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChristmasCard;
