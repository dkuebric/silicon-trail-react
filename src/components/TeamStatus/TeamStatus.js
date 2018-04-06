import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Morale from 'components/Morale'

class TeamStatus extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let cards = this.props.company.employees.map((e, i) => (
              <Card key={i}>
                <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png'/>
                <Card.Content>
                  <Card.Header>{e.name}</Card.Header>
                  <Card.Meta>{e.prof}</Card.Meta>
                  <Card.Description><Morale employee={e}/></Card.Description>
                </Card.Content>
              </Card>))
    return cards
  }
}

export default TeamStatus
