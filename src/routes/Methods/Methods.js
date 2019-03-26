import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';

import styles from './Methods.module.css';

const Methods = ({ history }) => (
  <Row>
    <Col>
      <h1>Services</h1>
      <ul className={styles.servicesList}>
        <li className={styles.servicesListItem}>
          Web App / Site Development
        </li>
        <hr />
        <li className={styles.servicesListItem}>
          Web App / Site Design
        </li>
        <hr />
        <li className={styles.servicesListItem}>
          Custom Domain Management
        </li>
        <hr />
        <li className={styles.servicesListItem}>
          Email Management
        </li>
        <hr />
        <li className={styles.servicesListItem}>
          Technology Consulting
        </li>
        <hr />
        <li className={styles.servicesListItem}>
          Current Website Cost Analysis / Upgrade
        </li>
      </ul>
    </Col>
  </Row>
);

export default Methods;
