import React from 'react'
import './LayersVisualization.css'

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
      <Layer z={50} color="cyan" darkColor="teal">2</Layer>
      <Layer z={100} color="red" darkColor="darkred">3</Layer>
    </figure>
  </div>
)

export default LayersVisualization
