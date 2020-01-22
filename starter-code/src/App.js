import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';
// import countries from '../data/countries.json';


function App() {
  return (
    <div className="">
      <Nav />
      <div className="container">
        <div className="row">
          <Home />
          <Switch>
            <Route exact path='/countrydetail/:id' component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
