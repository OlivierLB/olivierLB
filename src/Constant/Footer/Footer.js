import { connect } from 'react-redux';
import Footer from './Footer.jsx';

import {setRouter} from '../../redux/actions/Routing.js'

const mapDispatchToProps = (dispatch) => {
    return {
        setRouter: (url) => dispatch(setRouter(url))
  }
}

export default connect(undefined,mapDispatchToProps)(Footer);
