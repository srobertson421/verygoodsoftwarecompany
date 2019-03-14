import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Work from './routes/Work';
import Contact from './routes/Contact';
import Methods from './routes/Methods';

import Container from './components/Container';

const Routes = () => (
  <Router>
    <>
      <Switch>
        <Container customStyles={{ height: '100vh' }}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/methodology" component={Methods} />
        </Container>
      </Switch>
    </>
  </Router>
);

export default Routes;
