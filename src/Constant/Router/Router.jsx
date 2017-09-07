import React, {Component, PropTypes} from 'react';

import Accueil from '../../Components/Accueil/Accueil.js'
import Realisation from '../../Components/Realisation/Realisation.js'

export default class Router extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    if(this.props.adresse == "Realisations"){
      return(
        <Realisation />
      );
    }
    else {
      return(
        <Accueil />
      );
    }
  }
}

Router.propTypes = {
    adresse: PropTypes.string
}
