import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
    <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/users">Users</Link>
    </nav>
);

export default Nav;
