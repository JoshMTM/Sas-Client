import "../homeComponents/Header.css";
import { Link } from "react-router-dom";
import HeaderOption from "../homeComponents/HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import Button from "@mui/material/Button";

function WelcomeHeader(props) {
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
          <Link
            to="/signin"
            style={{ marginRight: "10px", textDecoration: "none" }}
          >
            <Button style={{ color: "green" }} endIcon={<SendIcon />}>
              Signin
            </Button>
          </Link>
          <Link
            style={{
              marginRight: "10px",
              textDecoration: "none",
            }}
            to="/signup"
          >
            <Button style={{ color: "green" }} endIcon={<JoinFullIcon />}>
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomeHeader;
