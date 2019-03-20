import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';

const About = ({ history }) => (
  <Row>
    <Col>
      <h1>About</h1>
      <p style={{ maxWidth: '75%', marginBottom: '30px', marginTop: '30px' }}>
        Very Good Software Company is the creation of me, Sean Robertson. The goal
        of this company is to put forth software products that are cutting-edge yet
        accessible to anyone. Using my experience in enterprise technology at
        major companies like NBC and Groupon, my goal is to bring the latest
        practices in web development to small-to-midsize companies that often
        are forced to work with agencies that utilize out-dated technologies all
        while charging an arm and a leg.
      </p>
      <p style={{ maxWidth: '75%' }}>
        All the solutions used at Very Good Software Company are custom built
        with the client and their customers in mind. Websites should be fast, easy
        and accessible. Shoot us a message at the <a href="/contact">contact page</a>
        to get a consultation.
      </p>
    </Col>
  </Row>
);

export default About;
