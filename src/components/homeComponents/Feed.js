import { useState } from "react";
import InputOption from "./InputOptions";
import "./Feed.css";
import Posts from "./Posts";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import EventSeatIcon from "@mui/icons-material/EventSeat";

function Feed() {
  const [posts, setPosts] = useState([]);
  const sendPost = (e) => {
    e.preventDefault();

    setPosts([...posts]);
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
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
