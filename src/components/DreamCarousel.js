import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function DreamCarousel(props) {
  const { alldreams } = props;
  return (
    <div>
      <Carousel>
        {alldreams.map((elem) => {
          return (
            <div>
              <img
                className="d-block w-100"
                src={elem.image}
                alt="First slide"
                style={{ width: "400px" }}
              />
              <h3>{elem.title} by</h3>
              <h2>
                <i>
                  {elem.dreamer.firstName} in {elem.dreamer.city}
                </i>
              </h2>
              <p>{elem.description}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default DreamCarousel;
