import { User } from "types";
import UserControl from "components/UserControl";

const UserList = ({
    userList,
    removeUser,
}: {
    userList: User[];
    removeUser: (id: number) => void;
}) => (
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
                {userList.map((item) => (
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

export default UserList;
