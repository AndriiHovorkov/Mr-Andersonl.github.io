import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import usePhotoAlbum from '../../hook/usePhotoAlbum';

function PhotoAlbum() {
    const {params} = useRouteMatch()

    const {details} = usePhotoAlbum(params.id); 

    console.log(params)
    console.log(details)
    return (
        <div>
            <h2>Photo Details Album</h2> 
            {details.map((item) => {
                return (
                    <img src={item.url}/> 
                );
            })}
        </div>
    )
        
    
}

export default PhotoAlbum;