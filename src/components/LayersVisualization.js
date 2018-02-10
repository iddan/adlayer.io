import React from "react";
import { darken, saturate } from "polished";
import TimeoutProps from "./TimeoutProps";
import "./LayersVisualization.css";
import image from "../assets/merlin_131642060_5d0e0a87-f38f-47e5-9d98-9e4eb3cf332c-master768.jpg";
import videoCommercial from '../assets/Apple\ iPhone\ X.mp4';
import { compose } from "../utils";

const toShadow = compose(darken(0.2), saturate(-0.4));

export const Layer = ({
  children,
  width = 400,
  height = 275,
  depth = 4,
  z = 0,
  left = 0,
  top = 0,
  color = "white"
}) => {
  const layerSideStyle = { background: toShadow(color) };
  return (
    <figure
      className="layer"
      style={{ width, height, left, top, transform: `translateZ(${z}px)` }}
    >
      <figure
        className="layer__side"
        style={{
          background: color,
          width,
          height,
          transform: `rotateY(0deg) translateZ(${depth / 2}px)`
        }}
      >
        {children}
      </figure>
      <figure
        className="layer__side"
        style={{
          ...layerSideStyle,
          width,
          height,
          transform: `rotateX(180deg) translateZ(${depth / 2}px)`
        }}
      />
      <figure
        className="layer__side"
        style={{
          ...layerSideStyle,
          width: depth,
          height,
          left: (width - depth) / 2,
          transform: `rotateY(  90deg ) translateZ(${width / 2}px)`
        }}
      />
      <figure
        className="layer__side"
        style={{
          ...layerSideStyle,
          width: depth,
          height,
          left: (width - depth) / 2,
          transform: `rotateY( -90deg ) translateZ(${width / 2}px)`
        }}
      />
      <figure
        className="layer__side"
        style={{
          ...layerSideStyle,
          width,
          height: depth,
          top: (height - depth) / 2,
          transform: `rotateX(  90deg ) translateZ(${height / 2}px)`
        }}
      />
      <figure
        className="layer__side"
        style={{
          ...layerSideStyle,
          width,
          height: depth,
          top: (height - depth) / 2,
          transform: `rotateX( -90deg ) translateZ(${height / 2}px)`
        }}
      />
    </figure>
  );
};

export const AnimatedLayer = ({ z, ...rest }) => (
  <TimeoutProps z={z}>
    <Layer z={0} {...rest} />
  </TimeoutProps>
);

const LayersVisualization = ({ width, height, children }) => (
  <div className="LayersVisualization" style={{ width, height }}>
    <figure className="layers">
      {children}
    </figure>
  </div>
);

export default LayersVisualization;
