import React from "react";
// import logo from './logo.svg';
import "./styles/main.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Digital from "./digital";
import Work from "./work";

function WorkNav() {
  return (
    <div className="container work">
      <div className="wrapper work">
        <main className="main-content">
          <div className="content-container">
            <div id="work-page" className="work-page content visible">
                <Router>
                    <Switch>
                        <Route exact path='/work/digital' component={Digital}/>
                        <Route path='/work' component={Work}/>
                    </Switch>
                </Router>
            </div>
          </div>
        </main>
      </div>
    </div>

  );
}

export default WorkNav;
