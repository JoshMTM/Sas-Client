import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Profile = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

export default Profile;
