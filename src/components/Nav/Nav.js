import React from 'react';
import styles from './Nav.module.css';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';

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
        {
          includeBackLink ? (
            <Col>
              <button onClick={() => history.push(backPath)}>{ backText }</button>
            </Col>
          ) : null
        }
        {
          includeMainLink ? (
            <Col>
              <button onClick={() => history.push('/')}>Main Page</button>
            </Col>
          ) : null
        }
        {
          includeForwardLink ? (
            <Col>
              <button onClick={() => history.push(forwardPath)}>{ forwardText }</button>
            </Col>
          ) : null
        }
      </Row>
    </Container>
  </nav>
);

export default Nav;
