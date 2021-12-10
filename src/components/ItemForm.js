import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TextField, Grid } from "@mui/material";

function ItemForm(props) {
  const { btnAddItem } = props;
  const [formRows, setFormRows] = useState([{ id: 1 }]);

  return (
    <div>
      <div>
        <Box component="form" sx={{ mt: 3 }} onSubmit={btnAddItem}>
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
                    name="description"
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
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Send Item
                </Button>
                <Button
                  style={{
                    color: "maroon",
                    backgroundColor: "gray",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() =>
                    setFormRows(formRows.filter((fr) => fr.id !== row.id))
                  }
                >
                  remove
                </Button>
                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() =>
                    setFormRows([...formRows, { id: formRows.length + 1 }])
                  }
                >
                  add more
                </Button>
              </Grid>
            </div>
          ))}
        </Box>
      </div>
    </div>
  );
}

export default ItemForm;
