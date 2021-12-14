import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Header from "./homeComponents/Header";
import SignIn from "./homeComponents/authComponents/SignIn";
import "./Profile.css";

const Profile = (props) => {
  const { dreams } = props;
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
      {!user ? (
        <SignIn />
      ) : (
        <>
          <Header />
          <h1>Profile Page</h1>
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
        </>
      )}
      {!dreams ? (
        <h3>
          Your list of dreams is empty, you can{" "}
          <Link to="/dreams/new">create one here</Link> or{" "}
          <Link to="/dreams">get inspired</Link>
        </h3>
      ) : (
        <h2>List of dreams</h2>
      )}
    </div>
  );
};

export default Profile;
