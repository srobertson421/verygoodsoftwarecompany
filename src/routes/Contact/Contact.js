import React, { useState } from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';

import styles from './Contact.module.css';

const Contact = ({ history }) => {

  const [ formState, setFormState ] = useState({
    name: '',
    email: '',
    message: '',
  });

  function contactSubmit(e) {
    fetch("/.netlify/functions/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formState })
    }).then((response) => {
      console.log('Sent message successfully!');
      console.log(response);
    }).catch(error => console.log(error));

    e.preventDefault();

    setFormState({
      name: '',
      email: '',
      message: '',
    });
  }

  return (
    <Row>
      <Col>
        <h1>Contact</h1>
        <form name="contact" className={styles.contactForm} onSubmit={contactSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formState.name}
              onChange={e => setFormState({ ...formState, name: e.target.value })}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Contact Email"
              value={formState.email}
              onChange={e => setFormState({ ...formState, email: e.target.value })}
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              row="6"
              col="3"
              placeholder="Enter Message"
              value={formState.message}
              onChange={e => setFormState({ ...formState, message: e.target.value })}
              required
            />
            <button style={{ color: '#0b2645' }} type="submit">Send Message</button>
          </fieldset>
        </form>
      </Col>
    </Row>
  );
};

export default Contact;
