import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

const Modal = ({ title, content, btnText, btnFunc }) => {
 
  const dispatch = useDispatch();


  return (
    <div className="fixed top-16 left-0 right-0 bottom-0 h-screen w-full flex items-center justify-center bg-black bg-opacity-50">
      <div className=" w-1/3 bg-white shadow-lg rounded-md p-4">
        <div className="flex items-center justify-between border-b py-3">
          <div className="text-2xl">{title}</div>
          <GrClose className="cursor-pointer" onClick={() => dispatch(modalFunc())} size={24} />
        </div>
         {content}
      </div>
    </div>
  );
};

export default Modal;
