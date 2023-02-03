import React from "react";
import PasswordInputCharacter from "./PasswordInputCharacter";

const PasswordCheck = ({ passwordValidation }) => {
  return (
    <div className="mb-1">
      <PasswordInputCharacter
        passwordValidation={passwordValidation}
        type="length"
        label="Caracteres minimos"
      />
      <PasswordInputCharacter
        passwordValidation={passwordValidation}
        type="number"
        label="Número"
      />
      <PasswordInputCharacter
        passwordValidation={passwordValidation}
        type="specialCharacter"
        label="Caracter especial"
      />
      <PasswordInputCharacter
        passwordValidation={passwordValidation}
        type="upperCase"
        label="Mayuscula"
      />
      <PasswordInputCharacter
        passwordValidation={passwordValidation}
        type="lowerCase"
        label="Minuscula"
      />
    </div>
  );
};

export default PasswordCheck;
