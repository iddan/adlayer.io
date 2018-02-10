import React from "react";
import Link from "gatsby-link";
import HeroVisualization from '../components/HeroVisualization'
import CallToAction from '../components/CallToAction'
import './index.css'
import LayersVisualization, { Layer } from "../components/LayersVisualization";

const IndexPage = () => (
  <div>
    <section className="hero">
      <hgroup>
        <h1>Adlayer</h1>
        <p>Content on content advertisement</p>
        <CallToAction />
      </hgroup>
      <HeroVisualization width={400} height={275} />
    </section>
    <section className="color-title">
      <h2>Discover how we distribute advertisement that makes more profit</h2>
    </section>
    <section>
      <h3>Ads for people to notice</h3>
      <p>We show seamless ads <strong>around your content</strong> where your viewers eyes are.</p>
      <p>Old advertisement areas are usually ignored because they are static and in the corners of sites usually making very little effect. Because of that they are very cheap and make very little profit for advertisers and publishers.</p>
      <p>Instead we show ads where viewers actually look - the content. To do that we detect content in your site and benefit the white space or it's surface for a timed sequence for advertisement.</p>
      <LayersVisualization>
        <Layer>
          test
        </Layer>
      </LayersVisualization>
    </section>
  </div>
);

export default IndexPage;
