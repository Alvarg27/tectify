import Form from "components/Form/Form";
import useWindowDimensions from "hooks/useWindowDimensions";
import React, { useState } from "react";

const companySizeOptions = [
  {
    label: [
      { language: "es", content: "1-20 empleados" },
      { language: "en", content: "1-20 employees" },
    ],
    value: "",
  },
  {
    label: [
      { language: "es", content: "20-100 empleados" },
      { language: "en", content: "20-100 employees" },
    ],
    value: "",
  },
  {
    label: [
      { language: "es", content: "100-500 empleados" },
      { language: "en", content: "100-500 employees" },
    ],
    value: "",
  },
  {
    label: [
      { language: "es", content: "500-1000 empleados" },
      { language: "en", content: "500-1000 emloyeess" },
    ],
    value: "",
  },
  {
    label: [
      { language: "es", content: "+1000 empleados" },
      { language: "en", content: "+1000 employees" },
    ],
    value: "",
  },
];

const countryOption = [
  {
    label: [
      { language: "es", content: "México" },
      { language: "en", content: "Mexico" },
    ],
    value: "",
  },
  {
    label: [
      { language: "es", content: "Estados Unidos" },
      { language: "en", content: "United States" },
    ],
    value: "",
  },
  {
    label: [
      { language: "es", content: "Canadá" },
      { language: "en", content: "Canada" },
    ],
    value: "",
  },
  {
    label: [
      { language: "es", content: "Brasil" },
      { language: "en", content: "Brazil" },
    ],
    value: "",
  },
  {
    label: [
      { language: "es", content: "Argentina" },
      { language: "en", content: "Argentina" },
    ],
    value: "",
  },
  {
    label: [
      { language: "es", content: "Colombia" },
      { language: "en", content: "Colombia" },
    ],
    value: "",
  },
  {
    label: [
      { language: "es", content: "Panamá" },
      { language: "en", content: "Panama" },
    ],
    value: "",
  },
];

const ContactPage = () => {
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState([
    {
      label: [
        { language: "es", content: "Nombre" },
        { language: "en", content: "Name" },
      ],
      description: "",
      required: true,
      value: "",
      error: "",
      emptyMessage: "El nombre no puede estar vacío",
      width: "w-1/2",
      className: "pr-1",
    },
    {
      label: [
        { language: "es", content: "Apellido" },
        { language: "en", content: "Lastname" },
      ],
      description: "",
      required: true,
      value: "",
      error: "",
      emptyMessage: "El apellido no puede estar vacío",
      width: "w-1/2",
      className: "pl-1",
    },

    {
      label: [
        { language: "es", content: "Nombre de la empresa" },
        { language: "en", content: "Company name" },
      ],
      description: "",
      required: false,
      value: "",
      error: "",
      emptyMessage: "El nombre de la empresa no puede estar vacío",
      width: "w-1/2",
      className: "pr-1",
    },
    {
      label: [
        { language: "es", content: "Sitio web" },
        { language: "en", content: "Website" },
      ],
      description: "",
      required: false,
      value: "",
      error: "",
      width: "w-1/2",
      className: "pl-1",
    },
    {
      label: [
        { language: "es", content: "Correo electrónico" },
        { language: "en", content: "Email" },
      ],
      name: "email",
      description: "",
      required: true,
      value: "",
      error: "",
      width: "w-1/2",
      className: "pr-1",
    },
    {
      label: [
        { language: "es", content: "Teléfono" },
        { language: "en", content: "Phone" },
      ],
      description: "",
      required: true,
      value: "",
      error: "",
      emptyMessage: "El teléfono no puede estar vacío",
      width: "w-1/2",
      className: "pl-1",
    },
    {
      label: [
        { language: "es", content: "Tamaño de la empresa" },
        { language: "en", content: "Company size" },
      ],
      description: "",
      required: true,
      value: "",
      error: "",
      emptyMessage: "Ingresa el tamaño de la empresa",
      type: "select",
      options: companySizeOptions,
      className: "pr-1",
    },
    {
      label: [
        { language: "es", content: "País" },
        { language: "en", content: "Country" },
      ],
      description: "",
      required: true,
      value: "",
      error: "",
      emptyMessage: "Ingresa el país",
      type: "select",
      options: countryOption,
      className: "pl-1",
    },
  ]);

  const { width, height } = useWindowDimensions();
  return (
    <section className="w-full" style={{ height: height }}>
      <div className="h-full w-full fixed top-0 flex">
        <div className="absolute  bg-indigo-400 md:w-1/3 -right-[10%] w-1/2 -top-[10%]  aspect-square md:-top-1/4 rounded-full blur-3xl opacity-20 "></div>
        <div className="absolute  bg-blue-400 md:w-1/3 w-3/4 left-0 aspect-square md:-bottom-1/4 bottom-0 rounded-full blur-3xl opacity-20 "></div>
      </div>

      <div className="pt-[100px] pb-[100px]   w-[90%] max-w-[700px] mx-auto flex-col justify-center flex">
        <div className="text-center w-full ">
          <p className="text-6xl font-bold dark:text-white">
            Talk to our Sales team
          </p>
          <p className="text-lg text-gray-500 mt-4">
            {
              "  We'll help you find the right plan and pricing for your business. You can call us directly to "
            }
            <b className="text-xl font-semibold dark:text-gray-300 whitespace-nowrap">
              800 099 1211
            </b>
            , send us an email to{" "}
            <b className="text-2xl font-semibold dark:text-gray-300">
              hola@tectify.io
            </b>{" "}
            or fill the form below so we cant get in tocuh with you.
          </p>
        </div>

        <div className="bg-white bg-opacity-90 dark:bg-opacity-25 dark:bg-[#0f0f0f] p-8 mt-10 mb-[50px] drop-shadow shadow-2xl dark:shadow-blue-500 rounded-xl max-w-[600px] mx-auto ">
          <p className="text-2xl font-medium dark:text-white">
            Tell us a bit about your company
          </p>
          <p className=" text-gray-500 mb-6">
            We we will get in touch with you as soon as posible
          </p>
          <Form
            formData={formData}
            setFormData={setFormData}
            formError={formError}
            submitLabel="Contactar"
            onSubmit={() => {
              return;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
