import validateEmail from "helpers/validateEmail";
import useLanguage from "hooks/useLanguage";

import React, { useState } from "react";
import Input from "./Input";

const TextInput = ({ input, formData, setFormData, index }) => {
  const { translate } = useLanguage();
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (inputValue) => {
    let value = inputValue.trimStart();
    formData[index].value = value;
    if (input?.type !== "textarea") {
      value = value.replace(/\s\s+/g, " ");
    }
    if (input.name === "email") {
      value = value.replace(/ /g, "").toLowerCase();
      formData[index].value = value;
      const validEmail = validateEmail(value);
      if (validEmail === false) {
        formData[index].error = "El correo electrónico no es válido";
        setFormData([...formData]);
      }
      if (formData[index].value === "") {
        formData[index].error = input.emptyMessage;
        setFormData([...formData]);
      }
      if (formData[index].value !== "" && validEmail) {
        formData[index].error = "";
        setFormData([...formData]);
      }
      return;
    }

    setFormData([...formData]);
    if (!input.required) {
      return;
    }
    if (formData[index].value === "") {
      formData[index].error = input.emptyMessage;
      setFormData([...formData]);
    }
    if (formData[index].value !== "") {
      formData[index].error = "";
      setFormData([...formData]);
    }
  };

  return (
    <div
      className={`flex flex-col my-2 ${input?.width ? input.width : "w-full"} ${
        input?.className
      }`}
    >
      <p className="dark:text-white">{translate(input.label)}</p>
      <p className="text-gray-500 text-sm mb-1">{input.description}</p>
      <div>
        <Input
          type={input.type}
          value={formData[index].value}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          handleInputChange={handleInputChange}
          placeholder={input.placeholder}
        />
      </div>

      <p
        style={{
          height: formData[index].error !== "" && !isFocused ? "16px" : "0px",
          opacity: formData[index].error !== "" && !isFocused ? 1 : 0,
          transition: "0.3s",
        }}
        className="text-rose-500 text-sm mt-1"
      >
        {formData[index].error}
      </p>
    </div>
  );
};

export default TextInput;
