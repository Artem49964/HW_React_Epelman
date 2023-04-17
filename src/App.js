import './App.css';
import React, {useEffect, useState} from "react";
import Posts from "./components/Posts";
import FullPostComponent from "./components/FullPostComponent";



// 3. Третьим шагом мы добавим компонент Post в наш App (App будем наполнять только компонентами)
function App() {

    const [post, setPost] = useState(null)

    useEffect(() => {
       

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
