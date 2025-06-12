import React from "react";

const InputText = ({ type = "text", custom, label = "lorem", placeholder, err, formik}) => {
  const handleChange = (e) => {
    const { target } = e
    formik.setFieldValue(target.name, target.value)
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        className={`p-2 rounded-2xl border-accent border ${custom}`}
        id={label}
        name={label.toLowerCase()}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span className="text-sm text-red-600">{err && `*${err}`}</span>
    </div>
  );
};

export default InputText;
