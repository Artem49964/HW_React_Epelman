import React, {useEffect, useState} from "react";


const [post, setPost] = useState([])

const UserPost = ({lift}) => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(post => {
            setPost(post)
        })

    useEffect(() => {
        post.map(post => )
    }, [])




    return (





        <div>

        </div>
    );
};

export default UserPost;