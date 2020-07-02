import React from "react";
import { Carousel } from "react-bootstrap";

export default function Header() {
  return (
    <div className="div-header">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.softzone.es/app/uploads-softzone.es/2016/07/musica-qualidade-divulga%C3%A7ao.jpg"
            alt="Free copyright music"
          />
          <Carousel.Caption>
            <h3>Free copyright music</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://agenda.diputaciondepalencia.es/wp-content/uploads/2019/07/music-2149880_960_720.jpg"
            alt="Daily Radios"
          />

          <Carousel.Caption>
            <h3>Daily Radios</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Made by you, for you"
          />

          <Carousel.Caption>
            <h3>Made by you, for you</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
