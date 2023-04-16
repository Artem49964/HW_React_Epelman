import React from 'react';
import Posts from "./Posts";

const Post = ({post, setPost}) => {
    const {id, title} = post
    return(
       <div>
                <div>post id - {id}</div>
                <div>post title: - {title}</div>
                <button onClick={() => {
                    setPost(post)}
                    }>Details
                </button>
       </div>
    )

};

export default Post;