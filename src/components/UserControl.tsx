import { Link } from "react-router-dom";
import { User } from "types";

type UserControlParams = {
    user: User;
    removeUser: (id: number) => void;
};

const UserControl = ({ user, removeUser }: UserControlParams) => (
    <tr>
        <td>
            <Link to={`/users/${user.id}`}>{user.firstName}</Link>
        </td>
        <td>{user.lastName}</td>
        <td>{user.phone}</td>
        <td>
            <button type="button" onClick={() => removeUser(user.id)}>
                Remove
            </button>
        </td>
    </tr>
);

export default UserControl;
