import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ShareIcon from "@mui/icons-material/Share";
import { API_URL } from "../config";
import "./DreamDetail.css";
// import Header from "./homeComponents/Header";
// import ProfileSidebar from "./ProfileSidebar";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";

function DreamDetails() {
  // const user = useSelector(selectUser);
  const [dreamDetail, setDreamDetail] = useState(null);
  const { dreamId } = useParams();
  console.log(dreamId);

  useEffect(() => {
    const getData = async () => {
      // Fetching info for a dream
      let response = await axios.get(`${API_URL}/dreams/${dreamId}`, {
        withCredentials: true,
      });
      console.log(response.data.items);
      setDreamDetail(response.data);
    };
    getData();
  }, []);
  return (
    <div className="dreamD">
      <h1>Dream detail</h1>
      <div className="dreamD_card">
        <div className="d_img">
          <img src={dreamDetail.image} alt="imageD" />
        </div>
        <div className="d_info">
          <h2>{`${dreamDetail.dreamer.firstName} ${dreamDetail.dreamer.lastName}`}</h2>
          <h3>{dreamDetail.title}</h3>
          <h3>{dreamDetail.description}</h3>
          <Link to={`/${dreamDetail.dreamer._id}/profile`}>
            <h3>Learn more about - {dreamDetail.dreamer.firstName}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DreamDetails;
