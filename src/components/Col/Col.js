import React from 'react';
import styles from './Col.module.css';

const Col = ({ children, customStyles = null, ...rest }) => (
  <article style={customStyles} className={styles.col} {...rest} >
    { children }
  </article>
);

export default Col;
