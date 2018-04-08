import React from 'react'
import { Header, Progress } from 'semantic-ui-react'

class CompanyStatus extends React.Component {
  render() {
    return (
      <div>
        <Header as='h2'>{this.props.company.name}</Header>
        <Progress percent={this.props.company.fit} color='blue'>Product-market fit</Progress>
        <Progress percent={this.props.company.quality} color='orange'>Quality</Progress>
        <Progress percent={this.props.company.brand} color='purple'>Brand</Progress>
        <Progress percent={this.props.company.loyalty} color='red'>Loyalty</Progress>
        Cash: ${this.props.company.money}
      </div>)
  }
}

export default CompanyStatus
