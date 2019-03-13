import React from 'react';
import styles from './Row.module.css';

const Row = ({ children, customStyles = null }) => (
  <section style={customStyles} className={styles.row}>
    { children }
  </section>
);

export default Row;
