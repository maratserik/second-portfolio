import React from 'react';
import './App.css';
import Page1 from "./components/page1"
import Page2 from "./components/page2"
import Page3 from "./components/page3"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return(
    <Router>
      <div>
          <Switch>
            <Route path = "/" exact component = {Page1} />
            <Route path = "/projects" component = {Page2} />
            <Route path = "/about" component = {Page3} />
          </Switch>
      </div>
    </Router>
  )
}


export default App;
