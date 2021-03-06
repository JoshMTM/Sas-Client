import "./Header.css";
import { Link } from "react-router-dom";
import HeaderOption from "../homeComponents/HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Header(props) {
  const user = useSelector(selectUser);

  return (
    <div calssName="header">
      <div className="header__left">
        <img src="https://i.imgur.com/cDtWOwo.png" alt="logo" />
        <img src="https://i.imgur.com/cDtWOwo.png" alt="logo" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
        <div className="header__right">
          <Link to="/home">
            <HeaderOption Icon={HomeIcon} title="Home" />
          </Link>
          <Link to="/dreams">
            <HeaderOption Icon={SupervisorAccountIcon} title="My Support" />
          </Link>
          <HeaderOption Icon={ChatIcon} title="Messages" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <Dropdown as={ButtonGroup}>
            <Button variant="link">
              <HeaderOption avatar={user.photoUrl} title="me" />
            </Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
              style={{ height: "60px", marginLeft: "-30px" }}
            />

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/profile">View My Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Edit Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item onClick={props.btnLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
