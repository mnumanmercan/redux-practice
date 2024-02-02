import React from "react";

const Input = ({ value, type, id, name, onChange, placeholder }) => {
  return (
    <input
      className={`h-10 w-full border rounded-md p-2 mt-3 outline-none ${
        type === "file" ? " cursor-pointer pb-10" : ""
      }`}
      value={value}
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
