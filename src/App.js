import './App.css';
import React, {useEffect, useState} from "react";
import Users from "./components/Users";
import User from "./components/User";




function App() {

    const lift = (lift) => {
        console.log(<Users lift={lift}/>)
    }

return (
    <>
        {
            <User lift={lift} />
        }
    </>
)

}
export default App
