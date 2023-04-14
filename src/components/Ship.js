import React from 'react';
import Ships from "./Ships";

const Ship = ({value}) => {

        return(

            <>
                    {
                            <div>
                                    <p>flight_number id - {value.flight_number}</p>
                                    <p>mission_name - {value.mission_name}</p>
                                    <p>launch_date_local - {value.launch_date_local}</p>



                            </div>

                    }



            </>
            )



};

export default Ship;