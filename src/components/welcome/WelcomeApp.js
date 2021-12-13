import Header from "../homeComponents/Header";
import { Link } from "react-router-dom";
import "./WelcomeApp.css";
import Button from "@mui/material/Button";

function WelcomeApp() {
  return (
    <div>
      <Header />
      <div className="partOne">
        <h1>Welcome to SAS App</h1>
        <img src="https://i.imgur.com/ydYEVP5.jpg" alt="kids" />
        <Button variant="outlined">
          <Link to="/signin">Getting Started</Link>
        </Button>
      </div>
      <div className="partTwo">
        <h1>Share a Smile</h1>
        <p>
          “All the great things are simple, and many can be expressed in a
          single word: freedom, justice, mercy, hope.” – Winston Churchill
        </p>
      </div>
    </div>
  );
}

export default WelcomeApp;
