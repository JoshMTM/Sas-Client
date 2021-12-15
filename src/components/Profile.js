import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Header from "./homeComponents/Header";
import SignIn from "./homeComponents/authComponents/SignIn";
import "./Profile.css";
import DreamCarousel from "./DreamCarousel";
// import Sidebar from "./homeComponents/Sidebar";
import ProfileSidebar from "./ProfileSidebar";

const Profile = (props) => {
  const { dreams } = props;
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div className="profile_body">
      {!user ? (
        <SignIn />
      ) : (
        <>
          <Header />
          <h1>Your Profile</h1>
          <div className="dream_sidebar">
            <ProfileSidebar />
            <div className="profile">
              <div className="profile_detail">
                <h3>First name: {user.firstName}</h3>
                <h3>Last name: {user.lastName}</h3>
                <h5>City: {user.city}</h5>
              </div>
              <div className="profile_img">
                <img src={user.photoUrl} alt="userphoto" />
              </div>
            </div>
          </div>
        </>
      )}
      {!dreams ? (
        <h3>
          Your list of dreams is empty, you can{" "}
          <Link to="/dreams/new">create one here</Link> or{" "}
          <Link to="/dreams">get inspired</Link>
        </h3>
      ) : (
        <div>
          <h2>Your dreams</h2>
          <DreamCarousel alldreams={dreams} />
        </div>
      )}
    </div>
  );
};

export default Profile;
