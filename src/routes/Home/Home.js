import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';

import styles from './Home.module.css';

const Home = ({ history }) => (
  <>
    <Row customStyles={{ height: '20%', alignContent: 'center' }}>
      <Col customStyles={{ height: '100%' }}>
        <h3>Very Good Software Company</h3>
      </Col>
    </Row>
    <Row customStyles={{ height: '30%', alignContent: 'center' }}>
      <Col className={styles.topLeft} onClick={() => history.push('/work')} customStyles={{ cursor: 'pointer', height: '100%' }}>
        <h2>Work</h2>
      </Col>
      <Col className={styles.topRight} onClick={() => history.push('/methodology')} customStyles={{ cursor: 'pointer', height: '100%' }}>
        <h2>Tech</h2>
      </Col>
    </Row>
    <Row customStyles={{ height: '30%', alignContent: 'center' }}>
      <Col className={styles.bottomLeft} onClick={() => history.push('/about')} customStyles={{ cursor: 'pointer', height: '100%' }}>
        <h2>About</h2>
      </Col>
      <Col className={styles.bottomRight} onClick={() => history.push('/contact')} customStyles={{ cursor: 'pointer', height: '100%' }}>
        <h2>Contact</h2>
      </Col>
    </Row>
  </>
);

export default Home;
