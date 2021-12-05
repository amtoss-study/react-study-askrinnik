import React from "react";
import { User } from "types";

type EditUserControlParams = {
    inputUser: User;
    buttonCaption: string;
    onSubmit: (user: User) => void;
};

const EditUserControl = ({
    inputUser,
    buttonCaption,
    onSubmit,
}: EditUserControlParams) => {
    const [user, setUser] = React.useState<User>(inputUser);
    return (
        <form
            autoComplete="off"
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit(user);
            }}
        >
            <input
                value={user.firstName}
                placeholder="First Name"
                onChange={(event) =>
                    setUser({
                        ...user,
                        firstName: event.target.value,
                    })
                }
            />
            <input
                value={user.lastName}
                placeholder="Last Name"
                onChange={(event) =>
                    setUser({ ...user, lastName: event.target.value })
                }
            />
            <input
                value={user.phone}
                placeholder="Phone"
                onChange={(event) =>
                    setUser({ ...user, phone: event.target.value })
                }
            />
            <br />
            <button type="submit">{buttonCaption}</button>
        </form>
    );
};

export default EditUserControl;
