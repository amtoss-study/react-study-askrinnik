import React from 'react';
import './App.css';
import { User } from 'types';
import AddUserForm from 'components/AddUserForm';
import UserList from 'components/UserList';

const initUsers: User[] =
    [
        {
            id: 0,
            firstName: "Ivan",
            lastName: "Ivanov",
            phone: "(050) 653-9041",
        },
        {
            id: 1,
            firstName: "Petro",
            lastName: "Petrov",
            phone: "(097) 653-9041",
        },
    ];

const App = () => {
    const [users, setUsers] = React.useState<User[]>(initUsers);
    return (
        <div>
            <h2>Home Task #2</h2>
            <AddUserForm onSubmitFunc={newUser => setUsers([...users, newUser])} />
            <UserList userList={users} removeUser={id => setUsers(users.filter(user => user.id !== id))} />
        </div>
    );
}

export default App;
