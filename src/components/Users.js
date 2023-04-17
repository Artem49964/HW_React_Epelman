import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = () => {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => {
                setUsers(user)
            })

    }, []);



    return (

               <>
                   {
                users.map(user => <User value={user} key={users.id}/>)
                   }

                       </>

    )
};

export default Users;