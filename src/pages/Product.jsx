import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);

  const buttonFunc = () => {

  }

  return (
    <div>
      <ProductCard />
      {modal && <Modal title={'Ürün oluştur'} btnText={'Oluştur'} btnFunc={buttonFunc} />}
    </div>
  );
};

export default Product;
