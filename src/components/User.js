import React from 'react';
import Users from "./Users";


const User = ({user, lift}) => {

    return (
        <div>

            {
                <button onClick={lift}>Details</button>
            }
            <p>{user.name}</p>
        </div>
    );
};

export default User;