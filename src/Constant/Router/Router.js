import { connect } from 'react-redux';
import Router from './Router.jsx';
import {getRouting} from '../../redux/reducers/Routing.js'

const mapStateToProps = (state) => {
    return {
        adresse: getRouting(state)
    }
}

export default connect(mapStateToProps)(Router);
