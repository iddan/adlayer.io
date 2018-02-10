import React from "react";
import Link from "gatsby-link";
import LayersVisualization from '../components/LayersVisualization'

const IndexPage = () => (
  <div>
    <h1>Adlayer</h1>
    <p>Content based advertisement</p>
    <LayersVisualization />
    <Link to="/publishers/">
      <button>Add to your site</button>
    </Link>
    <Link to="/advertisers/">
      <button>Advertise with us</button>
    </Link>
  </div>
);

export default IndexPage;
