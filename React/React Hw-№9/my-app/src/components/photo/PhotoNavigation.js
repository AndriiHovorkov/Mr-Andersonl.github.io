import React from 'react';
import { Route,  Switch, useRouteMatch } from 'react-router-dom';
import Photo from './Photo';
import PhotoAlbum from './PhotoAlbum';
import PhotoDetails from './PhotoDetails';


function PhotoNavigation() {

    const {path} = useRouteMatch()
    return  (
            <div>
    
            <Switch>
                <Route path={`${path}`} exact>
                    <Photo/>
                </Route> 
                <Route path='/PhotoNavigation/Table/:id'>
                    <PhotoAlbum/>
                </Route>
                <Route path='/PhotoNavigation/:id'>
                    <PhotoDetails/>
                </Route>
               
            </Switch>
            </div>
    ) 
}

export default PhotoNavigation;