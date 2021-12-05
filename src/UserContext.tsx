import React from "react";
import { User } from "types";

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

type UserContextType = {
    users: User[];
    setUsers: (users: User[]) => void;
};

const UserContext = React.createContext<UserContextType>({
    users: [],
    setUsers: () => {},
});

export const UserContextProvider: React.FunctionComponent = ({ children }) => {
    const [users, setUsers] = React.useState<User[]>(initUsers);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
