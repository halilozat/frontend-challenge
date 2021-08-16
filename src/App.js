import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import Submit from './components/Submit';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/submit">
            <Submit />
          </Route>
          <Route />

        </Switch>

      </Router>
    </div>
  )
}

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import Add from './pages/Add';
import Home from './pages/Home';
import "./index.css";

function App() {
  return (


    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route />
      </Switch>
    </Router>


  );
}

export default App;
