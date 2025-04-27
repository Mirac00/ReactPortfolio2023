import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Documents from './components/pages/Documents';
import './i18n';

const PageWithMargin = ({ component: Component }) => (
  <div style={{ marginTop: '100px' }}>
    <Component />
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={() => <PageWithMargin component={Home} />} />
          <Route path='/Services' component={() => <PageWithMargin component={Services} />} />
          <Route path='/Documents' component={() => <PageWithMargin component={Documents} />} />
        </Switch>
        <div className="contact">
          <Contact />
        </div>
      </Router>
    </div>
  );
}


export default App;
