import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';

const About = ({ history }) => (
  <Row>
    <Col>
      <h1>About</h1>
      <p style={{ maxWidth: '75%', marginBottom: '30px', marginTop: '30px' }}>
        Websites should be fast, easy and accessible. Very Good Software Company brings the 
        latest practices in web development to small- and mid-size companies. All the solutions 
        we design are custom built with the client and their customers in mind. My goal is to 
        create products that are cutting-edge, yet accessible and user-friendly. Having come out 
        of the world of enterprise technology at companies like NBC and Groupon, I believe we offer an 
        alternative to agencies using outdated technologies and overpriced, prepackaged solutions.
      </p>
    </Col>
  </Row>
);

export default About;
