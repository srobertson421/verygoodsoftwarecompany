import React from 'react';
import styles from './Row.module.css';

const Row = ({ children, customStyles = null, ...rest }) => (
  <section style={customStyles} className={styles.row} {...rest} >
    { children }
  </section>
);

export default Row;
