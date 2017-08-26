import { connect } from 'react-redux';
import Conseils from './Conseils.jsx';

import {setRouter} from '../../redux/actions/Routing.js'
import {fetchListeCategories, saveConseilTitle} from '../../redux/actions/Conseils.js'
import {getCategories} from '../../redux/reducers/Conseils.js'

const mapStateToProps = (state) => {
    return {
        categoriesListe: getCategories(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListeCategories: () => dispatch(fetchListeCategories()),
        saveConseilTitle: (titre) => dispatch(saveConseilTitle(titre)),
        setRouter: (url) => dispatch(setRouter(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conseils);
