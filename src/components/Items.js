import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import Button from "@mui/material/Button";

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
        {formRows.map((row) => (
          <div>
            <input type="text" placeholder="Name" name="name"></input>
            <input type="text" placeholder="Category" name="category"></input>
            <input
              type="text"
              placeholder="Description"
              name="description"
            ></input>
            <input type="number" placeholder="Quantity" name="qty"></input>
            <Button
              onClick={() =>
                setFormRows(formRows.filter((fr) => fr.id !== row.id))
              }
            >
              remove
            </Button>
          </div>
        ))}
        <Button
          onClick={() =>
            setFormRows([...formRows, { id: formRows.length + 1 }])
          }
        >
          add
        </Button>
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
