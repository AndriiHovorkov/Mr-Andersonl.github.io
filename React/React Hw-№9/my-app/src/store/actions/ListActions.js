import { addTodoItem, deleteTodoItem } from "../../apiItem"

const USER_URL = 'https://jsonplaceholder.typicode.com/users'
const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums'
const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos'

export const ACTION_SEE = 'ACTION_SEE'
export function fetchItem(){
    return function(dispatch){
        fetch(USER_URL)
        .then((resp) => resp.json())
        .then(data => dispatch({
            type: ACTION_SEE,
            payload: data
        }))
    }
}
export const ACTION_ADD = 'ACTION_ADD'
export function addItem(newTodo){
    return function(dispatch){
        addTodoItem(newTodo)
        dispatch({
            type:ACTION_ADD,
            payload: newTodo
        })
    }
}

export const ACTION_DELITE = 'ACTION_DELITE'
export function deliteItem(id){
    return function(dispatch){
        deleteTodoItem(id)
        dispatch({
            type:ACTION_DELITE,
            payload:id
        })
    }
}

export const ACTION_SEE_ALBUM = 'ACTION_SEE_ALBUM'
export function fetchItemAlbum(){
    return function(dispatch){
        fetch(ALBUM_URL)
        .then((resp) => resp.json())
        .then(data => dispatch({
            type: ACTION_SEE_ALBUM,
            payload: data
        }))
    }
}

export const ACTION_SEE_PHOTO = 'ACTION_SEE_PHOTO'
export function fetchItemPhoto(){
    return function(dispatch){
        fetch(PHOTO_URL)
        .then((resp) => resp.json())
        .then(data => dispatch({
            type: ACTION_SEE_PHOTO,
            payload: data
        }))
    }
}


export function fetchPhotoDetails(id, set){
        fetch(PHOTO_URL + `/${id}`)
        .then((resp) => resp.json())
        .then(data => set(data))
}

export function fetchPhotoAlbum(id, set){
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then((resp) => resp.json())
    .then(data => set(data))
}





