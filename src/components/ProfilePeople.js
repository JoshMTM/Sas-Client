import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./homeComponents/Header";
import "./Profile.css";
import axios from "axios";
import { API_URL } from "../config";

import DreamCarousel from "./DreamCarousel";
// import Sidebar from "./homeComponents/Sidebar";
import ProfileSidebar from "./ProfileSidebar";
import MyCalTest from "./homeComponents/MyCalTest";

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const { dreams } = props;
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    async function getUser() {
      const response = await axios.get(`${API_URL}/users/${id}`);
      console.log(response.data);
      setUser(response.data);
    }
    getUser();
  }, [id]);

  return (
    <div className="profile_body">
      {!user ? (
        <h1>User not found</h1>
      ) : (
        <>
          <Header />
          <h1>{user.firstName}'s Profile</h1>
          <div className="dream_sidebar">
            <div className="sidebar_profile">
              <ProfileSidebar />
            </div>
            <div className="dream_feed">
              <div className="profile">
                <div className="profile_detail">
                  <h3>First name: {user.firstName}</h3>
                  <h3>Last name: {user.lastName}</h3>
                  <h5>City: {user.city}</h5>
                </div>
                <div className="profile_img">
                  <img src={user.image} alt="userphoto" />
                </div>
                <p>
                  I love roses, flowers and all kinds of colours. Who wants to
                  help building my dream garden?
                </p>
              </div>
            </div>
            <div className="calendar">
              <MyCalTest />
            </div>
          </div>
        </>
      )}
      {dreams.length == 0 ? (
        <div style={{ textAlign: "center" }}>
          <h3>
            Your list of dreams is empty, you can{" "}
            <Link to="/dreams/new">create one here</Link> or{" "}
            <Link to="/dreams">get inspired</Link>
          </h3>
        </div>
      ) : (
        <div>
          <h1>Your dreams</h1>
          <DreamCarousel alldreams={dreams} />
        </div>
      )}
    </div>
  );
};

export default Profile;
