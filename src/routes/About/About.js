import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Nav from '../../components/Nav';

const About = ({ history }) => (
  <>
    <Nav
      backPath="/methodology"
      backText="Tech"
      forwardPath="/contact"
      forwardText="Contact"
      history={history}
    />
    <Row>
      <Col>
        <h1>About</h1>
        <p>We make good software...that is all.</p>
        <p>End of About page</p>
      </Col>
    </Row>
  </>
);

export default About;
