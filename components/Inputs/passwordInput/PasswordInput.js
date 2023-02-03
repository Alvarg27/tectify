import React, { useEffect, useState } from "react";

import { FaEye } from "react-icons/fa";
import validatePassword from "helpers/validatePasword";
import useLanguage from "hooks/useLanguage";
import Input from "../Input";
import PasswordCheck from "./PasswordCheck";

const PasswordInput = ({ input, formData, setFormData, index }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    upperCase: false,
    lowerCase: false,
    number: false,
    specialCharacter: false,
  });
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (inputValue) => {
    let value = inputValue.replace(/ /g, "");
    formData[index].value = value;
    if (input.checkPassword) {
      const result = validatePassword(formData[index].value);
      setPasswordValidation(result);
      let errors = [];
      if (result.length === false) {
        errors.push("8 caracteres");
      }
      if (result.upperCase === false) {
        errors.push("una mayuscula");
      }
      if (result.lowerCase === false) {
        errors.push("una minuscula");
      }
      if (result.number === false) {
        errors.push("un número");
      }
      if (result.specialCharacter === false) {
        errors.push("un caracter especial");
      }
      if (errors.length >= 1) {
        formData[index].error =
          "La contraseña debe contener al menos " + errors.join(", ") + ".";
      }

      if (input.required) {
        if (formData[index].value === "") {
          formData[index].error = input.emptyMessage;
        }
      }
      if (
        formData[index].value !== "" &&
        result.length &&
        result.upperCase &&
        result.lowerCase &&
        result.number &&
        result.specialCharacter
      ) {
        formData[index].error = "";
      }
    }
    setFormData([...formData]);
  };

  return (
    <div className="flex flex-col flex-1 my-4">
      <p>{input.label}</p>
      <p className="text-gray-500 text-sm mb-1">{input.description}</p>
      {input.checkPassword && (
        <PasswordCheck passwordValidation={passwordValidation} />
      )}
      <div className="relative">
        <Input
          className="pr-[45px]"
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          handleInputChange={handleInputChange}
          value={formData[index].value}
          type={showPassword ? "text" : "password"}
          maxLength={256}
        />
        <div
          onClick={() => setShowPassword((prev) => !prev)}
          className={`absolute flex top-1/2 -translate-y-1/2 h-[30px] w-[30px] bg-gray-100 right-2 rounded-md  items-center justify-center transition duration-300 cursor-pointer ${
            showPassword ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <FaEye />
        </div>
      </div>

      <p
        style={{
          height: formData[index].error !== "" && !isFocused ? "auto" : "0px",
          opacity: formData[index].error !== "" && !isFocused ? 1 : 0,
        }}
        className="text-rose-500"
      >
        {formData[index].error}
      </p>
    </div>
  );
};

export default PasswordInput;
