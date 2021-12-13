import { useHistory } from "react-router-dom";

import EditUserControl from "components/EditUserControl";
import useUsers from "hooks/useUsers";
import { useParams } from "react-router";
import { User } from "types";
import { useCallback, useEffect } from "react";

const Edit = () => {
    const history = useHistory();
    const { userId } = useParams<{ userId: string }>();
    const { updateUser, getUser, fetchUser } = useUsers();
    const id = parseInt(userId, 10);
    const user = getUser(id);
    const userExists = user !== undefined;

    const retrieveUser = useCallback(
        (id: number) => {
            if (userExists) {
                return;
            }
            fetchUser(id);
        },
        [fetchUser, userExists]
    );

    useEffect(() => {
        retrieveUser(id);
    }, [retrieveUser, id]);

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
