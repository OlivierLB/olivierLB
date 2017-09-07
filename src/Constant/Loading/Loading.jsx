import React from 'react'
import { Loader, Segment, Dimmer } from 'semantic-ui-react'

const Loading = () => (
  <Segment vertical>
    <br/>
    <Dimmer active inverted>
      <Loader size='medium'>Chargement</Loader>
    </Dimmer>
  </Segment>
)

export default Loading
