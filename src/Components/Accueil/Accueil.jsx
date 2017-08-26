import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'

export default class Accueil extends Component {

  render() {
    return(
      <span>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </span>
    );
  }
}
