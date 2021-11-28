import React from "react";
import { User } from "../types";

const AddUserForm = ({ onSubmitFunc }: { onSubmitFunc: (user: User) => void }) => {
    const [newUser, setNewUser] = React.useState<User>(
        {
            id: 0,
            firstName: '',
            lastName: '',
            phone: '',
        });
    return (
        <div>
            <h3>Enter new user data</h3>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    onSubmitFunc({ ...newUser, id: Date.now() });
                }}
            >
                <input placeholder='First Name' onChange={event => setNewUser({ ...newUser, firstName: event.target.value })} />
                <input placeholder='Last Name' onChange={event => setNewUser({ ...newUser, lastName: event.target.value })} />
                <input placeholder='Phone' onChange={event => setNewUser({ ...newUser, phone: event.target.value })} />
                <br /><button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default AddUserForm;