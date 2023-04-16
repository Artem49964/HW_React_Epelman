import React from 'react';
import Posts from "./Posts";

const Post = ({value, lift}) => {

    return(
       <>
            {
                <div>
                    <p>post Id - {value.id}</p>
                    <p>post Title - {value.title}</p>
                    <button onClick={() => {
                    lift(value)}
                    }>Console details</button>
                </div>

            }
       </>
    )





};

export default Post;