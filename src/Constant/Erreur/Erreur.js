import { connect } from 'react-redux';
import Erreur from './Erreur.jsx';
import {getMessageErreur} from '../../redux/reducers/Erreur.js'

const mapStateToProps = (state) => {
  return {
    messageErreur : getMessageErreur(state)
  }
}

export default connect(mapStateToProps)(Erreur);
