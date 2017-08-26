import React, {Component, PropTypes} from 'react';
import Modal from "react-modal"
import Erreur from '../../Constant/Erreur/Erreur.js'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '50%',
    bottom                : 'auto',
    marginRight           : '-30%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Inscrire extends Component {

    constructor(props) {
        super(props);
        this.state = {
          ihm : "connection"
        };
        this.closeModal = this.closeModal.bind(this)
        this.inscrivezVous = this.inscrivezVous.bind(this)
        this.closeInscrire = this.closeInscrire.bind(this)
        this.connecterMdp = this.connecterMdp.bind(this)
        this.connecterId = this.connecterId.bind(this)
        this.inscription = this.inscription.bind(this)
    }

    closeModal(){
      this.props.setEtatInscrire(false)
    }

    inscrivezVous(){
      this.setState({ihm : "inscrire"})
    }

    closeInscrire(){
      this.props.setMessageErreur("")
      this.setState({ihm : "connection"})
    }

    connecterMdp(e){
      this.props.saveConnectMdp(e.target.value)
    }

    connecterId(e){
      this.props.saveConnectId(e.target.value)
    }

    inscription(e){
      switch (e.target.name) {
        case 'id':
          this.props.saveInscrireId(e.target.value)
          break;
        case 'mdp1':
          this.props.saveInscrireMdp(e.target.value)
          break;
        case 'mdp2':
          if(e.target.value === this.props.mdpNum1)
            this.props.setMessageErreur("")
          else
            this.props.setMessageErreur("Les mots de passe ne sont pas identique")
        default:

      }
    }

    render() {
      if(this.state.ihm === "connection"){
        return(
          <Modal
            isOpen={this.props.etatInscrire}
            contentLabel="Se connecter"
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <legend>Se connecter</legend>
            <Erreur />
            <input
              className="form-control"
              type="text"
              placeholder="Identifiant"
              onChange={this.connecterId}
            /><br/>
            <input
              className="form-control"
              type="password"
              placeholder="Mot de passe"
              onChange={this.connecterMdp}
            /><br />
            <div className="row">
              <div className="col-sm-6">
                <button type="button" className="btn btn-danger btn-block" onClick={this.closeModal}>Annuler</button>
              </div>
              <div className="col-sm-6">
                <button type="button" className="btn btn-success btn-block">Se connecter</button>
              </div>
            </div><br/>
            Si vous n'avez pas de compte <a onClick={this.inscrivezVous}>inscrivez-vous</a>
          </Modal>
        );
      } else {
        return(
          <Modal
            isOpen={this.props.etatInscrire}
            contentLabel="Se connecter"
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <legend>S'inscrire</legend>
            <Erreur />
            <input
              className="form-control"
              type="text"
              placeholder="Identifiant"
              name="id"
              onChange={this.inscription}
            /><br/>
            <input
              className="form-control"
              type="password"
              placeholder="Mot de passe"
              name="mdp1"
              onChange={this.inscription}
            /><br/>
            <input
              className="form-control"
              type="password"
              placeholder="Retapez votre mot de pase"
              name="mdp2"
              onChange={this.inscription}
            /><br />
            <div className="row">
              <div className="col-sm-6">
                <button type="button" className="btn btn-danger btn-block" onClick={this.closeInscrire}>Annuler</button>
              </div>
              <div className="col-sm-6">
                <button type="button" className="btn btn-success btn-block">Se connecter</button>
              </div>
            </div>
          </Modal>
        );
      }

    }
}

Inscrire.propTypes = {
  setEtatInscrire : PropTypes.func,
  saveConnectMdp : PropTypes.func,
  saveConnectId : PropTypes.func,
  saveInscrireId : PropTypes.func,
  saveInscrireMdp : PropTypes.func,
  setMessageErreur : PropTypes.func,
  mdpNum1 : PropTypes.string,
  etatInscrire : PropTypes.bool
}
