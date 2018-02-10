import React from "react";
import LayersVisualization, { Layer, AnimatedLayer } from './LayersVisualization'
import image from "../assets/merlin_131642060_5d0e0a87-f38f-47e5-9d98-9e4eb3cf332c-master768.jpg";
import videoCommercial from '../assets/Apple\ iPhone\ X.mp4';

const HeroVisualization = () => (
  <LayersVisualization width={400} height={275}>
    <Layer color="#eee">
      <h1>A World of Deal Making, Gleaned With an iPhone X</h1>
      <p>How do New York Times journalists use technology in their jobs and in their personal lives? Michael de la Merced, a DealBook reporter for The Times based in London, discussed the tech he is using.</p>
    </Layer>
    <AnimatedLayer
      z={75}
      width={200}
      height={200}
      left={250}
      top={25}
      color="rgb(50, 47, 51)"
    >
      <img src={image} width={300} height={200} />
    </AnimatedLayer>
    <AnimatedLayer
      z={125}
      width={200}
      height={50}
      left={275}
      top={220}
      color="white"
    >
      <video width={200} muted style={{ position: 'absolute', top: -30, left: 0 }} autoPlay loop>
        <source src={videoCommercial} type="video/mp4" />
      </video>
    </AnimatedLayer>
  </LayersVisualization>
)

export default HeroVisualization
