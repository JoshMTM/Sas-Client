import React from "react";
import Feed from "./homeComponents/Feed";
import Header from "./homeComponents/Header";
import Sidebar from "./homeComponents/Sidebar";

function HomeApp() {
  return (
    <div className="app">
      {/*Header*/}

      <Header />
      <div className="app__body">
        <Sidebar />
        {/*Sidebar*/}
        <Feed />
        {/*Widget*/}
      </div>
    </div>
  );
}

export default HomeApp;
