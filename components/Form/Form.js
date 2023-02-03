import Button from "components/commons/Button";
import PasswordInput from "components/Inputs/passwordInput/PasswordInput";
import SelectInput from "components/Inputs/SelectInput";
import TextInput from "components/Inputs/TextInput";
import ToggleInput from "components/Inputs/ToggleInput";
import languageConfig from "config/language.json";

const Form = ({
  formData,
  setFormData,
  formError,
  onSubmit,
  submitLabel,
  onCancel,
  disabledButton,
  loadingChanges,
  loadingLabel,
}) => {
  const handleSubmit = () => {
    formData.forEach((input, index) => {
      if (input.value === "" && input.required) {
        formData[index].error = input.emptyMessage;
        setFormData([...formData]);
      }
    });
    if (formData.some((input) => input.error.length >= 1)) {
      return;
    }
    onSubmit();
  };
  return (
    <div className="flex-wrap flex">
      {formData.map((input, i) => {
        if (input.type === "select") {
          return (
            <SelectInput
              key={i}
              input={input}
              formData={formData}
              setFormData={setFormData}
              index={i}
            />
          );
        }
        if (input.type === "password") {
          return (
            <PasswordInput
              key={i}
              input={input}
              formData={formData}
              setFormData={setFormData}
              index={i}
            />
          );
        }
        if (input.type === "toggle") {
          return (
            <ToggleInput
              key={i}
              input={input}
              formData={formData}
              setFormData={setFormData}
              index={i}
            />
          );
        }
        return (
          <TextInput
            key={i}
            input={input}
            formData={formData}
            setFormData={setFormData}
            index={i}
          />
        );
      })}
      <div className="w-full flex mt-6">
        {!disabledButton && (
          <Button
            onClick={handleSubmit}
            className="bg-blue-700 text-white flex flex-1 "
          >
            {loadingChanges ? (
              <div className="flex items-center">
                <p className="mr-2">{loadingLabel}</p>
                <Spinner size={20} />
              </div>
            ) : (
              <p>{submitLabel}</p>
            )}
          </Button>
        )}
        {onCancel && (
          <Button onClick={onCancel} className="bg-gray-100 text-gray-400 ml-2">
            Cancelar
          </Button>
        )}
      </div>
      <p className="text-rose-400 text-sm mt-2">{formError}</p>
    </div>
  );
};

export default Form;
