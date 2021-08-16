const USER_URL = 'https://jsonplaceholder.typicode.com/users'

    export function deleteTodoItem(id) {
        fetch(USER_URL + id, {
            method: 'DELETE',
        });
    }

    export function addTodoItem(newTodo) {
        fetch(USER_URL, {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((resp) => resp.json())
    } 


