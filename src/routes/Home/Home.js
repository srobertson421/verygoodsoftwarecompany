import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';

const Home = ({ history }) => (
  <>
    <Row customStyles={{ height: '8%', alignContent: 'center' }}>
      <Col>
        <h3>Very Good Software Company</h3>
      </Col>
    </Row>
    <Row customStyles={{ height: '8%', alignContent: 'center' }}>
      <Col>
        <h3>We make very good software...always</h3>
      </Col>
    </Row>
    <Row customStyles={{ height: '30%', alignContent: 'center' }}>
      <Col onClick={() => history.push('/work')} customStyles={{ backgroundColor: 'blue', cursor: 'pointer', height: '100%' }}>
        <h2>Work</h2>
      </Col>
      <Col onClick={() => history.push('/methodology')} customStyles={{ backgroundColor: 'red', cursor: 'pointer', height: '100%' }}>
        <h2>Tech</h2>
      </Col>
    </Row>
    <Row customStyles={{ height: '30%', alignContent: 'center' }}>
      <Col onClick={() => history.push('/about')} customStyles={{ backgroundColor: 'green', cursor: 'pointer', height: '100%' }}>
        <h2>About</h2>
      </Col>
      <Col onClick={() => history.push('/about')} customStyles={{ backgroundColor: 'yellow', cursor: 'pointer', height: '100%' }}>
        <h2>Contact</h2>
      </Col>
    </Row>
  </>
);

export default Home;
