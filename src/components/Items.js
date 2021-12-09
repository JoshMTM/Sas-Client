import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

function Items() {
  const [dream, setDream] = useState(null);
  const { dreamId } = useParams();

  useEffect(() => {
    const getData = async () => {
      // Fetching info for a single todo
      let response = await axios.get(`${API_URL}/dreams/${dreamId}`, {
        withCredentials: true,
      });
      setDream(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <div className="form-preview">
        <form></form>
      </div>
    </div>
  );
}

export default Items;
