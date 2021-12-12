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

    const removeUser = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
        api.del(`${apiEndpoint}/${id}`)
            .catch(() => setUsers(users));
    };

    const updateUser = (user: User) => 
        api.put(`${apiEndpoint}/${user.id}`, user).then((updatedUser: User) =>
            setUsers(users.map((u) => (u.id === user.id ? updatedUser : u))));
    

    const getUser = (id: number) => users.find((user) => user.id === id);

    const fetchUser = useCallback((id: number) => {
        // const user = getUser(id);
        // if( user === undefined)
        api.get(`${apiEndpoint}/${id}`).then((data: User) => setUsers(prevUsers => [...prevUsers.filter( u => u.id !== id), data]));
    }, [setUsers]);

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
        fetchUser,
    };
};

export default useUsers;
