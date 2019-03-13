import React from 'react';
import { NavLink } from 'react-router-dom';

import Row from '../Row';
import Col from '../Col';

const Nav = () => (
  <nav>
    <Row>
      <Col>
        <NavLink to="/">Home</NavLink>
      </Col>
      <Col>
        <NavLink to="/about">About</NavLink>
      </Col>
    </Row>
  </nav>
);

export default Nav;
