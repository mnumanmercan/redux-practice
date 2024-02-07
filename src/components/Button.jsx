import React from "react";

const Button = ({ onClick, btnText }) => {
  return (
    <button
      className="w-full h-10 bg-yellow-600 hover:bg-yellow-700 text-white flex items-center justify-center mt-4 rounded-md border-transparent"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
