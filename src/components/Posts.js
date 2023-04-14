import React, {useEffect, useState} from 'react';
import {all} from "axios";
import Post from "./Post";

let Posts = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts)
            });
    }, []);

}




export default Posts;