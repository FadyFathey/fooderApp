import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import p1 from "../imgs/p1.jpg";
import p2 from "../imgs/p2.jpg";
import p3 from "../imgs/p3.jpg";
const CarouselSlider = () => {
  return (
    <Carousel id="home" style={{ marginTop: "1px" }} data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p1}
          style={{ width: "800px", height: "500px", objectFit: "cover" }}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p2}
          style={{ width: "800px", height: "500px", objectFit: "cover" }}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p3}
          style={{ width: "800px", height: "500px", objectFit: "cover" }}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlider;
