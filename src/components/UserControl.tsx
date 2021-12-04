import { User } from "types";

const UserControl = ({ user, removeUser }:{user:User, removeUser: (id: number) => void}) => (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.phone}</td>
      <td>
            <button type='button' onClick={() => removeUser(user.id)}>
                Remove
            </button>
        </td>
    </tr>
  );

  export default UserControl;
