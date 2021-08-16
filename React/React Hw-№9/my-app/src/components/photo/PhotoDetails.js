import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import usePhotoDetails from '../../hook/usePhotoDetails';

function PhotoDetails() {
    const {params} = useRouteMatch()
    const {details} = usePhotoDetails(params.id); 
    console.log(params)
    return (
        <div>
            <h2>Photo Details</h2>
            <img src={details.url}/> 
        </div>
    );
}

export default PhotoDetails;