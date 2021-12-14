import React from "react";
// import { Grid, Button, Divider } from "@material-ui/core";
// import { Redirect } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
// import MiniNavBar from "./MiniNavBar";
// import NavBar from "./NavBar";

function Welcome(props) {
  //   const { user } = props;

  return (
    <>
      {/* <MiniNavBar /> */}
      <div id="top-section-home">
        <div id="top-section-title">
          <div id="top-color-image">
            <h1 id="home-h1">
              Join SAS and allow yourself to share and receive genuine love!{" "}
            </h1>
            <p id="home-p">
              Post your dreams, get in touch with other dreamers and help them
              smile.{" "}
            </p>
            <Link to="/signup" id="top-section-btn">
              How to do it!
            </Link>
          </div>
        </div>
        <div id="home-image">
          <img
            id="home-image"
            src="https://i.imgur.com/KImWnMq.jpg"
            alt="homeImg"
          />
        </div>
      </div>
      <div id="middle-container">
        <div className="middle-container-upper">
          <h2>
            All the great things are simple, and many can be expressed in a
            single word: freedom, honor, mercy, hope – Winston Churchill
          </h2>
        </div>
        <div id="grid-section">
          <div id="grid-dev">
            <h2> What is SAS? </h2>
          </div>
          <div id="grid-dev">
            <p>
              SAS is a social media platform where people can post their dreams
              and help others to fulfill their own. Do you have a dream that
              seems out of reach? Share it with the SAS community! There might
              be someone out there who has just what it takes to fulfill your
              dream. Or do you feel blessed and overwhelmed with what you have?
              Share it with others and become a dream fulfiller. Get in touch
              with other dreamers and dream fulfillers, place an update or
              follow the updates of your favorite dreamers and SAS: Share a
              Smile!
            </p>
          </div>
          <div id="grid-dev" className="color-change">
            <h3> Preview </h3>
          </div>
          <div id="grid-dev" className="color-change">
            <img
              style={{ width: "200px" }}
              src="https://i.imgur.com/BQ2jzIC.jpg"
              alt="gardendream"
            />
            <p>
              I love roses, flowers and all kinds of colours. Who wants to help
              building my dream garden?
            </p>
            <h5>Items needed</h5>
          </div>
        </div>
        <div className="middle-container-downer">
          <p>
            "Individually we are one drop. Together, we are an ocean" Ryunosuke
            Satoro
          </p>
          <Link to="/signup" id="top-section-btn" className="downer-home-btn">
            Get Started!
          </Link>
        </div>
      </div>
    </>
  );
}

export default Welcome;
