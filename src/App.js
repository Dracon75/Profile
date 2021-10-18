
import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from
  'react-router-dom';
import './App.css';
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Skills from "./pages/skills";
import Services from "./pages/services";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/skills' component={Skills} />
        <Route path='/services' component={Services} />
      </Switch>
    </Router>
  );
}

export default App;
