import React, {Component, PropTypes} from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Inscrire from '../../Components/Inscrire/Inscrire.js'

export default class Header extends Component {

    constructor(props) {
      super(props);
      this.state = {
        open: false
      };
      this.handleTouchTap = this.handleTouchTap.bind(this)
      this.handleRequestClose = this.handleRequestClose.bind(this)
      this.onClickCarte = this.onClickCarte.bind(this)
      this.onClickConseil = this.onClickConseil.bind(this)
      this.onClickTrombi = this.onClickTrombi.bind(this)
      this.onClickAide = this.onClickAide.bind(this)
      this.onClickInscrire = this.onClickInscrire.bind(this)
    }

  handleTouchTap(event){
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose(){
    this.setState({
      open: false
    });
  }

  onClickCarte(){
    this.props.setRouter("accueil")
  }

  onClickConseil(){
    this.props.setRouter("conseils")
  }

  onClickTrombi(){
    this.props.setRouter("trombinoscope")
  }

  onClickAide(){
    this.props.setRouter("aide")
  }

  onClickInscrire(){
    this.props.setEtatInscrire(true)
  }

  render() {
    return(
      <div>
        <h1>DarkAbyss</h1>
        <br/>
        <div className="bouton btn1" onClick={this.onClickCarte}>
          Cartes du jeu
        </div>
        <div className="bouton btn2" onClick={this.onClickConseil}>
          Conseils de pillzage
        </div>
        <div className="bouton btn3" onClick={this.onClickTrombi}>
          Trombinoscope
        </div>
        <div className="bouton btn4" onClick={this.onClickAide}>
          Aide
        </div>
        <div className="bouton btn5" onClick={this.onClickInscrire}>
          Se connecter
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  setRouter: PropTypes.func,
  setEtatInscrire: PropTypes.func
}
