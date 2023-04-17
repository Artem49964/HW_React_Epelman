import React, {useEffect, useState} from 'react';
import Ship from "./Ship";



const Ships = () => {

        const [ships, setShips] = useState([])

        useEffect(() => {
            fetch('https://api.spacexdata.com/v3/launches/')
                .then(response => response.json())
                .then(ship => {
                    setShips(ship)
                })
        }, [])

        return (
            <>
                    {
                        ships.map(ship => <Ship value={ship}/>)
                    }

            </>
        )
}

export default Ships;