import { connect } from 'react-redux';
import ListeConseil from './ListeConseil.jsx';
import {getTitre} from '../../redux/reducers/Conseils.js'

const mapStateToProps = (state) => {
    return {
        titre: getTitre(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListeConseil);
