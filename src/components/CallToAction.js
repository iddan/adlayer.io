import React from 'react'
import Link from "gatsby-link";
import './CallToAction.css'

const CallToAction = () => (
  <section className="CallToAction">
    <Link to="/publishers/">
      <button>Publish with us</button>
    </Link>
    <Link to="/advertisers/">
      <button>Advertise with us</button>
    </Link>
  </section>
)

export default CallToAction
