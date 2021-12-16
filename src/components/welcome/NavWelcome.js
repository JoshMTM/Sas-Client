import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import "./NavWelcome.css";

function NavWelcome() {
  return (
    <div>
      <Divider className="MuiAppBar-colorPrimary" />
      <div className="container-downer-navbar container-downer-navbar-profile">
        <Link to="/products" className="navbar-link-slide">
          Sas Products
        </Link>
        <div className="navbar_shown">
          <Link to="/aboutus" className="navbar-link-slide">
            About
          </Link>
          <div className="show_details">
            <h1>Hello dreamer</h1>
            <img
              style={{ width: "200px" }}
              src="https://i.imgur.com/o5Tcfny.jpg"
              alt="aboutImg"
            />
            <p>
              My name is Josh Mitima, landing in the tech industry after years
              of experience in the Financial sector/Economy (Business
              Management).
            </p>
            <p>
              I recently completed an amazing journey of an intensive 9-weeks
              Bootcamp @Ironhack! My goal is to become an experienced FullStack
              Developer, although I am more interested in Backend, keep growing
              and learning as much as possible through everyday practice.{" "}
            </p>
          </div>
        </div>
        <div className="navbar_shown">
          <Link to="/aboutus" className="navbar-link-slide">
            Help
          </Link>
          <div className="show_details">
            <p>Need Help?</p>
          </div>
        </div>
      </div>
      <Divider className="MuiAppBar-colorPrimary" />
    </div>
  );
}

export default NavWelcome;
