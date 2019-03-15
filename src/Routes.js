import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './components/Container';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Work = lazy(() => import('./routes/Work'));
const Contact = lazy(() => import('./routes/Contact'));
const Methods = lazy(() => import('./routes/Methods'));

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Container customStyles={{ height: '100vh' }}>
          <Route path="/" exact render={(props) => <Home {...props} /> } />
          <Route path="/about" render={(props) => <About {...props} /> } />
          <Route path="/work" render={(props) => <Work {...props} /> } />
          <Route path="/contact" render={(props) => <Contact {...props} /> } />
          <Route path="/methodology" render={(props) => <Methods {...props} /> } />
        </Container>
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
