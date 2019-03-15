import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';

const Home = ({ history }) => (
  <>
    <Row customStyles={{ height: '8%', alignContent: 'center', borderBottom: 'solid 3px black', cursor: 'pointer' }}>
      <Col>
        <h3>Very Good Software Company</h3>
      </Col>
    </Row>
    <Row onClick={() => history.push('/work')} customStyles={{ height: '23%', alignContent: 'center', backgroundColor: 'blue', cursor: 'pointer' }}>
      <Col>
        <h2>Work</h2>
      </Col>
    </Row>
    <Row onClick={() => history.push('/methodology')} customStyles={{ height: '23%', alignContent: 'center', backgroundColor: 'green', cursor: 'pointer' }}>
      <Col>
        <h2>Tech</h2>
      </Col>
    </Row>
    <Row onClick={() => history.push('/about')} customStyles={{ height: '23%', alignContent: 'center', backgroundColor: 'yellow', cursor: 'pointer' }}>
      <Col>
        <h2>About</h2>
      </Col>
    </Row>
    <Row onClick={() => history.push('/contact')} customStyles={{ height: '23%', alignContent: 'center', backgroundColor: 'red', cursor: 'pointer' }}>
      <Col>
        <h2>Contact</h2>
      </Col>
    </Row>
  </>
);

export default Home;
