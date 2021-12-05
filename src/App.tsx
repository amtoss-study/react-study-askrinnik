import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { User } from "types";
import Home from "routes/Home";
import Nav from "routes/Nav";
import Users from "routes/Users";
import UserContext from "UserContext";

const initUsers: User[] = [
    {
        id: 0,
        firstName: "Ivan",
        lastName: "Ivanov",
        phone: "(050) 653-9041",
    },
    {
        id: 1,
        firstName: "Petro",
        lastName: "Petrov",
        phone: "(097) 653-9041",
    },
];

const App = () => {
    const [users, setUsers] = React.useState<User[]>(initUsers);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
