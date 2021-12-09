import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dream.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Grid } from "@mui/material";
import Items from "./Items";

function DreamCreation(props) {
  const { btnAddDream, dream } = props;

  //Image Preview before uploading
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div style={{ margin: "20px" }}>
      <h2>Would you like to share you dream with the World?</h2>
      <h2>Share your dream</h2>
      <Link to="/home">
        <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
          Continue
        </Button>
      </Link>
      <div className="form-dream">
        <Box component="form" onSubmit={btnAddDream} sx={{ mt: 3 }}>
          {" "}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="title"
                label="Dream Title"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="category"
                label="Category (Optional)"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                type="date"
                name="date"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              Add a descriptive picture of your dream :
              <input
                type="file"
                onChange={onSelectFile}
                name="myImage"
                accept="image/png, image/jpg"
              />
              {selectedFile && (
                <img
                  style={{
                    width: "300px",
                    borderRadius: "20px",
                    marginTop: "10px",
                  }}
                  src={preview}
                  alt="img preview"
                />
              )}
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Add Items
          </Button>
        </Box>
        <Items newDream={dream} />
        <Link to="/home">
          <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
            Add Later
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default DreamCreation;
