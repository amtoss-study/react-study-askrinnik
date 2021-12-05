import UserControl from "components/UserControl";
import useUsers from "hooks/useUsers";

const UserList = () => {
    const { users, removeUser } = useUsers();
    return (
        <div>
            <h3>Users</h3>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => (
                        <UserControl
                            key={item.id}
                            user={item}
                            removeUser={removeUser}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
