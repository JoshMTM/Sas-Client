import { useState, useEffect } from "react";
import axios from "axios";
import InputOption from "./InputOptions";
import "./Feed.css";
import Posts from "./Posts";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import { API_URL } from "../../config";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(`${API_URL}/updates`);
      setPosts(response.data);
    }
    getPosts();
  }, []);

  //New posts/updates creating
  const sendPost = async (e) => {
    e.preventDefault();
    const imgForm = new FormData();
    imgForm.append("imageUrl", e.target.myImage.files[0]);
    const imgResponse = await axios.post(`${API_URL}/upload`, imgForm);
    let newPost = {
      name: "test",
      description: "test",
      message: input,
      photoUrl: imgResponse.data.image,
      date: e.target.date.value,
    };
    //Send a post request with the new user
    const response = await axios.post(`${API_URL}/dreams/new`, newPost, {
      withCredentials: true,
    });
    setPosts([...posts]);
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Update
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            Icon={StarPurple500Icon}
            title="Promotion"
            color="#4e2e6c"
          />
          <InputOption Icon={ImageIcon} title="Photo" color="#4e2e6c" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#c74702" />
          <InputOption Icon={EventSeatIcon} title="Event" color="#c74702" />
        </div>
      </div>
      {posts.map((post) => {
        return <Posts />;
      })}
      <Posts
        name="Josh Mitima"
        description="This is a test"
        message="How about this"
        photoUrl=""
      />
    </div>
  );
}

export default Feed;
