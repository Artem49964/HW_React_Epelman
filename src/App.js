import './App.css';
import React, {useEffect, useState} from "react";
import Posts from "./components/Posts";
import Button from "./components/Button";



// 3. Третьим шагом мы добавим компонент Post в наш App (App будем наполнять только компонентами)
function App() {

    const lift = (obj) => {
        console.log(obj);
    }




    return (

    <>
        <Posts lift={lift}/>
    </>

    )


}
export default App
