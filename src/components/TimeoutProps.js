import { Component, cloneElement } from 'react'

export default class TimeoutProps extends Component {
  
  state = {}

  componentWillMount() {
    const { timeout = 0, children, ...rest } = this.props
    this.timeout = setTimeout(() => {
      this.setState(rest)
    }, timeout) 
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return cloneElement(this.props.children, this.state)
  }
}
