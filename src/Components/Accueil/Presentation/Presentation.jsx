import React, {Component} from 'react';
import { Image, Grid, Icon, Divider } from 'semantic-ui-react'

export default class Presentation extends Component {

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
      <span>
        <Divider horizontal>Je sais pas</Divider>
        <Grid columns='two' >
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={3}>
              <Image src='./images/photoProfil.jpg' size='medium' floated='right' shape='circular' />
            </Grid.Column>
            <Grid.Column width={9}>
              <p><Icon name='id card'/> Olivier LE BLOAS, {age} ans</p>
              <p><Icon name='linkedin square'/><a href="https://www.linkedin.com/in/olivier-le-bloas-858489133" target='_blank'>LinkedIn</a></p>
              <p><Icon name='github square'/><a href="https://github.com/OlivierLB" target='_blank'>GitHub</a></p>
              <p><Icon name='skype'/><a href="skype:olivierlebloas?userinfo">Skype</a></p>
              <p><Icon name='mail square'/><a href="mailto:lebloas.olivier@gmail.com">Email</a></p>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </span>
    );
  }
}
