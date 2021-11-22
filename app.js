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


const UserControl = ({ user }) => (
    <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.phone}</td>
    </tr>
);


const UserList = ({ userList }) => (
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
                    userList.map(item => <UserControl key={item.id} user={item} />)
                }
            </tbody>
        </table>
    </div>);


const AddUserForm = ({onSubmitFunc}) => {
    const [newUser, setNewUser] = React.useState(
    {
        firstName: '',
        lastName: '',
        phone: '',
    });
    return (
        <form
            onSubmit={ event => {
                event.preventDefault();
                onSubmitFunc({...newUser, id:Date.now()});
            }}
        >
            <input placeholder='First Name' onChange={event => newUser.firstName = event.target.value } />
            <input placeholder='Last Name'  onChange={event => newUser.lastName = event.target.value }  />
            <input placeholder='Phone'      onChange={event => newUser.phone =event.target.value }     />
            <br/><button type="submit">Add User</button>
        </form>
    );
}

const App = () => {
    const [users, setUsers] = React.useState(initUsers);
    return (
        <div>
           <h2>Home Task #1</h2>
           <UserList  userList={users} />
           <h3>Enter new user data</h3>
           <AddUserForm onSubmitFunc={ 
               newUser => setUsers([...users, newUser]) 
               }/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('react-root'));
