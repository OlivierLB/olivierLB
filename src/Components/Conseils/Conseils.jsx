import React, {Component, PropTypes} from 'react';
import Inscrire from '../Inscrire/Inscrire.js'


export default class Conseils extends Component {

    constructor(props) {
      super(props);
      this.onClickConseil = this.onClickConseil.bind(this);
    }

    componentWillMount(){
      this.props.fetchListeCategories();
    }

    onClickConseil(e){
      if(e.target.id != ""){
        this.props.saveConseilTitle(e.target.id);
        this.props.setRouter("listeConseil")
      }
    }

    render() {
      return(
        <div className="panel">
          <Inscrire />
          <legend>Les conseils de pillzage</legend>
          <div className="contenu">
            <div className="row" >
              {this.props.categoriesListe.map((item, i) =>
              <span key={i} className="conseilHover" id={item.id} onClick={this.onClickConseil}>
                <div className="col-sm-4 conseils" id={item.id} onClick={this.onClickConseil}>
                  <div className="row" id={item.id} onClick={this.onClickConseil}>
                    <h3 id={item.id} onClick={this.onClickConseil}>{item.libelle}</h3>
                  </div>
                  <div className="row texteConseil" id={item.id} onClick={this.onClickConseil}>
                    <div className="col-sm-12" id={item.id} onClick={this.onClickConseil}>
                      {item.description}
                    </div>
                  </div>
                </div>
              </span>
              )}
            </div>
          </div>
        </div>
      );
    }
}

Conseils.propTypes = {
  categoriesListe : PropTypes.array,
  fetchListeCategories : PropTypes.func,
  saveConseilTitle : PropTypes.func,
  setRouter : PropTypes.func
}
