import React from 'react';
import style from './contactlist.module.css';
import PropTypes from "prop-types"

const Contact = ({ children }) => {
  return <li className={style.list}>{children}</li>;
};

Contact.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contact;
