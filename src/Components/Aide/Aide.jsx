import React, {Component} from 'react';
import Inscrire from '../Inscrire/Inscrire.js'


export default class Aide extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className="panel">
            <Inscrire />
            <legend>Aide</legend>
          </div>
        );
    }
}
