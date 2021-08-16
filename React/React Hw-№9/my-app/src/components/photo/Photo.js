import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import { fetchItemPhoto } from '../../store/actions/ListActions';


function Photo() {
    const {items} = useSelector((state) => ({
        items: state.items
    }));
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchItemPhoto())
    },[])
    
    return  (
        <div>
            {items.map((item) => {
                return (
                    <div key={item.id}>
                        <img src ={item.url}/>
                    </div>
                );
            })}
        </div> 
    ) 
}

export default Photo;