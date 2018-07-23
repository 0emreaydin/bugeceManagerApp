import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Partners } from './components/Partners';
import { Report } from './components/Report';
import { WhyBugece } from './components/WhyBugece';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WhyBugece />
      </div>
    );
  }
}

export default App;
