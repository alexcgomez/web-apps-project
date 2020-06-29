import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

export default function Top10() {
  return (
    <Container>
      <Navbar></Navbar>
      <div className="submenu2">
        <div className="song-box">
          <div className="song">
            <img className="cover" src="./media/back.PNG" />
            <div className="datasong">
              <h1>Title of the song</h1>
              <h2>Author</h2>
              <p>
                Sit in adipisicing reprehenderit velit veniam laboris. Pariatur
                non ut voluptate culpa aliquip aliquip ea tempor. Laborum aute
                incididunt voluptate proident fugiat velit laborum anim sit
                amet. Quis laboris nisi dolore consequat irure incididunt non ad
                enim excepteur irure irure. Do anim nulla eiusmod minim
                voluptate voluptate veniam velit cillum occaecat dolore quis.
                Nisi adipisicing elit occaecat id laborum anim commodo.
              </p>
            </div>
            <audio controls="controls">
              <source
                src="https://radios.yanapak.org/radio_trama"
                type="audio/ogg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="song">
            <img className="cover" src="./media/1.PNG" />
            <h1>Hi</h1>
            <audio controls="controls">
              <source
                src="https://radios.yanapak.org/radio_trama"
                type="audio/ogg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
}
