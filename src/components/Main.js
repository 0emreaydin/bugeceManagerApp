import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import WhyBugece from './WhyBugece';
import Report from './Report';
import Partners from './Partners';
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
      <div>
          <main>
              <Router>
                <div>
                  <Route exact path='/' component={AboutUs}/>
                  <Route path='/info' component={WhyBugece}/>
                  <Route path='/report' component={Report}/>
                  <Route path='/partners' component={Partners}/>
                  <Route path='/contact' component={Contact}/>
                  </div>
              </Router>
          </main>
      </div>
    );
  }
}

export default Main;