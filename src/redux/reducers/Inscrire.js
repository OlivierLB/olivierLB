import { SET_ETAT_INSCRIRE, SET_INSCRIPTION_ID, SET_INSCRIPTION_MDP } from './../actions/Inscrire.js';

const initialState = {
  inscrireHidden : false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_ETAT_INSCRIRE :
      return Object.assign({}, state, {
        inscrireHidden: action.value
    });
    case SET_INSCRIPTION_ID :
      return Object.assign({}, state, {
        id: action.value
    });
    case SET_INSCRIPTION_MDP :
      return Object.assign({}, state, {
        mdp: action.value
    });
    default :
      return state;
  }
}


export function getEtatInscrire(state) {
  return state.inscrire.inscrireHidden;
}

export function getInscriptionId(state) {
  return state.inscrire.id;
}

export function getInscriptionMdp(state) {
  return state.inscrire.mdp;
}
