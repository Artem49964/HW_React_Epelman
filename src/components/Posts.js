import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Post from "./Post";
import FullPostComponent from "./FullPostComponent";


let Posts = () => {

    let [posts, setPosts] = useState([]);

    let [post, setPost] = useState(null)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.data)
            .then(value => {
                setPosts(value)
            });
    }, []);



    return (
        <>
            {
                post && (
                    <div>
                        userId - {post.userId}
                        postId - {post.id}
                        title - {post.title}
                        body - {post.body}
                    </div>
                )
            }

            {
                posts.map(post => <Post key={post.id} post={post} setPost={setPost}/>)
            }
        </>
    );

}




export default Posts;