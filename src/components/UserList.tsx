import UserControl from "components/UserControl";
import useUsers from "hooks/useUsers";
import { useEffect, useState } from "react";

const UserList = () => {
    const { users, removeUser, retrieveUsers } = useUsers();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);        
        retrieveUsers()
            .catch(err => setError(`${err}`))
            .finally(() => setLoading(false));
    }, [retrieveUsers]);

    if (error)
        return <p>{error}</p>;

    if (loading)
        return <p>Loading...</p>;

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
