import useLanguage from "hooks/useLanguage";
import React, { useEffect, useState } from "react";

import SwitchComponent from "./SwitchComponent";

const ToggleInput = ({ input, formData, setFormData, index }) => {
  const { translate } = useLanguage();
  const enabled = formData[index].value;
  const setEnabled = (value) => {
    formData[index].value = value;
    setFormData([...formData]);
  };

  return (
    <div className="flex flex-col flex-1 my-2">
      <p>{translate(input.label)}</p>
      <p className="text-gray-500 text-sm mb-1">{input.description}</p>
      <SwitchComponent enabled={enabled} setEnabled={setEnabled} />
      <p
        style={{
          height: formData[index].error !== "" ? "16px" : "0px",
          opacity: formData[index].error !== "" ? 1 : 0,
          transition: "0.3s",
        }}
        className="text-rose-500 text-sm mt-1"
      >
        {formData[index].error}
      </p>
      <div className="h-[1px] w-full bg-gray-200 my-4" />
    </div>
  );
};

export default ToggleInput;
