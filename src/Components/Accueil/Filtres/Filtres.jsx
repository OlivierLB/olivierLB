import React, {Component, PropTypes} from 'react';
import Liste from '../../../Constant/Input/Liste.jsx'
import CheckBox from '../../../Constant/Input/CheckBox.jsx'

export default class Filtres extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
      this.props.fetchListeClan();
      this.props.fetchListeMode();
      this.props.fetchListeMission();
      this.props.fetchListeQualite();
    }

    render() {
      let etoile = []
      etoile[0] = "Étoile"
      etoile[1] = "5"
      etoile[2] = "4"
      return(
        <div className="panel-filtre">
          <legend>Filtres</legend>
          <div className="row">
            <div className="col-sm-2">
              <Liste
                list = {this.props.clanListe}
                texte = "Clan 1"
              />
            </div>
            <div className="col-sm-2">
              <Liste
                list = {this.props.modeListe}
                texte = "Mode 1"
              />
            </div>
            <div className="col-sm-2">
              <select>
                <option>Étoile</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="col-sm-2">
              <CheckBox
                texte="Gros Budget"
                name="budget"
              />
            </div>
            <div className="col-sm-2">
              <CheckBox
                texte="Semi evo"
                name="semi"
              />
            </div>
            <div className="col-sm-2">
              <CheckBox
                texte="Leader"
                name="leader"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <Liste
                list = {this.props.clanListe}
                texte = "Clan 2"
              />
            </div>
            <div className="col-sm-2">
              <Liste
                list = {this.props.modeListe}
                texte = "Mode 2"
              />
            </div>
            <div className="col-sm-2">
              <Liste
                list = {this.props.missionListe}
                texte = "Mission"
              />
            </div>
            <div className="col-sm-2">
              <Liste
                list = {this.props.qualiteListe}
                texte = "Qualité"
              />
            </div>
          </div>
        </div>
      );
    }
}

Filtres.propTypes = {
  fetchListeClan : PropTypes.func,
  fetchListeMode : PropTypes.func,
  fetchListeMission : PropTypes.func,
  fetchListeQualite : PropTypes.func,
  clanListe : PropTypes.array,
  modeListe : PropTypes.array,
  missionListe: PropTypes.array,
  qualiteListe : PropTypes.array
}
