import React from 'react'
import { Card, Header, Image, List, Segment } from 'semantic-ui-react'
import Morale from 'components/Morale'

class TeamStatus extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let cards = this.props.company.employees.map((e, i) => (
              <List.Item key={e.id}>
                <Card>
                  <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png'/>
                  <Card.Content>
                    <Card.Header>{e.name}</Card.Header>
                    <Card.Meta>{e.prof}</Card.Meta>
                    <Card.Description><Morale employee={e}/></Card.Description>
                  </Card.Content>
                </Card>
              </List.Item>))

    return (<Segment>
              <Header as='h2'>Team</Header>
              <List horizontal>{cards}</List>
            </Segment>)
  }
}

export default TeamStatus
