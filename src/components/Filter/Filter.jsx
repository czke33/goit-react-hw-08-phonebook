import React from "react";
import style from "./filter.module.css";


import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const changeHandler = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };


  return (
    <div className={style.container}>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        onChange={changeHandler}
        className={style.filterInput}
      ></input>
    </div>
  );
};



export default Filter;