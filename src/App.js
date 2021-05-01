import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
              <Link to="/web-articules">Web Articles</Link>
            </li>
            <li>
              <Link to="/local-articles">Local Articles</Link>
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
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
