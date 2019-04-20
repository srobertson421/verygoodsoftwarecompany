import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';

import rdLogo from '../../assets/images/robertsondevelopment.png';

const Work = ({ history }) => (
  <>
    <Row style={{ marginBottom: '20px' }}>
      <Col>
        <h1>Work</h1>
      </Col>
    </Row>
    <Row>
      <Col></Col>
    </Row>
    <Row>
      <Col>
        <h2 style={{ fontSize: '0.9rem', marginBottom: '15px' }}>Robertson Marketing &amp; Development</h2>
        <img
          onClick={() => window.open('https://robertson-development.com', '_blank')}
          style={{ display: 'flex', maxWidth: '65%' }}
          alt="Robertson Marketing and Development"
          src={rdLogo}
        />
      </Col>
    </Row>
  </>
);

export default Work;
