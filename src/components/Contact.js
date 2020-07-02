import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Container from "./Container";
import Button from "./Button";

export default function Home() {
  return (
    <Container>
      <Navbar></Navbar>
      <div className="submenu2">
        <div id="contact-form">
          <h1>Do you want to be here?</h1>
          <h2>Send us your song and we will show post it!</h2>
          <form>
            <label>
              Name:
              <br />
              <input type="text" />
            </label>
            <br />
            <label>
              Email:
              <br />
              <input type="text" />
            </label>
            <br />
            <label>
              Text:
              <br />
              <textarea class="text" type="text"></textarea>
            </label>
            <br />
            <label>
              Upload your file!
              <input type="file" />
            </label>
            <br />
            <Button>Send!</Button>
          </form>
        </div>
      <div id="filler">
        <img src="/media/logo.svg" alt="logo"/>
        <h2>You will see your song in our page soon!</h2>
      </div>
      </div>
      <Footer />
    </Container>
  );
}
