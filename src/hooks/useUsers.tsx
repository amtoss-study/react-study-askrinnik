import api from "api";
import { useCallback, useContext } from "react";
import { User } from "types";
import UserContext from "UserContext";

const useUsers = () => {
    const apiEndpoint = "users";
    const { users, setUsers } = useContext(UserContext);

    const addUser = (newUser: User) => {
        api.post(apiEndpoint, newUser).then((createdUser: User) =>
            setUsers([...users, createdUser])
        );
    };

    const removeUser = (id: number) =>
        setUsers(users.filter((user) => user.id !== id));

    const updateUser = (user: User) =>
        setUsers(users.map((u) => (u.id === user.id ? user : u)));

    const getUser = (id: number) => users.find((user) => user.id === id);

    const retrieveUsers = useCallback(
        () => api.get(apiEndpoint).then((data: User[]) => setUsers(data)),
        [setUsers]
    );

    return {
        users,
        addUser,
        removeUser,
        updateUser,
        getUser,
        retrieveUsers,
    };
};

export default useUsers;
