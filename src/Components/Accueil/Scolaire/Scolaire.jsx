import React, {Component} from 'react';
import { Icon, Divider, Step, Container } from 'semantic-ui-react'

export default class Scolaire extends Component {

  render() {
    return(
      <span>
        <Divider horizontal>Parcours scolaire</Divider>

        <Container textAlign='center'>
          <Step.Group stackable='tablet'>
            <Step completed>
              <Icon name='check' />
              <Step.Content>
                <Step.Title>BAC STI2D option SIN</Step.Title>
                <Step.Description>Bac techno STI2D Sciences et Technologies de l'Industrie<br/> et du Développement Durable spécialité<br/> Systèmes d'Information et Numérique.<br/>Lycée Félix Le Dantec Lannion</Step.Description>
              </Step.Content>
            </Step>
            <Step completed>
              <Icon name='check' />
              <Step.Content>
                <Step.Title>BTS SIO option SLAM</Step.Title>
                <Step.Description>BTS Services Informatiques aux Organisations option<br/> Solutions Logicielles et Applications Métiers<br/>Lycée Rabelais Saint-Brieuc</Step.Description>
              </Step.Content>
            </Step>
            <Step active>
              <Icon name='wait' />
              <Step.Content>
                <Step.Title>CDI</Step.Title>
                <Step.Description>Concepteur Développeur Informatique<br/>ENI Ecole Informatique Niort.</Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
        </Container>
      </span>
    );
  }
}
