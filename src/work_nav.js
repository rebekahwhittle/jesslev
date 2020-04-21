import React from "react";
// import logo from './logo.svg';
import "./styles/main.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Digital from "./digital";
import Work from "./work";
import Paintings from "./paintings";
import Animations from "./animations";
import Ripe from "./ripe";

function WorkNav() {
    return (
        <div className="container work">
            <div className="wrapper work">
                <main className="main-content">
                    <div className="content-container">
                        <div
                            id="work-page"
                            className="work-page content visible"
                        >
                            <Router>
                                <Switch>
                                    <Route
                                        exact
                                        path="/work/digital"
                                        component={Digital}
                                    />
                                    <Route
                                        exact
                                        path="/work/paintings"
                                        component={Paintings}
                                    />
                                    <Route
                                        exact
                                        path="/work/animations"
                                        component={Animations}
                                    />
                                    <Route
                                        exact
                                        path="/work/ripe"
                                        component={Ripe}
                                    />
                                    <Route path="/" component={Work} />
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
