import React from 'react';
import styles from './Nav.module.css';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import NavButton from '../NavButton';

const Nav = ({
  backPath = '/',
  backText = 'Go Back',
  forwardPath = '/',
  forwardText = 'Go Forward',
  includeBackLink = true,
  includeMainLink = true,
  includeForwardLink = true,
  history
}) => (
  <nav className={styles.mainNav}>
    <Container>
      <Row>
        <Col customStyles={{ padding: 0 }}>
          {
            includeBackLink ? (
              <NavButton customStyles={{ backgroundColor: '#4a7db0' }} path={backPath} back history={history}>{ backText }</NavButton>
            ) : null
          }
        </Col>
        <Col customStyles={{ padding: 0}}>
          {
            includeMainLink ? (
              <NavButton customStyles={{ backgroundColor: '#0b2645', color: '#4a7db0' }} path="/" history={history}>Home</NavButton>
            ) : null
          }
        </Col>
        <Col customStyles={{ padding: 0 }}>
          {
            includeForwardLink ? (
              <NavButton customStyles={{ backgroundColor: '#4a7db0' }} path={forwardPath} forward history={history}>{ forwardText }</NavButton>
            ) : null
          }
        </Col>
      </Row>
    </Container>
  </nav>
);

export default Nav;
