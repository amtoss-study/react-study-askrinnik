import { Switch, Route, useRouteMatch } from "react-router-dom";

import Edit from "./Edit";
import List from "./List";

const Users = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/:userId`} component={Edit} />
            <Route path={match.path} component={List} />
        </Switch>
    );
};

export default Users;
