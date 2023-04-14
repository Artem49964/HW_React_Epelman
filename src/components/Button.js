import React from 'react';
import Post from "./Post";
import Posts from "./Posts";

const Button = () => {



    const click = () => {

console.log('hello')
    }


    return (


        <div>

            <button onClick={click}>'Hello'</button>

        </div>
    );
};

export default Button;