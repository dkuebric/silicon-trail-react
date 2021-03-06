import React from 'react'
import { Button, Feed, Grid, Header, List, Segment } from 'semantic-ui-react'
import CompanyStatus from './components/CompanyStatus'
import TeamStatus from './components/TeamStatus'

import Game from './models/GameState'

import 'styling/semantic.less'

function globalStep(e) {
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {game: Game}
    this.handleStep = this.handleStep.bind(this)
  }

  handleStep(e) {
    e.preventDefault()
    let errors = Game.readyToStep()
    if (!errors) {
      this.setState({game: this.state.game.step()})
    } else {
      alert(errors)
      console.log(errors)
    }

  }

  render() {
    return (
      <Segment>
        <Header as='h1'>Silicon Trail</Header>
        <TeamStatus company={this.state.game.company}/>
        <Grid>
          <Grid.Column computer={8} mobile={16}>
            <h2>{this.state.game.date}</h2>
            <Button primary onClick={this.handleStep}>Next month</Button>
            <Feed events={this.state.game.events} />
          </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <CompanyStatus company={this.state.game.company}/>
          </Grid.Column>
        </Grid>
      </Segment>)
  }
}

export default App
