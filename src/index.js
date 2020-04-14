import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Work from './work';
import Nav from './nav';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Nav />

    <Work />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
