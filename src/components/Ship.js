import React from 'react';
import Ships from "./Ships";

const Ship = ({value}) => {

    if (value.launch_year != 2002) {
        return (
            <>
                {
                    <div>

                        <p>{value.launch_year}</p>
                        <p>{value.mission_name}</p>
                        <img src={value.mission_patch_small}/>
                    </div>

                }
            </>
        )

    }
    ;
}

export default Ship;