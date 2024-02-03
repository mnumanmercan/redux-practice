import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { createDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
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

  console.log(data, 'data selector')

  const buttonFunc = () => {
    dispatch(modalFunc());
    dispatch(createDataFunc(productInfo));
    
  };

  const contentModal = (
    <>
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
      <Button btnText={"Ürün oluştur"} onClick={buttonFunc} />
    </>
  );

  return (
    <div>
      <ProductCard />
      {modal && <Modal content={contentModal} title={"Ürün oluştur"} />}
    </div>
  );
};

export default Product;
