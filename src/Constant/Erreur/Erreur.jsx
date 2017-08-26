import React, {Component, PropTypes} from 'react';

export default class Erreur extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className="row">
            <p className="messageErreur">{this.props.messageErreur}</p>
          </div>
        );
    }
}

Erreur.propTypes = {
  messageErreur: PropTypes.string
}
