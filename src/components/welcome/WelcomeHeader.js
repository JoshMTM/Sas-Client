import "./HeaderWelcome.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
// import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import Button from "@mui/material/Button";

function WelcomeHeader(props) {
  return (
    <div calssName="header">
      <div className="header__left">
        <div>
          <img
            style={{ width: "230px", marginLeft: "20px" }}
            src="https://i.imgur.com/aeC4ID6.png"
            alt="logo"
          />
        </div>
        <div className="img_middle">
          <img src="https://i.imgur.com/cDtWOwo.png" alt="logo" />
        </div>
        <div className="header__right">
          <Link
            to="/signin"
            style={{ marginRight: "10px", textDecoration: "none" }}
          >
            <Button
              style={{
                color: "rgb(97, 149, 112)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              endIcon={<SendIcon />}
            >
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
            <Button
              style={{
                color: "rgb(97, 149, 112)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              endIcon={<JoinFullIcon />}
            >
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomeHeader;
