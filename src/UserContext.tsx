import React from "react";
import { User } from "types";

type UserContextType = {
    users: User[];
    setUsers: (users: User[] | ((prevUsers: User[]) => User[])) => void;
};

const UserContext = React.createContext<UserContextType>({
    users: [],
    setUsers: () => {},
});

export const UserContextProvider: React.FunctionComponent = ({ children }) => {
    const [users, setUsers] = React.useState<User[]>([]);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
