import React from 'react';
import Users from "./Users";


const User = ({value}) => {

const {id, name, username, email} = value;

    return (
        <>
            {
                <div className={'userInfo'}>
                    <p>id - {id}</p>
                    <p>name - {name}</p>
                    <p>username - {username}</p>
                    <p>email - {email}</p>
                    <button>Details</button>
                    <hr/>
                </div>
            }
        </>
    )

}

export default User;