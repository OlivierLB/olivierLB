import { connect } from 'react-redux';
import Filtres from './Filtres.jsx';

import {fetchListeClan, fetchListeMode, fetchListeMission, fetchListeQualite} from '../../../redux/actions/Filtre.js'
import {getClans, getMode, getMission, getQualite} from '../../../redux/reducers/Filtre.js'

const mapStateToProps = (state) => {
    return {
        clanListe: getClans(state),
        modeListe: getMode(state),
        missionListe: getMission(state),
        qualiteListe: getQualite(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListeClan: () => dispatch(fetchListeClan()),
        fetchListeMode: () => dispatch(fetchListeMode()),
        fetchListeMission: () => dispatch(fetchListeMission()),
        fetchListeQualite: () => dispatch(fetchListeQualite())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtres);
