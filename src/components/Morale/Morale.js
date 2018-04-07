import React from 'react'

class Morale extends React.Component {
  constructor(props) {
    super(props)
  }

  _moraleToIcon() {
    let m = this.props.employee.morale
    if (m >= 100) {
      return '😁'
    } else if (m >= 80) {
      return '😀'
    } else if (m > 60) {
      return '🙂'
    } else if (m > 40) {
      return '😐'
    } else if (m > 20) {
      return '🤔'
    } else if (m > 10) {
      return '😤'
    } else {
      return '🤬'
    }
  }

  render() {
    return <span>Morale: {this._moraleToIcon()}</span>
  }
}

export default Morale
