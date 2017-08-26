import React, {Component} from 'react';

export default class Tableau extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return(
        <div className="panel-tableau">
          <div className="row headerTableau">
            <div className="col-sm-2">
              NOM
            </div>
            <div className="col-sm-2">
              CLAN
            </div>
            <div className="col-sm-1">
              ETOILE
            </div>
            <div className="col-sm-2">
              UTILITE
            </div>
            <div className="col-sm-2">
              MODE 1
            </div>
            <div className="col-sm-2">
              MODE 2
            </div>
            <div className="col-sm-1">
              MISSION
            </div>
          </div>
          <div className="row contenuTableau">
            <div className="row ligneTableau">
              <div className="col-sm-2">
                Dr Van Wesel Ld
              </div>
              <div className="col-sm-2">
                Fang Pi Clang
              </div>
              <div className="col-sm-1">
                5
              </div>
              <div className="col-sm-2">
                Je sais pas quoi écrire
              </div>
              <div className="col-sm-2">
                Survivor T3
              </div>
              <div className="col-sm-2">
                Tounois T4
              </div>
              <div className="col-sm-1">
                Réduction
              </div>
            </div>
          </div>
        </div>
      );
    }
}
