import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Place from "./pages/Place";
import PageNotFound from "./pages/404";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/place/:id" component={Place} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    )
}