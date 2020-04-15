import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './styles/main.css';
import Work from './work';
import Nav from './nav';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

     <Router>
        <div class="container work">
          <div class="wrapper work">
              <Nav />
              <Switch>
                <Route exactly component={Work} pattern="/" />
              </Switch>
          </div>
        </div>
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
