import React, { useEffect } from "react";
import Feed from "./homeComponents/Feed";
import Header from "./homeComponents/Header";
import Sidebar from "./homeComponents/Sidebar";
import SignIn from "./homeComponents/authComponents/SignIn";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";
import { login, logout } from "../features/userSlice";

function HomeApp(props) {
  const { onLogout } = props;
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
          <Header btnLogout={onLogout} />
          <div className="app__body">
            <Sidebar />
            {/*Sidebar*/}
            <Feed />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeApp;
