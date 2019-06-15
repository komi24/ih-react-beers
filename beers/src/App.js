import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Beers from './components/pages/Beers';
import RandomBeer from './components/pages/RandomBeer';
import NewBeer from './components/pages/NewBeer';
import Navbar from './components/utils/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
      </Switch>

    </div>
  );
}

export default App;
