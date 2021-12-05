import useUsers from "hooks/useUsers";
import React from "react";
import { User } from "types";

const AddUserForm = () => {
    const { addUser } = useUsers();
    const [newUser, setNewUser] = React.useState<User>({
        id: 0,
        firstName: "",
        lastName: "",
        phone: "",
    });
    return (
        <div>
            <h3>Enter new user data</h3>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    addUser(newUser);
                }}
            >
                <input
                    placeholder="First Name"
                    onChange={(event) =>
                        setNewUser({
                            ...newUser,
                            firstName: event.target.value,
                        })
                    }
                />
                <input
                    placeholder="Last Name"
                    onChange={(event) =>
                        setNewUser({ ...newUser, lastName: event.target.value })
                    }
                />
                <input
                    placeholder="Phone"
                    onChange={(event) =>
                        setNewUser({ ...newUser, phone: event.target.value })
                    }
                />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUserForm;
