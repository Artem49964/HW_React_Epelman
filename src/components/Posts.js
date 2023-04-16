import React, {useEffect, useState} from 'react';
import {all} from "axios";
import Post from "./Post";
import FullPostComponent from "./FullPostComponent";

  // 1. Cначала нам нужно вывести все посты. Для этого будем использовать фетч, из которого сделаем компонент Posts
let Posts = ({value}) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts)
            });
    }, []);



    return (
        <>
            {
                posts.map(value => <Post post={value}
                                         key={value.id}
                                         lift={value}/>)


            }
        </>
    );

}




export default Posts;