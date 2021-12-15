import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

function DreamDetails() {
  const [dreamDetail, setDreamDetail] = useState(null);
  const { dreamId } = useParams();
  console.log(dreamId);

  useEffect(() => {
    const getData = async () => {
      // Fetching info for a single todo
      let response = await axios.get(`${API_URL}/dreams/${dreamId}`, {
        withCredentials: true,
      });
      console.log(response.data.items);
      setDreamDetail(response.data);
    };
    getData();
  }, []);
  console.log(dreamDetail);
  return (
    <div>
      <h2>Alright Items details</h2>
    </div>
  );
}

export default DreamDetails;
