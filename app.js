const initUsers =
    [
        {
            "id": 0,
            "firstName": "Ivan",
            "lastName": "Ivanov",
            "phone": "(050) 653-9041",
        },
        {
            "id": 1,
            "firstName": "Petro",
            "lastName": "Petrov",
            "phone": "(097) 653-9041",
        },
    ];


const UserControl = ({ item }) => (
    <tr>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.phone}</td>
    </tr>
);


const UserList = ({ users }) => (
    <div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(item => <UserControl key={item.id} item={item} />)
                }
            </tbody>
        </table>
    </div>);


const AddUserForm = ({onSubmit}) => {
    const [newUser, setNewUser] = React.useState(
    {
        firstName: '',
        lastName: '',
        phone: ''
    });
    return (
        <form
            onSubmit={ event => {
                event.preventDefault();
                onSubmit({...newUser, id:Date.now()});
            }}
        >
            <input placeholder='First Name' onChange={event => setNewUser({ ...newUser, firstName: event.target.value })} />
            <input placeholder='Last Name'  onChange={event => setNewUser({ ...newUser, lastName: event.target.value })}  />
            <input placeholder='Phone'      onChange={event => setNewUser({ ...newUser, phone: event.target.value })}     />
            <br/><button type="submit">Add User</button>
        </form>
    );
}

const App = () => {
    const [users, setUsers] = React.useState(initUsers);
    return (
        <div>
           <h2>Home Task #1</h2>
           <UserList  users={users} />
           <h3>Enter new user data</h3>
           <AddUserForm onSubmit={ newUser => setUsers([...users, newUser]) }/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('react-root'));
