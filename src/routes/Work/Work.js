import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Nav from '../../components/Nav';

const Work = ({ history }) => (
  <>
    <Nav
      includeBackLink={false}
      forwardPath="/methodology"
      forwardText="How We Do It"
      history={history}
    />
    <Row>
      <Col>
        <h1>Work</h1>
        <p>This is where the work will go</p>
      </Col>
    </Row>
  </>
);

export default Work;
