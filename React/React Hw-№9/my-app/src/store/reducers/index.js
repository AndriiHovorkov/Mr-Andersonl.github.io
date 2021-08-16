import { ACTION_ADD, ACTION_DELITE, ACTION_SEE, ACTION_SEE_ALBUM, ACTION_SEE_PHOTO } from "../actions/ListActions";

const initialState ={
    items:[]
}


export default function rootReducer(state = initialState, {type, payload}){
    switch (type) {
        case ACTION_ADD:
            return {...state,items:[...state.items,payload]};
        case ACTION_DELITE:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== payload)
            };
        case ACTION_SEE:
                return {items: payload};  
        case ACTION_SEE_ALBUM:
            return {...state,items:[...payload]};
            case ACTION_SEE_PHOTO:
                return {...state,items:[...payload]};              
        default: return state;
    }
} 



/* export default function rootReducer(state = albumState, {type, payload}){
    switch (type) {
        case ACTION_SEE_ALBUM:
            return {album: payload};
        default: return state;
    }
}  */
/* case ACTION_SEE_ALBUM:
            return {album: payload}; */