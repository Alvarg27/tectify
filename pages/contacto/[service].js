import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import FormInput from "../../components/FormInput";

export default function Contact() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    firstName: undefined,
    lastName: undefined,
    company: undefined,
    email: undefined,
    phone: undefined,
    contactMethod: undefined,
  });
  const router = useRouter();
  const { service } = router.query;
  return (
    <div className="py-20">
      {step === 1 ? (
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center lg: px-10">
            ¿Cómo te llamas?
          </h2>
          <div className="flex flex-wrap">
            <FormInput
              label="Nombre y apellidio"
              type="firstName"
              autoComplete="firstName"
              data={data}
              setData={setData}
              width="50%"
            />

            <button
              onClick={() => setStep(step + 1)}
              className="bg-blue-700 h-12 rounded-md mx-2 mt-10 w-full text-white transition duration-300 hover:bg-blue-900"
            >
              Continuar
            </button>
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
              label="Nombre y apellidio"
              type="firstName"
              autoComplete="firstName"
              data={data}
              setData={setData}
              width="50%"
            />

            <button
              onClick={() => setStep(step + 1)}
              className="bg-blue-700 h-12 rounded-md mx-2 mt-10 w-full text-white transition duration-300 hover:bg-blue-900"
            >
              Continuar
            </button>
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
              type="firstName"
              autoComplete="firstName"
              data={data}
              setData={setData}
              width="50%"
            />
            <FormInput
              label="Teléfono"
              type="firstName"
              autoComplete="firstName"
              data={data}
              setData={setData}
              width="50%"
            />

            <button
              onClick={() => setStep(step + 1)}
              className="bg-blue-700 h-12 rounded-md mx-2 mt-10 w-full text-white transition duration-300 hover:bg-blue-900"
            >
              Continuar
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {step === 4 ? (
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center lg: px-10">
            ¿Por dónde prefieres que te contactemos?
          </h2>
          <div className="flex flex-wrap">
            <div className="w-[50%]">
              <div
                style={{
                  background: data.contactMethod === "email" ? "blue" : "",
                  color: data.contactMethod === "email" ? "white" : "",
                }}
                onClick={() => {
                  data.contactMethod = "email";
                  setData({ ...data });
                }}
                className="flex justify-center bg-gray-100  m-2 h-[50px] rounded-lg"
              >
                <div className="flex m-auto">
                  <FaEnvelope className="m-auto" />
                  <p className="my-auto mx-auto ml-2">Correo electrónico</p>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <div
                onClick={() => {
                  data.contactMethod = "whatsapp";
                  setData({ ...data });
                }}
                className="flex justify-center bg-gray-100  m-2 h-[50px] rounded-lg"
              >
                <div className="flex m-auto">
                  <FaWhatsappSquare className="m-auto" />
                  <p className="my-auto mx-auto ml-2">Whatsapp</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setStep(step + 1)}
              className="bg-blue-700 h-12 rounded-md mx- mt-10 w-full text-white transition duration-300 hover:bg-blue-900"
            >
              Continuar
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
