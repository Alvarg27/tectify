import React from "react";

const PasswordInputCharacter = ({ passwordValidation, type, label }) => {
  return (
    <div
      className={`text-xs ${
        passwordValidation[type]
          ? "bg-emerald-100 text-emerald-500"
          : "bg-gray-100 text-gray-500"
      } inline-flex h-6 justify-center items-center px-2 rounded-lg mr-1 mb-1`}
    >
      <p>{label}</p>
    </div>
  );
};

export default PasswordInputCharacter;
