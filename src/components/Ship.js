import React from 'react';
import Ships from "./Ships";

const Ship = ({value}) => {



        return(

            <>
                    {
                            <div>
                                    <p>launch_year - {value.launch_year}</p>
                                    <p>mission_name - {value.mission_name}</p>
                                    <img src={value.links.mission_patch_small}/>

                            </div>

                    }
            </>
            )



};

export default Ship;