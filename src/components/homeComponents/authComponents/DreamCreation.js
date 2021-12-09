import React from "react";
import "./Dream.css";
import { TextField, Grid } from "@mui/material";

function DreamCreation() {
  return (
    <div>
      <h2>Would you like to share you dream with the World?</h2>
      <h2>Share your dream</h2>
      <div className="form-dream">
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="First Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Last Name" variant="outlined" fullWidth />
            </Grid>
          </Grid>
        </form>
        <button>Submit</button>
      </div>
      <div className="form-preview">
        <form></form>
      </div>
    </div>
  );
}

export default DreamCreation;
