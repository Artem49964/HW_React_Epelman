import React from 'react';
import Posts from "./Posts";

const Post = ({value}) => {

    <Posts/>

    return (
        <div>
            {
                <div>
                    <p> id is {value.id}</p>
                    <p>title is - {value.title}</p>
                </div>

            }
        </div>
    );
};

export default Post;