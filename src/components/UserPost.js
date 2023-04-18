import React, {useEffect, useState} from "react";




const UserPost = ({lift, value}) => {

    const [post, setPost] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(post => {
                setPost(post)
            })

    }, [])


    return (

        <>
            {
                post.map(post => post.body, value={lift})
            }
        </>
    );
};

export default UserPost;