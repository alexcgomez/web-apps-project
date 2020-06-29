import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

export default function Home() {
  return (
    <Container>
      <Navbar></Navbar>
      <Header></Header>
      <span className="separador"></span>
      <div className="submenu">
        <h1>Radio of today</h1>
        <img className="dailyradio" src="https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2018/08/GettyImages-74255351.jpg"/>
        <h2>Check it out!</h2>
        <audio controls="controls">
          <source src="https://radios.yanapak.org/radio_trama" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
        
    



      </div>
      <Footer />
    </Container>
  );
}
