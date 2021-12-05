import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { User } from "types";
import Home from "routes/Home";
import Nav from "routes/Nav";
import Users from "routes/Users";
import { UserContextProvider } from "UserContext";

const App = () => {
    return (
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
};

export default App;
