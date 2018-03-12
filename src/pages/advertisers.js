import React from "react";
import Link from "gatsby-link";
import Labeled from "../components/Labeled";

const EMAIL = "advertisers@adlayer.io";

const Advertisers = () => (
  <div>
    <h1>Advertise with us</h1>
    <form action={`https://formspree.io/${EMAIL}`} method="POST">
      <Labeled label="Email">
        <input type="email" name="email" />
      </Labeled>
      <Labeled label="Name">
        <input type="text" name="name" />
      </Labeled>
      <Labeled label="Company">
        <input type="text" name="company" />
      </Labeled>
      <Labeled label="Message">
        <textarea name="message" />
      </Labeled>
      <button>Submit</button>
    </form>
  </div>
);

export default Advertisers;
