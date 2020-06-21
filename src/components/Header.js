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
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://agenda.diputaciondepalencia.es/wp-content/uploads/2019/07/music-2149880_960_720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/proxy/CALISCbL2x4WvVAHAl3WD08PKHAnr83x32v5OqX36GHarU8_rVcExoIPD1L7v8yszD30E7XcXAMkNzMgVBGT_2gTr6B6zOQ2PvMB0L2da3YUsj7FwhAgAw"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
