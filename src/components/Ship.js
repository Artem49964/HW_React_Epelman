import React from 'react';
import Ships from "./Ships";

const Ship = ({value}) => {

        return(

            <>
                    {
                            <div>
                                    <p>value.flight_number</p>
                                    <p>value.mission_name</p>
                                    <p>value.launch_date_local</p>
                                    <p>value.tbd</p>


                            </div>

                    }



            </>
            )



};

export default Ship;