import { useState, useEffect } from "react";
import axios from "axios";
import InputFeedOptions from "./InputFeedOptions";
import "./Feed.css";
import Posts from "./Posts";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import { API_URL } from "../../config";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [myImage, setMyImage] = useState(null);
  const [postImg, setpostImg] = useState(null);
  const [posts, setPosts] = useState([]);
  const [showImg, setShowImg] = useState(false);

  //Image Preview before uploading
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    setMyImage(e.target.value);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

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
    console.log(e.target.value);
    imgForm.append("imageUrl", e.target.myImage.files[0]);
    const imgResponse = await axios.post(`${API_URL}/upload`, imgForm);
    setpostImg(imgResponse.data.image);
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const newPost = {
      name: `${user.firstName} ${user.lastName}`,
      description: user.city,
      message: input,
      image: user.photoUrl,
      ImgPost: postImg,
      date: `${day} ${month} ${year}`,
    };
    console.log(newPost.date);
    //Send a post request with the new user
    const response = await axios.post(`${API_URL}/updates/new`, newPost, {
      withCredentials: true,
    });
    console.log(response.data);
    setPosts([response.data, ...posts]);
    setInput("");
  };

  function toggleImage(e) {
    e.preventDefault();
    console.log("is this working?");
    setShowImg(!showImg);
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <form onSubmit={sendPost}>
          <div className="feed__input">
            <CreateIcon />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button type="submit">Update</button>
          </div>
          <div className="feed__inputOptions">
            <InputFeedOptions
              Icon={StarPurple500Icon}
              title="Promotion"
              color="#4e2e6c"
            />
            <InputFeedOptions
              Icon={ImageIcon}
              title="Photo"
              color="#4e2e6c"
              handleToggle={toggleImage}
            />
            {showImg ? (
              <input
                type="file"
                onChange={onSelectFile}
                value={myImage}
                name="myImage"
                accept="image/png, image/jpg"
              />
            ) : (
              ""
            )}
            {selectedFile && (
              <img
                style={{
                  width: "300px",
                  borderRadius: "20px",
                  marginTop: "10px",
                }}
                src={preview}
                alt="img preview"
              />
            )}
            <InputFeedOptions
              Icon={SubscriptionsIcon}
              title="Video"
              color="#c74702"
            />
            <InputFeedOptions
              Icon={EventSeatIcon}
              title="Event"
              color="#c74702"
            />
          </div>
        </form>
      </div>
      {posts.map((elem) => {
        return (
          <Posts
            key={elem._id}
            name={elem.name}
            description={elem.description}
            message={elem.message}
            postImg={elem.ImgPost}
            image={elem.image}
          />
        );
      })}
    </div>
  );
}

export default Feed;
