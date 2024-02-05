import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${data?.id}`);
  };

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md ">
      <img className=" h-full w-full rounded-md" src={data?.url} alt="" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2 rounded-b-md">
        <div className=" text-large font-semibold border-b">{data?.name}</div>
        <div>{data?.price}$</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className=" z-10 absolute top-2 right-2 w-[30px] h-[30px] bg-black bg-opacity-30 hover:bg-opacity-80 flex items-center justify-center rounded-full cursor-pointer"
      >
        <BsThreeDots color="white" size={24} />
      </div>

      {openEdit && (
        <div className="z-0 absolute top-10 right-2 p-2 text-sm bg-black border border-white text-white bg-opacity-80 rounded-md">
          <div
            onClick={() => dispatch(deleteDataFunc(data?.id))}
            className="cursor-pointer"
          >
            Sil
          </div>
          <div onClick={updateFunc} className="cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
