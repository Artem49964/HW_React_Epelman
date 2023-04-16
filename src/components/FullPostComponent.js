import React, {useEffect, useState} from 'react';

const FullPostComponent = ({value}) => {

    const [fillId, setFillId] = useState(null)

    useEffect(() => {
        setFillId(fillId)
    },[])

    return (
        <div>
            {

            }
        </div>
    );
};

export default FullPostComponent;