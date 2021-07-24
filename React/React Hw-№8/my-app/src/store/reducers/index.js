import { ACTION_ADD, ACTION_DELITE, ACTION_SEE } from "../actions/ListActions";

const initialState ={
    items:[],
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
        default: return state;
    }
}