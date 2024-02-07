import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-3">
      <div className="text-3xl">REACT & REDUX PRACTICE</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            className="h-10 rounded-lg w-32 text-left cursor-pointer"
            name=""
            id=""
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
          >
            <option value="asc">Ascend</option>
            <option value="desc">Descend</option>
          </select>
        </div>
        <input
          onChange={(e) => dispatch(searchDataFunc(e.target.value))}
          className="h-10 rounded-lg px-4 text-black"
          type="text"
          placeholder="Arama yapınız"
        />
        <div
          className="bg-yellow-600 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => dispatch(modalFunc())}
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
