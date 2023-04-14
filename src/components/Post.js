import React from 'react';
import Posts from "./Posts";

const Post = ({post, lift}) => {

    return(
       <>
            {
                <div>
                    <p>post Id - {post.id}</p>
                    <p>post Title - {post.title}</p>
                    <button onClick={() => {
                    lift(post)}
                    }>Console details</button>
                </div>

            }
       </>
    )





};

export default Post;