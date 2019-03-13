import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';
import styles from './Home.module.css';
import logo from '../../assets/images/logo.png';

const Home = () => (
  <Row>
    <Col>
      <img className={styles.mainLogo} src={logo} alt="main-logo" />
    </Col>
  </Row>
);

export default Home;
