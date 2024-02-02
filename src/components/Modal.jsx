import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import Input from "./Input";
const Modal = ({ title, content, btnText, btnFunc }) => {
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const onChangeFunc = (e, type) => {
    e.preventDefault();

    if (type == "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  console.log(productInfo)

  return (
    <div className="fixed h-screen w-full flex items-center justify-center">
      <div className=" w-1/3 bg-white shadow-lg rounded-md p-4">
        <div className="flex items-center justify-between border-b py-3">
          <div className="text-2xl">{title}</div>
          <GrClose className="cursor-pointer" size={24} />
        </div>
        <Input
          type={"text"}
          name={"name"}
          id={"name"}
          onChange={(e) => onChangeFunc(e, "name")}
          placeholder={"Ürün ekle"}
        />
        <Input
          type={"text"}
          name={"price"}
          id={"price"}
          onChange={(e) => onChangeFunc(e, "price")}
          placeholder={"Fiyat ekle"}
        />
        <Input
          type={"file"}
          name={"url"}
          id={"url"}
          onChange={(e) => onChangeFunc(e, "url")}
          placeholder={"Resim sec"}
        />
      </div>
    </div>
  );
};

export default Modal;
