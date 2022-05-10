import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import {
  FaCheck,
  FaCheckCircle,
  FaEnvelope,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
import { useEffect } from "react";
import FormInput from "../../components/FormInput";

export default function Contact() {
  const router = useRouter();
  const { service } = router.query;
  const [step, setStep] = useState(1);
  const [error, setError] = useState();
  const [data, setData] = useState({
    name: undefined,
    company: undefined,
    email: undefined,
    phone: undefined,
    contactMethod: undefined,
    service: undefined,
    plan: undefined,
    promotions: true,
  });
  console.log(data);

  useEffect(() => {
    if (!service) {
      return;
    }
    data.service = service.split("&")[0];
    setData({ ...data });
    data.plan = service.split("&")[1];
    setData({ ...data });
  }, [service]);

  useEffect(() => {
    setError("");
  }, [step]);

  return (
    <div className="py-20">
      {step === 1 ? (
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center lg: px-10">
            ¿Cómo te llamas?
          </h2>
          <div className="flex flex-wrap">
            <FormInput
              label="Nombre y apellido"
              type="name"
              autoComplete="name"
              data={data}
              setData={setData}
              width="50%"
            />
            <p className="mx-4 text-red-400">{error}</p>
            <button
              onClick={() => {
                setError("");
                if (!data.name) {
                  setError("Ingresa tu nombre y apellido para continuar");
                  return;
                }
                setStep(step + 1);
              }}
              className="bg-blue-700 h-12 rounded-md mx-2 mt-10 w-full text-white transition duration-300 hover:bg-blue-900"
            >
              Continuar
            </button>
            <p
              onClick={() => router.push(`/${service.split("&")[0]}`)}
              className="m-auto underline text-gray-500 cursor-pointer mt-2"
            >
              Regresar
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      {step === 2 ? (
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center lg: px-10">
            ¿Para que empresa o negocio te gustaría este servicio?
          </h2>
          <div className="flex flex-wrap">
            <FormInput
              label="Empresa o negocio"
              type="company"
              autoComplete="company"
              data={data}
              setData={setData}
              width="50%"
            />
            <p className="mx-4 text-red-400">{error}</p>
            <button
              onClick={() => {
                setError("");
                if (!data.company) {
                  setError("Ingresa tu empresa o negocio para continuar");
                  return;
                }
                setStep(step + 1);
              }}
              className="bg-blue-700 h-12 rounded-md mx-2 mt-10 w-full text-white transition duration-300 hover:bg-blue-900"
            >
              Continuar
            </button>
            <p
              onClick={() => setStep(step - 1)}
              className="m-auto underline text-gray-500 cursor-pointer mt-2"
            >
              Regresar
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      {step === 3 ? (
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center lg: px-10">
            Ingresa un correo y un teléfono de contacto
          </h2>
          <div className="flex flex-wrap">
            <FormInput
              label="Correo electrónico"
              type="email"
              autoComplete="email"
              data={data}
              setData={setData}
              width="50%"
            />
            <FormInput
              label="Teléfono"
              type="phone"
              autoComplete="tel"
              data={data}
              setData={setData}
              width="50%"
            />
            <p className="mx-4 text-red-400">{error}</p>
            <button
              onClick={() => {
                setError("");
                if (!data.email || !data.phone) {
                  setError("Ingresa tu email y teléfono para continuar");
                  return;
                }
                setStep(step + 1);
              }}
              className="bg-blue-700 h-12 rounded-md mx-2 mt-10 w-full text-white transition duration-300 hover:bg-blue-90"
            >
              Continuar
            </button>
            <p
              onClick={() => setStep(step - 1)}
              className="m-auto underline text-gray-500 cursor-pointer mt-2"
            >
              Regresar
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      {step === 4 ? (
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center lg:px-10 ">
            ¿Por dónde prefieres que te contactemos?
          </h2>
          <div className="flex flex-wrap">
            <div className="w-[50%]">
              <div
                style={{
                  border:
                    data.contactMethod === "email"
                      ? "2px rgb(29 78 216) solid"
                      : "",
                }}
                onClick={() => {
                  data.contactMethod = "email";
                  setData({ ...data });
                }}
                className="flex justify-center bg-gray-100  m-2 h-[50px] rounded-lg cursor-pointer transition duration-300"
              >
                <div className="flex m-auto">
                  <FaEnvelope className="m-auto text-red-400" />
                  <p className="my-auto mx-auto ml-2">Correo electrónico</p>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <div
                style={{
                  border:
                    data.contactMethod === "whatsapp"
                      ? "2px rgb(29 78 216) solid"
                      : "",
                }}
                onClick={() => {
                  data.contactMethod = "whatsapp";
                  setData({ ...data });
                }}
                className="flex justify-center bg-gray-100  m-2 h-[50px] rounded-lg cursor-pointer  transition duration-300"
              >
                <div className="flex m-auto">
                  <FaWhatsappSquare className="m-auto text-green-500" />
                  <p className="my-auto mx-auto ml-2">Whatsapp</p>
                </div>
              </div>
            </div>
            <p className="mx-4 text-red-400 w-full mb-6">{error}</p>
            <div className="mx-2 flex">
              <div
                onClick={() => {
                  data.promotions = !data.promotions;
                  setData({ ...data });
                }}
                className="bg-gray-100 w-[20px] h-[20px] flex rounded-md m-auto border-[2px] border-gray-300"
              >
                {data.promotions ? (
                  <FaCheck className="m-auto text-blue-700 text-[12px] animate-fade" />
                ) : (
                  ""
                )}
              </div>
              <p className="my-auto mx-2 text-gray-500">
                Deseo recibir las mejores ofertas y promociones de tectify.
              </p>
            </div>

            <button
              onClick={() => {
                setError("");
                if (!data.contactMethod) {
                  setError("Ingresa un método de contacto para continuar");
                  return;
                }
                setStep(step + 1);
              }}
              className="bg-blue-700 h-12 rounded-md mx- mt-10 w-full text-white transition duration-300 hover:bg-blue-900 m-2"
            >
              Enviar
            </button>
            <p
              onClick={() => setStep(step - 1)}
              className="m-auto underline text-gray-500 cursor-pointer mt-2"
            >
              Regresar
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      {step === 5 ? (
        <div className="flex flex-col">
          <FaCheckCircle className="m-auto text-blue-300 text-6xl mb-6" />
          <h2 className="text-4xl font-bold text-center">
            ¡Gracias por dejar tus datos {data.name.split(" ")[0]}!
          </h2>
          <p className="m-auto text-gray-500 text-xl text-center px-6">
            En breve nos pondremos en contacto contigo a traves de tu{" "}
            {data.contactMethod === "email" ? "correo electrónico" : ""}
            {data.contactMethod === "whatsapp" ? "whatsapp" : ""}.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-blue-700 h-12 rounded-md mx-2n mt-10 text-white transition duration-300 hover:bg-blue-900 m-2"
          >
            Regresar a inicio
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
