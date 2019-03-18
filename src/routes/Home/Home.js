import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';

import styles from './Home.module.css';

const Home = ({ history }) => (
  <>
    <Row customStyles={{ height: '20%', alignContent: 'center' }}>
      <Col customStyles={{ height: '100%' }}>
        <h1 className={`animated fadeInDown ${styles.mainTitle}`}>Very Good Software Company</h1>
      </Col>
    </Row>
    <Row customStyles={{ height: '30%', alignContent: 'center', color: '#000000' }}>
      <Col className={`animated fadeInDownRight ${styles.topLeft} ${styles.mainLink}`} onClick={() => history.push('/work')} customStyles={{ cursor: 'pointer', height: '100%' }}>
        <h2>Work</h2>
      </Col>
      <Col className={`animated fadeInDownLeft ${styles.topRight} ${styles.mainLink}`} onClick={() => history.push('/methodology')} customStyles={{ cursor: 'pointer', height: '100%' }}>
        <h2>Tech</h2>
      </Col>
    </Row>
    <Row customStyles={{ height: '30%', alignContent: 'center', color: '#000000' }}>
      <Col className={`animated fadeInUpRight ${styles.bottomLeft} ${styles.mainLink}`} onClick={() => history.push('/about')} customStyles={{ cursor: 'pointer', height: '100%' }}>
        <h2>About</h2>
      </Col>
      <Col className={`animated fadeInUpLeft ${styles.bottomRight} ${styles.mainLink}`} onClick={() => history.push('/contact')} customStyles={{ cursor: 'pointer', height: '100%' }}>
        <h2>Contact</h2>
      </Col>
    </Row>
  </>
);

export default Home;
