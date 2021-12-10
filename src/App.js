import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomeApp";
import WelcomeApp from "./components/welcome/WelcomeApp";
import SignIn from "./components/homeComponents/authComponents/SignIn";
import SignUp from "./components/homeComponents/authComponents/SignUp";
import DreamCreation from "./components/DreamCreation";
import Dreams from "./components/Dreams";

function App() {
  const [dreams, setDreams] = useState([]);
  const [newDream, setNewDream] = useState(null);
  const navigate = useNavigate();
  const [fetchUser, setUser] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/dreams`, {
        withCredentials: true,
      });
      setDreams(response.data);

      //-----------------------------------------------
      // we make the user requst here to know if the user is logged in or not
      try {
        let userResponse = await axios.get(`${API_URL}/user`, {
          withCredentials: true,
        });
        setUser(false);
        setUser(userResponse.data);
        console.log(userResponse.data);
      } catch (err) {
        setUser(false);
      }
    };

    getData();
  }, []);

  const submitDream = async (event) => {
    event.preventDefault();
    const imgForm = new FormData();
    imgForm.append("imageUrl", event.target.myImage.files[0]);
    const imgResponse = await axios.post(`${API_URL}/upload`, imgForm);
    let newDream = {
      title: event.target.title.value,
      description: event.target.description.value,
      category: event.target.category.value,
      image: imgResponse.data.image,
      date: event.target.date.value,
    };
    //Send a post request with the new user
    const response = await axios.post(`${API_URL}/dreams/new`, newDream, {
      withCredentials: true,
    });
    setDreams([response.data, ...dreams]);
    setNewDream(response.data);
    console.log(response.data);
    // navigate("/");
    navigate(`/dreams/${response.data.dreamer}/items`);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomeApp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/dreams/new"
          element={<DreamCreation dream={newDream} btnAddDream={submitDream} />}
        />
        <Route path="/dreams" element={<Dreams dreams={dreams} />} />
        <Route
          path="/dreams/:id/items"
          element={<DreamCreation dream={newDream} btnAddDream={submitDream} />}
        />
      </Routes>
    </div>
  );
}

export default App;
