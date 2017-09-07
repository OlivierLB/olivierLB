import React, {Component} from 'react';
import { Segment, Image, Grid, Icon, Reveal } from 'semantic-ui-react'

export default class Realisation extends Component {

  render() {
    var rectification = 0
    const dateJour = new Date()
    if(dateJour.getMonth() - 11 < 0){
      rectification = 1;
    }
    else if (dateJour.getMonth() - 11 == 0) {
      if(dateJour.getDay() - 13 < 0){
        rectification = 1;
      }
    }
    const age = (dateJour.getYear() - 96) - rectification
    return(
      <Segment attached='bottom'>
        <Grid divided='vertically'>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={8}>
            <Reveal animated='fade'>
              <Reveal.Content visible>
                <Image
                  src='./images/realisation/tredarzec1.jpg'
                  shape='rounded'
                  href='http://tredarzec.fr'
                  target='_blank'
                  as='a'
                  bordered
                  fluid
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src='./images/realisation/tredarzec2.jpg'
                  shape='rounded'
                  href='http://tredarzec.fr'
                  target='_blank'
                  as='a'
                  bordered
                  fluid
                />
              </Reveal.Content>
            </Reveal>
            </Grid.Column>
            <Grid.Column width={4}>
              <h2>Tredarzec.fr</h2>
              <p>Conception et réalisation du site web pour la mairie de <a href='https://www.google.fr/maps/place/22220+Tr%C3%A9darzec/data=!4m2!3m1!1s0x4812225e47969341:0x40ca5cd36e62620?sa=X&ved=0ahUKEwiXyarWm4fWAhXEIMAKHdZND6IQ8gEIgAEwCg' target='_blank'>Trédarzec</a>.</p>
              <p>Site créé lors de mon premier stage de BTS SIO en Juin 2015. Il possède une partie de consultation accessible à tous ainsi qu'une partie permettant l'adminitration de pratiquement toutes les pages.</p>
              <p>Coder en php à l'aide du framework <a href='https://codeigniter.com/' target='_blank'>CodeIgniter</a></p>
              <p><a href='http://www.ouest-france.fr/bretagne/tredarzec-22220/le-site-internet-de-tredarzec-bientot-sur-la-toile-3521014' target='_blank'>Le site Internet de Trédarzec bientôt sur la toile</a>, Ouest-France le 27/06/2015</p>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
