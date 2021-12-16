import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ShareIcon from "@mui/icons-material/Share";
// import { API_URL } from "../config";
import "./DreamDetail.css";
import Header from "./homeComponents/Header";
// import ProfileSidebar from "./ProfileSidebar";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";

function DreamDetails(props) {
  // const user = useSelector(selectUser);
  // console.log(dreamId);
  // console.log(user);
  const { dreamOne } = props;

  return (
    <div className="dreamD">
      <Header />
      <h1>Dream detail</h1>
      <div className="dreamD_card">
        <div className="d_img">
          <img src={dreamOne.image} alt="imageD" />
        </div>
        <div className="d_info">
          <h2>{`${dreamOne.dreamer.firstName} ${dreamOne.dreamer.lastName}`}</h2>
          <h3>{dreamOne.title}</h3>
          <h3>{dreamOne.description}</h3>
          <Link to={`/${dreamOne.dreamer._id}/profile`}>
            <h3>Learn more about - {dreamOne.dreamer.firstName}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DreamDetails;
