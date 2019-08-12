import React from 'react';
import 'milligram';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import AppList from './pages/AppList';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';


import './App.css';

function App() {
  return (
    <Router >
      <div className="App">
      <Navbar/>
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path= '/apps' exact component = {AppList} />
          <Route component = {NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
