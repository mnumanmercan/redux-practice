import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
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

  let loc = location.search.split("=")[1];

  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((data) => data.id == loc));
    }
  }, [loc]);

  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    navigate('/');
  };

  const contentModal = (
    <>
      <Input
        value={loc ? productInfo.name : null}
        type={"text"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
        placeholder={"Ürün ekle"}
      />
      <Input
        value={loc ? productInfo.price : null}
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
      <Button
        btnText={loc ? "Ürün güncelle" : "Ürün oluştur"}
        onClick={loc ? buttonUpdateFunc : buttonFunc}
      />
    </>
  );

  const filteredItems = data.filter(data => data.name.toLowerCase().includes(keyword.toLowerCase()))

  return (
    <div>
      <div className="flex items-center flex-wrap">
        {filteredItems?.map((data, idx) => (
          <ProductCard key={idx} data={data} />
        ))}
      </div>

      {modal && (
        <Modal
          content={contentModal}
          title={loc ? "Ürün güncelle" : "Ürün oluştur"}
        />
      )}
    </div>
  );
};

export default Product;
