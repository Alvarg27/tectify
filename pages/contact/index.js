import Form from "components/Form/Form";
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
  return (
    <section>
      <div className="mt-[70px] w-[90%] max-w-[1200px] mx-auto flex">
        <div className="w-1/2">
          <p className="text-2xl">Get in touch</p>
          <p className="text-4xl font-semibold">hola@tectify.io</p>
          <p className="text-4xl font-semibold">01 800 099 1211</p>
        </div>
        <div className="w-1/2">
          <p></p>
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
