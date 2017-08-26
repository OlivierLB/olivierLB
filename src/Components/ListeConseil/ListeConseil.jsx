import React, {Component, PropTypes} from 'react';
import Inscrire from '../Inscrire/Inscrire.js'


export default class ListeConseil extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className="panel">
            <Inscrire />
            <legend>Les conseils de pillzage | {this.props.titre}</legend>
          </div>
        );
    }
}

ListeConseil.propTypes = {
  titre : PropTypes.string
}
