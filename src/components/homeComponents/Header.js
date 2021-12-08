import "./Header.css";
import HeaderOption from "../homeComponents/HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function header() {
  return (
    <div calssName="header">
      <div className="header__left">
        <img src="https://i.imgur.com/InCYOmV.png" alt="logo" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Support" />
          <HeaderOption Icon={ChatIcon} title="Messages" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar="https://i.imgur.com/ZnC8cDv.jpg" title="me" />
        </div>
      </div>
    </div>
  );
}

export default header;
