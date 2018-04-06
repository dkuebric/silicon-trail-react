import React from 'react'

class Morale extends React.Component {
  constructor(props) {
    super(props)
  }

  moraleToIcon() {
    let m = this.props.employee.morale
    if (m >= 100) {
      return '😁'
    } else if (m >= 75) {
      return '😀'
    } else if (m > 50) {
      return '🙂'
    } else if (m > 25) {
      return '😐'
    } else if (m > 15) {
      return '🤔'
    } else if (m > 5) {
      return '😤'
    } else {
      return '🤬'
    }
  }

  render() {
    return <span>Morale: {this.moraleToIcon()}</span>
  }
}

export default Morale
