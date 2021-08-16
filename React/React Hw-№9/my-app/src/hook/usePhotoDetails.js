import { useEffect, useState } from "react";
import { fetchPhotoDetails } from "../store/actions/ListActions";

export default function usePhotoDetails(id) {
    const [details, setDetails] = useState({})

    useEffect(() => fetchPhoto(), [id])

    function fetchPhoto(){
        fetchPhotoDetails(id, setDetails)
    } 

    return {details}
}


