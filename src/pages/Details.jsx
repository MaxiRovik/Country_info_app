import React from 'react';
import {useParams} from "react-router-dom";


const Details = () => {
    let param = useParams();
    console.log(param)
    return (
        <div>
            Details {param.name}
        </div>
    );
};

export default Details;