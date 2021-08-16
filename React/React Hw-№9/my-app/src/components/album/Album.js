import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItemAlbum } from '../../store/actions/ListActions';
import './Album.css';

export default function Album () {
    const {items} = useSelector((state) => ({
        items: state.items
    }));
    


      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchItemAlbum())
      },[])

        return  (
            <div>
                    {items.map((item) => {
                        return (
                            <div key={item.id}>
                                <Link to={'/PhotoNavigation/'+ item.id} >{item.title}</Link> 
                            </div>
                        );
                    })}
            </div> 
        ) 
        
            
        
}
