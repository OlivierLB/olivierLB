import { SET_LISTE_CLAN, SET_LISTE_MODE , SET_LISTE_MISSION, SET_LISTE_QUALITE } from './../actions/Filtre.js';

const initialState = {
    clan : [],
    mode : [],
    mission : [],
    qualite : []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_LISTE_CLAN :
      return Object.assign({}, state, {
        clan: action.value
      });
    case SET_LISTE_MODE :
      return Object.assign({}, state, {
        mode: action.value
      });
    case SET_LISTE_MISSION :
      return Object.assign({}, state, {
        mission: action.value
      });
    case SET_LISTE_QUALITE :
      return Object.assign({}, state, {
        qualite: action.value
      });
    default :
      return state;
  }
}

export function getClans(state) {
  return state.filtre.clan;
}

export function getMode(state) {
  return state.filtre.mode;
}

export function getMission(state) {
  return state.filtre.mission
}

export function getQualite(state) {
  return state.filtre.qualite
}
