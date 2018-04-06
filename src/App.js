import React from 'react'
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import TeamStatus from './components/TeamStatus'

import Game from './models/GameState'

import 'styling/semantic.less'

function globalStep(e) {
  e.preventDefault()
  Game.step()
}

const App = () => (
    <Segment>
      <Header as='h1'>Your example App</Header>

      <Grid>
        <Grid.Column computer={6} mobile={16}>
          <h2>Month: {Game._month}</h2>
        </Grid.Column>
        <Grid.Column computer={10} mobile={16}>
          <Header as='h3'>Themed <code>Button</code></Header>
          <Button primary onClick={globalStep}>End month</Button>
        </Grid.Column>
      </Grid>
      <TeamStatus company={Game.company}/>
    </Segment>
)

export default App
