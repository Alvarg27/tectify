import useLanguage from "hooks/useLanguage";
import React, { useState } from "react";
import Select from "./Select";

const SelectInput = ({ input, formData, setFormData, index }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { translate } = useLanguage();

  const handleInputChange = (inputValue) => {
    let value = inputValue.replace(/\s\s+/g, " ").trimStart();
    formData[index].value = value;
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
      className={`flex flex-col flex-1 my-2 ${
        input?.width ? input.width : "w-full"
      } ${input?.className}`}
    >
      <p>{translate(input.label)}</p>
      <p className="text-gray-500 text-sm mb-1">{input.description}</p>
      <div>
        <Select
          index={index}
          value={formData[index].value}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          handleInputChange={handleInputChange}
          options={input.options}
        />
      </div>

      <p
        style={{
          height: formData[index].error !== "" && !isFocused ? "16px" : "0px",
          opacity: formData[index].error !== "" && !isFocused ? 1 : 0,
          transition: "0.3s",
        }}
        className="text-rose-500"
      >
        {formData[index].error}
      </p>
    </div>
  );
};

export default SelectInput;
