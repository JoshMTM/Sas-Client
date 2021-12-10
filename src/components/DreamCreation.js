import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dream.css";
import Button from "@mui/material/Button";
import Items from "./Items";
import DreamForm from "./DreamForm";

function DreamCreation(props) {
  const { btnAddDream, dream } = props;

  return (
    <div style={{ margin: "20px" }}>
      <h2>Would you like to share your dream with the World?</h2>
      <h2>Share your dream</h2>
      <Link to="/home">
        <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
          Continue
        </Button>
      </Link>
      {!dream ? (
        <DreamForm btnDream={btnAddDream} />
      ) : (
        <div className="item_form">
          <Items newDream={dream} btnDream={btnAddDream} />
          <Link to="/home">
            <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
              Add Later
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default DreamCreation;
