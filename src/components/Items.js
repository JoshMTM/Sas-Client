import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TextField, Grid } from "@mui/material";

function Items(props) {
  const [dreamer, setDreamer] = useState(null);
  const [formRows, setFormRows] = useState([{ id: 1 }]);
  const { newDream } = props;
  console.log(newDream);
  const { userId } = useParams();

  useEffect(() => {
    const getUser = async () => {
      // Fetching info for a single todo
      let response = await axios.get(`${API_URL}/users/${userId}`, {
        withCredentials: true,
      });
      setDreamer(response.data);
      console.log(response.data);
    };
    getUser();
  }, []);

  return (
    <div>
      <div>
        <Box component="form" sx={{ mt: 3 }}>
          {" "}
          {formRows.map((row) => (
            <div style={{ margin: "10px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="name"
                    label="Item name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="category"
                    label="Category"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="descriptoin"
                    label="Description"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="qty"
                    label="Quantity"
                    type="Number"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Button
                  onClick={() =>
                    setFormRows(formRows.filter((fr) => fr.id !== row.id))
                  }
                >
                  remove
                </Button>
              </Grid>
            </div>
          ))}
          <Button
            onClick={() =>
              setFormRows([...formRows, { id: formRows.length + 1 }])
            }
          >
            add
          </Button>
        </Box>
      </div>
      <div className="dream_carousel">
        {!newDream ? (
          "Please create a dream before adding items"
        ) : (
          <div>
            <img src={newDream.image} alt="dream" />
            <div className="carousel_right">
              <h3>{newDream.title}</h3>
              <p>{newDream.description}</p>
            </div>
            <div>
              <h1>{newDream}'s items</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Items;
