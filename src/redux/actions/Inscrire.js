export const SET_ETAT_INSCRIRE = 'SET_ETAT_INSCRIRE';
export const SET_INSCRIPTION_ID = 'SET_INSCRIPTION_ID';
export const SET_INSCRIPTION_MDP = 'SET_INSCRIPTION_MDP'

export const setEtatInscrire = (value) => {
    return { type: SET_ETAT_INSCRIRE, value}
}

export const saveInscrireId = (value) => {
    return { type: SET_INSCRIPTION_ID, value}
}

export const saveInscrireMdp = (value) => {
  return{ type: SET_INSCRIPTION_MDP, value}
}
