import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  const groups = (topic) => (
    <div className="sidebar__groups">
      <span className="groups__hash"></span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://i.imgur.com/gdGMroT.png" alt="bgService" />
        <Avatar className="sidebar__avatar" />
        <h2>Josh Mitima</h2>
        <h4>Certified Electrician</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Services done: </p>
          <p className="sidebar__statNumber">150 services</p>
        </div>
        <div className="sidebar__stat">
          <p>Requests</p>
          <p className="sidebar__statNumber">15 requests</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Groups</p>
        <a href="plumbers.com">{groups("Plumbing for life")}</a>
        <a href="plumbers.com">{groups("Best Plumbing practices")}</a>
        <a href="plumbers.com">{groups("Plumbers are heroes")}</a>
      </div>
      <div className="sidebar__bottom">
        <p>Events</p>
        <a href="plumbers.com">{groups("Plumbers' Expo 2021")}</a>
        <a href="plumbers.com">{groups("Plumbers training Amsterdam 2020")}</a>
      </div>
    </div>
  );
}

export default Sidebar;
