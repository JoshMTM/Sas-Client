import "../homeComponents/Header.css";
import { Link } from "react-router-dom";
import HeaderOption from "../homeComponents/HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

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
          <Link to="/home">
            <HeaderOption Icon={HomeIcon} title="Home" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomeHeader;
