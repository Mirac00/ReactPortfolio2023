import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Documents from './components/pages/Documents';
import './components/utilities/i18n';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Services' component={Services} />
          <Route path='/Documents' component={Documents} />
        </Switch>
        <div className="contact">
          <Contact />
        </div>
      </Router>
    </div>
  );
}

export default App;