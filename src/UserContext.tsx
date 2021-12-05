import { createContext } from "react";
import { User } from "types";

type UserContextType = {
    users: User[];
    setUsers: (users: User[]) => void;
};

const UserContext = createContext<UserContextType>({
    users: [],
    setUsers: () => {},
});

export default UserContext;
