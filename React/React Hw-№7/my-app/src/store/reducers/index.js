import { ACTION_ADD, ACTION_CHANGE ,ACTION_UPDATE } from "../actions/ListActions";

const initialState ={
    list:[
        {id: Date.now(), title: "default test", isDone: false}   
    ],
    inputValue: 'test',
}

export default function rootReducer(state = initialState, {type, payload}){
    switch (type) {
        case ACTION_ADD:
            return {...state, list:[...state.list,payload]};
        case ACTION_CHANGE:
            return {...state, inputValue: payload};
        case ACTION_UPDATE:
            return {...state, list:[...state.payload]};
        default: return state;
    }
}