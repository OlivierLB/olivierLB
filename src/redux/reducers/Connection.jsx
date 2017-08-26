import { SET_CONNECTION_MDP, SET_CONNECTION_ID } from './../actions/Connection.js';

const initialState = {
    mdp : '',
    id : ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CONNECTION_MDP :
      return Object.assign({}, state, {
        mdp: action.infos
      });
    case SET_CONNECTION_ID :
      return Object.assign({}, state, {
        id: action.infos
      });
    default :
      return state;
  }
}

export function getInfosConnectionMdp(state) {
  return state.connection.mdp;
}

export function getInfosConnectionId(state) {
  return state.connection.id;
}
