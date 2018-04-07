import React from 'react'
import { Button, Feed, Grid, Header, List, Segment } from 'semantic-ui-react'
import TeamStatus from './components/TeamStatus'

import Game from './models/GameState'

import 'styling/semantic.less'

function globalStep(e) {
  e.preventDefault()
  let errors = Game.readyToStep()
  if (!errors) {
    Game.step()
  } else {
    alert(errors)
    console.log(errors)
  }
}

const App = () => (
    <Segment>
      <Header as='h1'>Silicon Trail</Header>
      <TeamStatus company={Game.company}/>
      <Grid>
        <Grid.Column computer={6} mobile={16}>
          <h2>{Game.date}</h2>
          <Feed events={Game.events} />
        </Grid.Column>
        <Grid.Column computer={10} mobile={16}>
          <Button primary onClick={globalStep}>Next month</Button>
        </Grid.Column>
      </Grid>
    </Segment>
)

export default App
