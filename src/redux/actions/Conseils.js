export const SET_LISTE_CATEGORIES = 'SET_LISTE_CATEGORIES';
export const SAVE_CONSEIL_TITRE = 'SAVE_CONSEIL_TITRE'

export const setListeCategories = (value) => {
  return { type: SET_LISTE_CATEGORIES, value}
}

export const saveConseilTitle = (titre) => {
  return { type: SAVE_CONSEIL_TITRE, titre}
}

export function fetchListeCategories() {
  return (dispatch) => {
    fetch('http://localhost/darkAbyssBackend/Conseils/listeCategorie.php', {
      method: 'GET'
    }).then(response => response.json())
    .then(json => dispatch(setListeCategories(json)))
  }
}
