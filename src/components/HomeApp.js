import React, { useEffect } from "react";
import Feed from "./homeComponents/Feed";
import Header from "./homeComponents/Header";
import Sidebar from "./homeComponents/Sidebar";
import SignIn from "./homeComponents/authComponents/SignIn";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";
import { login, logout } from "../features/userSlice";

function HomeApp() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    if (user) {
      dispatch(login);
    } else {
      dispatch(logout);
    }
  }, []);

  return (
    <div className="app">
      {!user ? (
        <SignIn />
      ) : (
        <div>
          <Header />
          <div className="app__body">
            <Sidebar />
            {/*Sidebar*/}
            <Feed />
            {/*Widget*/}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeApp;
