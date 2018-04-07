import React from 'react'
import { Dropdown } from 'semantic-ui-react'

class ActionSelector extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    /* TODO: would be more efficient to not create an arrow function obj every time rendered */
    return <Dropdown placeholder='Assignment?' selection
              options={this.props.employee.actions.map((a,i) => ({key: a, value: a, text: a}))}
              onChange={(e, {value}) => this.props.employee.setAction(value)}
           />
  }
}

export default ActionSelector
