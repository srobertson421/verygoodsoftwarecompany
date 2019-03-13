import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';

import Container from './components/Container';
import Nav from './components/Nav';

const Routes = () => (
  <Router>
    <>
      <Nav />
      <Switch>
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Container>
      </Switch>
    </>
  </Router>
);

export default Routes;
