import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import ItemForm from "./ItemForm";

function Items(props) {
  const [dreamer, setDreamer] = useState(null);
  const [newItem, setItem] = useState(null);

  const { newDream } = props;
  console.log(newDream);
  const { userId } = useParams();

  const submitItem = async (event) => {
    event.preventDefault();
    let newItem = {
      name: event.target.name.value,
      category: event.target.category.value,
      description: event.target.description.value,
      qty: event.target.qty.value,
      dream: newDream._id,
    };
    //Send a post request with the new item
    const response = await axios.post(`${API_URL}/items/new`, newItem, {
      withCredentials: true,
    });
    // setDreams([response.data, ...dreams]);
    setItem(response.data);
    console.log(response.data);
    // navigate("/");
  };

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
  }, [dreamer]);

  return (
    <div>
      <div className="dream_carousel">
        {!newDream ? (
          "Please create a dream before adding items"
        ) : (
          <div className="newD_card">
            <div>
              <div className="carousel_right">
                <h3>{newDream.title}</h3>
                <p>{newDream.description}</p>
              </div>
              <img
                src={newDream.image}
                alt="dream"
                style={{ width: "250px", borderRadius: "15px" }}
              />
            </div>
            <div>
              <h1>{newDream.title}'s needed items</h1>
            </div>
          </div>
        )}
      </div>
      {!newDream ? (
        "Your items are going to appear here"
      ) : (
        <ItemForm btnAddItem={submitItem} />
      )}
    </div>
  );
}

export default Items;
