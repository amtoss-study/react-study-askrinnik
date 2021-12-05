import AddUserForm from "components/AddUserForm";
import UserList from "components/UserList";
import React from "react";
import UserContext from "UserContext";

const Users = () => {
    const { users, setUsers } = React.useContext(UserContext);
    return (
        <>
            <AddUserForm
                onSubmitFunc={(newUser) => setUsers([...users, newUser])}
            />
            <UserList
                removeUser={(id) =>
                    setUsers(users.filter((user) => user.id !== id))
                }
            />
        </>
    );
};

export default Users;
