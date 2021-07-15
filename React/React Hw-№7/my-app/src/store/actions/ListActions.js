export const ACTION_ADD = 'ACTION_ADD'
export function addItem(payload){
    return {type:ACTION_ADD, payload}
}

export const ACTION_UPDATE = 'ACTION_UPDATE'
export function updateItem(payload){
    return {type:ACTION_UPDATE, payload}
}


export const ACTION_CHANGE = 'ACTION_CHANGE'
export function changeItem(payload){
    return {type:ACTION_CHANGE, payload}
}

