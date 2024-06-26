import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmail } from '../../redux/selectors';
import { logoutUser } from '../../redux/operations';
import style from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={style.wreaper}>
      <p>{email}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default UserMenu;