import { useHistory } from "react-router-dom";

import EditUserControl from "components/EditUserControl";
import useUsers from "hooks/useUsers";
import { useParams } from "react-router";
import { User } from "types";

const Edit = () => {
    const history = useHistory();
    const { userId } = useParams<{ userId: string }>();
    const { updateUser, getUser } = useUsers();
    const user = getUser(parseInt(userId, 10));

    if (user === undefined)
        return <div>A user with id={userId} was not found</div>;

    return (
        <div>
            <h3>Edit user</h3>
            <EditUserControl
                inputUser={user}
                buttonCaption="Edit User"
                onSubmit={(updatedUser: User) => {
                    updateUser(updatedUser);
                    history.push("/users");
                }}
            />
        </div>
    );
};

export default Edit;
