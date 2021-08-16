import { useEffect, useState } from "react";
import { fetchPhotoAlbum } from "../store/actions/ListActions";

export default function usePhotoAlbum(id) {
    const [details, setDetails] = useState([])

    useEffect(() => fetchAlbum(), [id])

     
    

    function fetchAlbum(){
        fetchPhotoAlbum(id, setDetails)
    } 

    return {details}
}