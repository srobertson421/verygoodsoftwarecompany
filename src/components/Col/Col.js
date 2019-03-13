import React from 'react';
import styles from './Col.module.css';

const Col = ({ children, customStyles = null }) => (
  <article style={customStyles} className={styles.col}>
    { children }
  </article>
);

export default Col;
