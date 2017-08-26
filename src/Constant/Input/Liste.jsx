import React, {Component, PropTypes} from 'react';

export default class Liste extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <select>
          <option>{this.props.texte}</option>
          {this.props.list.map(function(object, i){
            return <option key={i} value={object.id}>{object.libelle}</option>;
          })}
        </select>
      </div>
    );
  }
}

Liste.propTypes = {
  list: PropTypes.array,
  texte: PropTypes.string
}
