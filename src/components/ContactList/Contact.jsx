import React from 'react';
import style from './contactlist.module.css';

const Contact = ({ children }) => {
  return <li className={style.list}>{children}</li>;
};


export default Contact;
