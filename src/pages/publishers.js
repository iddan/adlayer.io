import React, { Fragment } from "react";
import Labeled from "../components/Labeled";

const EMAIL = "publishers@adlayer.io";

const Publishers = () => (
  <div>
    <h1>Publish with us</h1>
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

export default Publishers;
