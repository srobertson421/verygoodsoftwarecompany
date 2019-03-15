import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Nav from '../../components/Nav';

const Contact = ({ history }) => (
  <>
    <Nav
      backPath="/about"
      backText="About"
      includeForwardLink={false}
      history={history}
    />
    <Row>
      <Col>
        <h1>Contact</h1>
        <p>Don't</p>
      </Col>
    </Row>
  </>
);

export default Contact;
