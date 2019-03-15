import React from 'react';
import styles from './NavButton.module.css';
import ArrowRightIcon from '../ArrowRightIcon';
import ArrowLeftIcon from '../ArrowLeftIcon';

const NavButton = ({ path, history, children, customStyles, back = false, forward = false }) => (
  <>
    <div style={customStyles} role="button" onClick={() => history.push(path)} className={styles.navButton}>
      { back ? <ArrowLeftIcon /> : null }
      { children }
      { forward ? <ArrowRightIcon /> : null }
    </div>
  </>
);

export default NavButton;
