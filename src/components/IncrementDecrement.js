import React, {useEffect, useState} from 'react';

const IncrementDecrement = () => {
    let [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log(counter)
        setCounter(counter++)
    },)

    const increment = () => console.log(++counter)
    const decrement = () => console.log(--counter)

    return (

        <div>
            <h2> value =>{counter}</h2>

            <button onClick={increment}>increment</button>

            <button onClick={decrement}>decrement</button>





        </div>

    )
};

export default IncrementDecrement;