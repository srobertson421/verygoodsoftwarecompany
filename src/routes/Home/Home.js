import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';

const Home = ({ history }) => (
  <>
    <Row onClick={() => history.push('/work')} customStyles={{ height: '25%', alignContent: 'center', backgroundColor: 'blue' }}>
      <Col>
        <h2>What We've Done</h2>
      </Col>
    </Row>
    <Row onClick={() => history.push('/methodology')} customStyles={{ height: '25%', alignContent: 'center', backgroundColor: 'green' }}>
      <Col>
        <h2>How We Do It</h2>
      </Col>
    </Row>
    <Row onClick={() => history.push('/about')} customStyles={{ height: '25%', alignContent: 'center', backgroundColor: 'yellow' }}>
      <Col>
        <h2>Who We Are</h2>
      </Col>
    </Row>
    <Row onClick={() => history.push('/contact')} customStyles={{ height: '25%', alignContent: 'center', backgroundColor: 'red' }}>
      <Col>
        <h2>How To Reach Us</h2>
      </Col>
    </Row>
  </>
);

export default Home;
