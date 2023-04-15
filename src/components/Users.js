import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = ({lift}) => {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setUser(user)
            },)
    }, [])

    return (
        <div>
            {
                user.map(response => <User user={user} lift={lift}/>)

            }
        </div>
    );
};

export default Users;