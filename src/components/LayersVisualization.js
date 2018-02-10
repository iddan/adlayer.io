import React, { cloneElement, Component } from 'react'
import { darken } from 'polish'
import './LayersVisualization.css'

class TimeoutProps extends Component {
  
  state = {}

  componentWillMount() {
    const { timeout = 0, ...rest } = this.props
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

const Layer = ({ children, z, color, darkColor }) => (
  <figure className="layer" style={{ transform: `translateZ(${z}px)` }}>
    <figure className="layer__side" style={{ background: color }}>
      {children}
    </figure>
    <figure className="layer__side" style={{ background: darkColor }} />
    <figure className="layer__side" style={{ background: darkColor }} />
    <figure className="layer__side" style={{ background: darkColor }} />
    <figure className="layer__side" style={{ background: darkColor }} />
    <figure className="layer__side" style={{ background: darkColor }} />
  </figure>
)

const LayersVisualization = () => (
  <div className="LayersVisualization">
    <figure className="layers">
      <Layer z={0} color="green" darkColor="darkgreen">1</Layer>
      <TimeoutProps z={50}>
        <Layer z={0} color="cyan" darkColor="teal">2</Layer>
      </TimeoutProps>
      <TimeoutProps z={100}>
        <Layer z={0} color="red" darkColor="darkred">3</Layer>
      </TimeoutProps>
    </figure>
  </div>
)

export default LayersVisualization
