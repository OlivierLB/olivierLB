import React, {Component, PropTypes} from 'react';

import Accueil from '../../Components/Accueil/Accueil.js'
import Conseils from '../../Components/Conseils/Conseils.js'
import Trombinoscope from '../../Components/Trombinoscope/Trombinoscope.js'
import Aide from '../../Components/Aide/Aide.js'
import Inscrire from '../../Components/Inscrire/Inscrire.js'
import ListeConseil from '../../Components/ListeConseil/ListeConseil.js'

export default class Router extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    if(this.props.adresse == "trombinoscope"){
      return(
        <Trombinoscope />
      );
    }
    else if(this.props.adresse == "conseils"){
      return(
        <Conseils />
      );
    }
    else if(this.props.adresse == "aide"){
      return(
        <Aide />
      );
    }
    else if(this.props.adresse == "listeConseil"){
      return(
        <ListeConseil />
      )
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
