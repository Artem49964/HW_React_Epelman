import React, {useEffect, useState} from 'react';
import Ship from "./Ship";

const Ships = ({ship}) => {



              const [ships, setShips] = useState([])

                useEffect(() => {
                fetch('https://api.spacexdata.com/v3/launches/')
                .then(value => value.json())
                .then(ship => {
                    setShips(ship)
            })
            },[])

    return(
        <>
            {
                ships.map(value => <Ship value={value} key={value.id}/>)

            }
        </>
    )


}

export default Ships;