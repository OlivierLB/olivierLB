import { SET_LISTE_CATEGORIES, SAVE_CONSEIL_TITRE } from './../actions/Conseils.js';

const initialState = {
    categories : [],
    titre : ""
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_LISTE_CATEGORIES :
      return Object.assign({}, state, {
        categories: action.value
      });
    case SAVE_CONSEIL_TITRE :
      return Object.assign({}, state, {
        titre: action.titre
      });
    default :
      return state;
  }
}

export function getCategories(state) {
  return state.conseils.categories;
}

export function getTitre(state) {
  return state.conseils.titre;
}
