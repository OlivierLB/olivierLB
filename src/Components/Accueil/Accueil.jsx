import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react'
import Presentation from './Presentation/Presentation.js'
import Competences from './Competences/Competences.js'
import Experiences from './Experiences/Experiences.js'
import Scolaire from './Scolaire/Scolaire.js'

export default class Accueil extends Component {

  render() {
    return(
      <Segment attached='bottom'>

        <Presentation />
        <Competences />
        <Experiences />
        <Scolaire />

      </Segment>
    );
  }
}
