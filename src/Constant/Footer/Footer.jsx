import React, { Component, PropTypes } from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'

export default class Footer extends Component {

  render() {
    return (
      <Container textAlign='center'>
        <Icon name='copyright' inverted/>
        <h>2017 par Olivier Le Bloas, Créé en <a href="https://facebook.github.io/react/" target='_blank'>ReactJS</a> et <a href="https://react.semantic-ui.com/introduction" target='_blank'>Semantic UI React</a></h>
      </Container>
    );
  }
}

Footer.propTypes = {
  setRouter: PropTypes.func
}
