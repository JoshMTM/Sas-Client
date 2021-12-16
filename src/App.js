import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomeApp";
// import WelcomeApp from "./components/welcome/WelcomeApp";
import SignIn from "./components/homeComponents/authComponents/SignIn";
import SignUp from "./components/homeComponents/authComponents/SignUp";
import DreamCreation from "./components/DreamCreation";
import Dreams from "./components/Dreams";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import Welcome from "./components/welcome/Welcome";
import Profile from "./components/Profile";
import DreamDetails from "./components/DreamDetails";
import ProfilePeople from "./components/ProfilePeople";
import PagenotFound from "./components/PagenotFound";

function App() {
  const [dreams, setDreams] = useState([]);
  const [newDream, setNewDream] = useState(null);
  const navigate = useNavigate();
  // const [fetchUser, setUser] = useState(true);
  const [myError, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDreams = async () => {
      console.log("are we getting here?");
      const response = await axios.get(`${API_URL}/dreams`, {
        withCredentials: true,
      });
      console.log(response.data);
      setDreams(response.data);
    };

    getDreams();
  }, []);

  // const handleSignIn = async (event) => {
  //   event.preventDefault();
  //   console.log("whats happening here?");
  //   try {
  //     const newUser = {
  //       email: event.target.email.value,
  //       password: event.target.password.value,
  //     };
  //     console.log("am i getting here?");
  //     const response = await axios.post(`${API_URL}/signin`, newUser, {
  //       withCredentials: true,
  //     });
  //     console.log(response.data);
  //     dispatch(
  //       login({
  //         email: response.data.email,
  //         firstName: response.data.firsName,
  //         lastName: response.data.lastName,
  //         country: response.data.country,
  //         city: response.data.city,
  //         photoUrl: response.data.image,
  //         lat: response.data.lat,
  //         lon: response.data.lon,
  //       })
  //     );
  //   } catch (err) {
  //     setError(err.response.data.error);
  //   }
  //   navigate("/home");
  // };

  const handleSignUp = async (event) => {
    event.preventDefault();
    //Upload the image
    const imgForm = new FormData();
    imgForm.append("imageUrl", event.target.myImage.files[0]);
    console.log(event.target.myImage.files[0]);
    const imgResponse = await axios.post(`${API_URL}/upload`, imgForm);

    //Get the city value to use for coordinates
    const city = event.target.city.value;

    //Get the latitude and longitude for the city
    const CoordinatesRes = await axios.get(
      `https://nominatim.openstreetmap.org/search/${city}?format=json&addressdetails=1&limit=1&polygon_svg=1`
    );
    const data = CoordinatesRes.data[0];
    let newUser = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      image: imgResponse.data.image,
      addressline: event.target.addressline.value,
      zipCode: event.target.zipCode.value,
      city: city,
      lat: data.lat,
      lon: data.lon,
      state: event.target.state.value,
      country: event.target.country.value,
    };
    //Send a post request with the new user
    const response = await axios.post(`${API_URL}/signup`, newUser, {
      withCredentials: true,
    });
    console.log(response.data);
    dispatch(
      login({
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        country: response.data.country,
        city: response.data.city,
        photoUrl: response.data.image,
        lat: response.data.lat,
        lon: response.data.lon,
      })
    );

    navigate("/home");
  };

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
    // console.log(response.data);
    navigate(`/dreams/${response.data.dreamer}/items`);
  };

  const handleLogout = async () => {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    dispatch(logout());
  };

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/welcome" element={<WelcomeApp />} /> */}
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<PagenotFound />} />

        <Route path="/signin" element={<SignIn myError={myError} />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        <Route path="/home" element={<HomePage onLogout={handleLogout} />} />
        <Route path="/profile" element={<Profile dreams={dreams} />} />
        <Route
          path="/:id/profile"
          element={<ProfilePeople dreams={dreams} />}
        />

        <Route
          path="/dreams/new"
          element={<DreamCreation dream={newDream} btnAddDream={submitDream} />}
        />
        <Route path="/dreams" element={<Dreams dreams={dreams} />} />
        <Route
          path="/dreams/:dreamId"
          element={<DreamDetails dreams={dreams} />}
        />

        <Route
          path="/dreams/:id/items"
          element={<DreamCreation dream={newDream} btnAddDream={submitDream} />}
        />
      </Routes>
    </div>
  );
}

export default App;
