import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = () => {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => {
                setUsers(users)
            })

    }, []);



    return (

               <>
                   {
                users.map(user => <User value={user} key={user.id}/>)
                   }

                       </>

    )
};

export default Users;