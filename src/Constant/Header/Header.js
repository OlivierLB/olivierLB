import { connect } from 'react-redux';
import Header from './Header.jsx';

import {setRouter} from '../../redux/actions/Routing.js'

const mapDispatchToProps = (dispatch) => {
    return {
        setRouter: (url) => dispatch(setRouter(url))
  }
}

export default connect(undefined,mapDispatchToProps)(Header);
