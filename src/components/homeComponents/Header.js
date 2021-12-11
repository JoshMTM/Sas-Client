import "./Header.css";
import HeaderOption from "../homeComponents/HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

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
          <Dropdown as={ButtonGroup}>
            <Button variant="link">
              <HeaderOption
                avatar="https://i.imgur.com/ZnC8cDv.jpg"
                title="me"
              />
            </Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
              style={{ height: "60px", marginLeft: "-30px" }}
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">View My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Edit Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default header;
