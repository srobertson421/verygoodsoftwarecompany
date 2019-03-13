import React from 'react';
import styles from './Container.module.css';

const Container = ({ children, customStyles = null }) => (
  <div style={customStyles} className={styles.container}>
    { children }
  </div>
);

export default Container;
