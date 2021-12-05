import useUsers from "hooks/useUsers";
import { User } from "types";
import EditUserControl from "./EditUserControl";

const AddUserForm = () => {
    const { addUser } = useUsers();
    const newUser: User = {
        id: 0,
        firstName: "",
        lastName: "",
        phone: "",
    };
    return (
        <div>
            <h3>Enter new user data</h3>
            <EditUserControl
                inputUser={newUser}
                buttonCaption="Add User"
                onSubmit={addUser}
            />
        </div>
    );
};

export default AddUserForm;
