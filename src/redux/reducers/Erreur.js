import { SET_MESSAGE_ERREUR } from './../actions/Erreur.js';

const initialState = {
  message : ""
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_MESSAGE_ERREUR :
      return Object.assign({}, state, {
        message: action.value
    });
    default :
      return state;
  }
}


export function getMessageErreur(state) {
  return state.erreur.message;
}
