import React, { useState } from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { ascendDataFunc, descendDataFunc, searchDataFunc } from "../redux/dataSlice";
const Header = () => {
  const dispatch = useDispatch();

  const handleSorting = (e) => {
    e.preventDefault();
    if(e.target.value === 'asc'){
      dispatch(ascendDataFunc())
    }else if (e.target.value === 'desc'){
      dispatch(descendDataFunc())
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchDataFunc(e.target.value));
  }

  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">REACT & REDUX UYGULAMA</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select className="h-10 rounded-lg" name="" id="" onChange={handleSorting}>
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <input
          onChange={handleSearch}
          className="h-10 rounded-lg px-4 text-black"
          type="text"
          placeholder="Arama yapınız"
        />
        <div className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer" onClick={() => dispatch(modalFunc())}>
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
