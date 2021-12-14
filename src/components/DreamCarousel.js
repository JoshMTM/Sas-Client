import React from "react";
import { Carousel } from "react-bootstrap";

function DreamCarousel(props) {
  const { alldreams } = props;
  return (
    <div>
      <Carousel>
        {alldreams.map((elem) => {
          return (
            <div>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={elem.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{elem.title}</h3>
                  <p>{elem.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default DreamCarousel;
