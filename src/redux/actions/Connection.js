export const SET_CONNECTION_MDP = 'SET_CONNECTION_MDP';
export const SET_CONNECTION_ID = 'SET_CONNECTION_ID'

export const saveConnectMdp = (infos) => {
  return { type: SET_CONNECTION_MDP, infos}
}

export const saveConnectId = (infos) => {
  return { type: SET_CONNECTION_ID, infos}
}
