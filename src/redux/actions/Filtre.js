export const SET_LISTE_CLAN = 'SET_LISTE_CLAN';
export const SET_LISTE_MODE = 'SET_LISTE_MODE'
export const SET_LISTE_MISSION = 'SET_LISTE_MISSION'
export const SET_LISTE_QUALITE = 'SET_LISTE_QUALITE'

export const setListeClan = (value) => {
  return { type: SET_LISTE_CLAN, value}
}

export const setListeMode = (value) => {
  return { type: SET_LISTE_MODE, value}
}

export const setListeMission = (value) => {
  return { type: SET_LISTE_MISSION, value}
}

export const setListeQualite = (value) => {
  return { type: SET_LISTE_QUALITE, value}
}

export function fetchListeClan() {
  return (dispatch) => {
    fetch('http://localhost/darkAbyssBackend/Accueil/listeClan.php', {
      method: 'GET'
    }).then(response => response.json())
    .then(json => dispatch(setListeClan(json)))
  }
}

export function fetchListeMode() {
  return (dispatch) => {
    fetch('http://localhost/darkAbyssBackend/Accueil/listeMode.php', {
      method: 'GET'
    }).then(response => response.json())
    .then(json => dispatch(setListeMode(json)))
  }
}

export function fetchListeMission() {
  return (dispatch) => {
    fetch('http://localhost/darkAbyssBackend/Accueil/listeMission.php', {
      method: 'GET'
    }).then(response => response.json())
    .then(json => dispatch(setListeMission(json)))
  }
}

export function fetchListeQualite() {
  return (dispatch) => {
    fetch('http://localhost/darkAbyssBackend/Accueil/listeQualite.php', {
      method: 'GET'
    }).then(response => response.json())
    .then(json => dispatch(setListeQualite(json)))
  }
}
