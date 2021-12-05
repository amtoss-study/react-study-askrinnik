import { useContext } from "react";
import { User } from "types";
import UserContext from "UserContext";

const useUsers = () => {
    const { users, setUsers } = useContext(UserContext);

    const addUser = (newUser: User) =>
        setUsers([...users, { ...newUser, id: Date.now() }]);

    const removeUser = (id: number) =>
        setUsers(users.filter((user) => user.id !== id));

    const updateUser = (user: User) =>
        setUsers(users.map((u) => (u.id === user.id ? user : u)));

    const getUser = (id: number) => users.find((user) => user.id === id);

    return { users, setUsers, addUser, removeUser, updateUser, getUser };
};

export default useUsers;
