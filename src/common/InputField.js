import React  from "react";

const InputField = ({ value, name, placeholder, type, onChange }) => (
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
);

export default InputField;