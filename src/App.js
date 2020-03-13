import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavLink exact activeClassName="active" to ="/">Home</NavLink>
        <NavLink activeClassName="active" to ="/about">About</NavLink>
        <NavLink activeClassName="active" to ="/contact">Contact</NavLink>
        <NavLink activeClassName="active" to ="/services">Services</NavLink>
        <NavLink  activeClassName="active" to ="/portfolio">Portfolio</NavLink>

        
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about/:id" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route  exact path="/portfolio" component={Portfolio}></Route>
        </Switch>
    </Router>
  );
}

export default App;
