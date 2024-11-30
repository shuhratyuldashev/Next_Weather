"use client";

import React, { useState } from "react";
import { addToHistory, toggleModal } from "@/store/weatherSlice";
import { IoSearchOutline } from "react-icons/io5";
import Information_modal from "@/Components/Information-modal";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "@/store/weatherFetchSlice";

const Search_bar = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const isModal = useSelector((state) => state.history.modal);
  const date = new Date().toLocaleDateString("uz-UZ");

  const addHistory = () => {
    if (title.trim().length !== 0) {
      dispatch(addToHistory({ title, date }));
      setTitle("");
      dispatch(toggleModal());
    }
  };

  return (
    <div className="Search-bar">
      <button
        onClick={() => {
          addHistory();
          dispatch(fetchWeather(title));
        }}
      >
        <IoSearchOutline size={25} />
      </button>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Search"
      />
      {isModal && <Information_modal />}
    </div>
  );
};

export default Search_bar;
