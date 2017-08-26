import { connect } from 'react-redux';
import Header from './Header.jsx';
import {setRouter} from '../../redux/actions/Routing.js'
import {setEtatInscrire} from '../../redux/actions/Inscrire.js'

const mapDispatchToProps = (dispatch) => {
    return {
        setRouter: (url) => dispatch(setRouter(url)),
        setEtatInscrire: (etat) => dispatch(setEtatInscrire(etat))
  }
}

export default connect(undefined,mapDispatchToProps)(Header);
