import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/movie/:id" children={<App />} />
        </Switch>
    </Router>
    , document.getElementById('app')
);