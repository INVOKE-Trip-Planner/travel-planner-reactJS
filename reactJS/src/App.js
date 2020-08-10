import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/header.js";
import Login from "./containers/auth/login/login.js";
import Register from "./containers/auth/register/register.js";

function App() {
  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
