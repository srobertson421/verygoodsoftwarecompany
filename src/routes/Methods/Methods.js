import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Nav from '../../components/Nav';

const Methods = ({ history }) => (
  <>
    <Nav
      backPath="/work"
      backText="What We've Done"
      forwardPath="/about"
      forwardText="Who We Are"
      history={history}
    />
    <Row>
      <Col>
        <h1>Methods</h1>
        <p>Describe tech stuff</p>
      </Col>
    </Row>
  </>
);

export default Methods;
