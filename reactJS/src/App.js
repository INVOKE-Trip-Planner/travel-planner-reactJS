import React from 'react';

import './App.css';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Home from "./containers/home/home.js";
import Dashboard from "./containers/trips/dashboard.js";
import AddTrip from "./containers/trips/addTrip.js";
import Login from "./containers/auth/login/login.js";
import Register from "./containers/auth/register/register.js";
import TripDetails from "./containers/trips/tripDetails.js";

import { store, persistor } from "./store/index";
import Profile from './containers/profile/profile';
import TriposoArticle from './containers/triposo/test';

function App() {
  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <Router>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              {/* <Route exact path="/dashboard/:id" component={TripDetails} /> */}
              {/* <Route exact path="/addtrip" component={AddTrip} /> */}
              {/* <Route exact path="/profile" component={Profile} /> */}
              {/* <Route path="/login" component={Login}/> */}
              {/* <Route path="/register" component={Register}/> */}
              {/* <Route path="/discover" component={TriposoArticle} /> */}
            </Switch>
          {/* <Footer /> */}
        </Router>

      </PersistGate>
    </Provider>
    </>
  );
}

export default App;
