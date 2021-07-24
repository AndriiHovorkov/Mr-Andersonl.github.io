import { addTodoItem, deleteTodoItem } from "../../apiItem"

const USER_URL = 'https://jsonplaceholder.typicode.com/users'

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

