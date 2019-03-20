import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import Nav from './components/Nav';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Work = lazy(() => import('./routes/Work'));
const Contact = lazy(() => import('./routes/Contact'));
const Methods = lazy(() => import('./routes/Methods'));

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Container customStyles={{ height: '96vh' }}>
          <Route path="/" exact render={(props) => <Home {...props} /> } />
          <Route path="/about" render={(props) => (
              <>
                <Nav
                  backPath="/methodology"
                  backText="Tech"
                  forwardPath="/contact"
                  forwardText="Contact"
                  history={props.history}
                />
                <About {...props} />
              </>
          )} />
          <Route path="/work" render={(props) => (
              <>
                <Nav
                  includeBackLink={false}
                  forwardPath="/methodology"
                  forwardText="Tech"
                  history={props.history}
                />
                <Work {...props} />
              </>
          )} />
          <Route path="/contact" render={(props) => (
              <>
                <Nav
                  backPath="/about"
                  backText="About"
                  includeForwardLink={false}
                  history={props.history}
                />
                <Contact {...props} />
              </>
          )} />
          <Route path="/methodology" render={(props) => (
            <>
              <Nav
                backPath="/work"
                backText="Work"
                forwardPath="/about"
                forwardText="About"
                history={props.history}
              />
              <Methods {...props} />
            </>
          )} />
        </Container>
      </Switch>
      <small style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '0.7rem',
      }}>&#169; Very Good Software Company 2019</small>
    </Suspense>
  </Router>
);

export default Routes;
