import { SET_ROUTING } from './../actions/Routing.js';

const initialState = {
    adresse : ""
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_ROUTING :
            return Object.assign({}, state, {
                adresse: action.lien
            });
        default :
            return state;
    }
}


export function getRouting(state) {
    return state.router.adresse;
}
