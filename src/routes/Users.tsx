import AddUserForm from "components/AddUserForm";
import UserList from "components/UserList";
import { User } from "types";

const Users = ({
    users,
    setUsers,
}: {
    users: User[];
    setUsers: (users: User[]) => void;
}) => (
    <>
        <AddUserForm
            onSubmitFunc={(newUser) => setUsers([...users, newUser])}
        />
        <UserList
            userList={users}
            removeUser={(id) =>
                setUsers(users.filter((user) => user.id !== id))
            }
        />
    </>
);

export default Users;
