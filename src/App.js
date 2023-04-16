import './App.css';
import React, {useEffect, useState} from "react";
import Posts from "./components/Posts";
import Button from "./components/Button";
import FullPostComponent from "./components/FullPostComponent";



// 3. Третьим шагом мы добавим компонент Post в наш App (App будем наполнять только компонентами)
function App() {

    const [post, setPost] = useState(null)

    useEffect(() => {
        const lift = (obj) => {
            console.log(lift);
        }

    }, [])


    return (
        <>

            <div className={'leftDiv'}>
                <Posts lift={post}/>

            </div>

            <div>

                <FullPostComponent value={post}/>

            </div>
        </>

    )
}
export default App
