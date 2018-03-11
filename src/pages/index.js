import React from "react";
import Link from "gatsby-link";
import HeroVisualization from "../components/HeroVisualization";
import CallToAction from "../components/CallToAction";
import "./index.css";
import LayersVisualization, { Layer } from "../components/LayersVisualization";

const IndexPage = () => (
  <div>
    <section className="hero">
      <hgroup>
        <h1>AdLayer</h1>
        <p>Content in content advertisement</p>
        <CallToAction />
      </hgroup>
      <HeroVisualization width={400} height={275} />
    </section>
    <section className="color-title">
      <h2>Discover how we distribute advertisement that makes more profit</h2>
    </section>
    <section>
      <p>
        AdLayer is the next generation contextual, user-friendly, in-content
        advertising. By using sophisticated layering technology, AdLayer
        seamlessly and beautifully integrates advertiser content into publisher
        websites. Users have a better experience and are more engaged,
        advertisers get more valuable views and interactions leading to
        increased conversion, and publishers increase profits.
      </p>
      {/* <LayersVisualization>
        <Layer>
          test
        </Layer>
      </LayersVisualization> */}
    </section>
    <section>
      <p>
        To display the ads our lightweight site plugin detects the major media
        in the publisher’s site and send them to our servers. There using simple
        mechanism we detect tags to be used to match relevant ads. If the image
        was already processed the and the ad still relevant the ad will
        immediately serve the relevant ad. The plugin gets the relevant ads and
        display them in the matching content while preserving the site’s
        behaviour.
      </p>
    </section>
    <section>
      <p>
      Unlike banners AdLayer’s ads don’t take valuable space from the site, it actually benefits more content being presented leveraging it for displaying more ads. Because the ads are displayed according to the site’s media and not keywords in the text each ad is more relevant to the user. Also, AdLayer’s web plugin is optimized for more modern browsers serving as little code as possible using newer web technologies.
      </p>
    </section>
    <section className="greyed">
      <p>
      By now we already have a working demo and looking for partners, advertisers and publishers, to launch a pilot and test our product in the wild. According to previous research we are expecting significant engagement and now we want to assure it in the wild.
      </p>
      <CallToAction />
    </section>
  </div>
);

export default IndexPage;
