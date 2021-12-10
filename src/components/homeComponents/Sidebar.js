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

      <div className="sidebar__bottom">
        <p>Groups</p>
        <a href="plumbers.com">{groups("Plumbing for life")}</a>
        <a href="plumbers.com">{groups("Eye is here")}</a>
        <a href="plumbers.com">{groups("Amsterdam is one")}</a>
      </div>
      <div className="sidebar__bottom">
        <p>Events</p>
        <a href="students.com">
          {groups("Students with dissability support campain")}
        </a>
        <a href="students.com">{groups("Training Amsterdam 2020")}</a>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Supported dreams: </p>
          <p className="sidebar__statNumber">150 dreams</p>
        </div>
        <div className="sidebar__stat">
          <p>Dreams</p>
          <p className="sidebar__statNumber">15 dreams</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
