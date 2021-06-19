import React from "react";
import { Carousel } from "antd";
import carousel1 from "../../assets/images/01.png";
import carousel2 from "../../assets/images/02.png";
import carousel3 from "../../assets/images/03.png";
import carousel4 from "../../assets/images/04.png";

const carouselImages = [carousel1, carousel2, carousel3, carousel4];

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  height: "400px",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
  alignItems: "center",
  zIndex: "999",
  paddingBottom: "10px",
};

const CarouselLogos = () => {
  return (
    <Carousel pauseOnHover arrows autoplay>
      {carouselImages.map((carouselImage) => {
        return (
          <div key={carouselImage}>
            <h3 style={contentStyle}>
              {" "}
              <img
                className="carousel-image"
                src={carouselImage}
                alt="Imagens do carrosel"
              />
            </h3>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselLogos;
