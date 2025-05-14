import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './sections/Contact';
import Documents from './pages/Documents';
import './utilities/i18n';

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