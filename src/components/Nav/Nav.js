import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';

const Nav = () => (
  <nav className={styles.mainNav}>
    <Container>
      <Row>
        <Col>
          <NavLink to="/">Home</NavLink>
        </Col>
        <Col>
          <NavLink to="/about">About</NavLink>
        </Col>
      </Row>
    </Container>
  </nav>
);

export default Nav;
