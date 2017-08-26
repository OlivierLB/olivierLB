import { connect } from 'react-redux';
import Inscrire from './Inscrire.jsx';
import {getEtatInscrire, getInscriptionMdp} from '../../redux/reducers/Inscrire.js'
import {saveInscrireId, saveInscrireMdp, setEtatInscrire} from '../../redux/actions/Inscrire.js'
import {saveConnectMdp, saveConnectId} from '../../redux/actions/Connection.js'
import {setMessageErreur} from '../../redux/actions/Erreur.js'

const mapStateToProps = (state) => {
  return {
    mdpNum1 : getInscriptionMdp(state),
    etatInscrire : getEtatInscrire(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEtatInscrire: (etat) => dispatch(setEtatInscrire(etat)),
    saveConnectMdp: (infos) => dispatch(saveConnectMdp(infos)),
    saveConnectId: (infos) => dispatch(saveConnectId(infos)),
    saveInscrireId: (infos) => dispatch(saveInscrireId(infos)),
    saveInscrireMdp: (infos) => dispatch(saveInscrireMdp(infos)),
    setMessageErreur: (message) => dispatch(setMessageErreur(message))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inscrire);
