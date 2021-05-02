import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from './components/home/Home';
import WebEntriesList from './components/webentrieslist/WebEntriesList';
import LocalEntriesList from './components/localentrieslist/LocalEntriesList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeStyle={{ color: 'red' }}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/web-articules" activeStyle={{ color: 'red' }}>Web Articles</NavLink>
            </li>
            <li>
              <NavLink to="/local-articles" activeStyle={{ color: 'red' }}>Local Articles</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/web-articules">
            <WebEntriesList />
          </Route>
          <Route path="/local-articles">
            <LocalEntriesList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
