import React from 'react';
import styles from './Col.module.css';

const Col = ({ children, customStyles = null, className, ...rest }) => (
  <article style={customStyles} className={`${className || ''} ${styles.col}`} {...rest} >
    { children }
  </article>
);

export default Col;
