import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "routes/Home";
import Nav from "routes/Nav";
import Users from "routes/Users/Index";
import { UserContextProvider } from "UserContext";

const App = () => (
    <UserContextProvider>
        <Router>
            <Nav />
            <Switch>
                <Route path="/users" component={Users} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </UserContextProvider>
);

export default App;
