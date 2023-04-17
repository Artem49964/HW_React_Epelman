import './App.css';
import React, {useEffect, useState} from "react";
import Users from "./components/Users";
import User from "./components/User";
import UserPost from "./components/UserPost";




function App() {

        const lift = (obj) => {
                console.log(obj);
        }

return (
        <>
            {
                    <div>
                            <Users/>
                            <UserPost lift={lift}/>
                   </div>



            }

        </>
)


export default App
