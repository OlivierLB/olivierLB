import React, {Component, PropTypes} from 'react';

export default class CheckBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row radioStyle">
        <div className="row">
          <span>{this.props.texte}</span>
        </div>
        <div className="row">
          <span className="oui">OUI</span>
          <input type="radio" name={this.props.name} value="true" ></input>
          <span className="non">NON</span>
          <input type="radio" name={this.props.name} value="false" ></input>
        </div>
      </div>
      );
    }
  }

CheckBox.propTypes = {
  texte: PropTypes.string,
  name: PropTypes.string
}
