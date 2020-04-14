import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Work from './work';
import Nav from './nav';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    
    <div class="container work">
      <div class="wrapper work">
        <Nav />

      </div>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
