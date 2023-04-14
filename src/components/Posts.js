import React, {useEffect, useState} from 'react';
import {all} from "axios";
import Post from "./Post";

  // 1. Cначала нам нужно вывести все посты. Для этого будем использовать фетч, из которого сделаем компонент Posts
let Posts = ({lift}) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts)
            });
    }, []);

    // 2. А далее мы вызовем каждый отдельный пост из компонента Post

    return (
        <>
            {
                posts.map(value => <Post post={value} key={value.id} lift={lift}/>) // Довго розбирався що куди передавати, але все вийшло. Передаємо в post iтеруємий обʼєкт
            }
        </>
    );

}




export default Posts;