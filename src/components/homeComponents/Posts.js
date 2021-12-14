import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SupportIcon from "@mui/icons-material/Support";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareIcon from "@mui/icons-material/Share";
import React, { useState } from "react";
import axios from "axios";
import "./Posts.css";
import InputOptions from "./InputOptions";
import { API_URL } from "../../config";

function Posts(props) {
  const [showComment, setShowComment] = useState(false);
  const { name, description, message, image, postImg } = props;

  function handleComment() {
    console.log("can we start?");
    setShowComment(!showComment);
  }

  async function addComment(e) {
    e.preventDefault();
    const newComment = {
      text: e.target.value.text,
      date: e.target.value.date,
    };
    const response = await axios.post(`${API_URL}/comments/new`, newComment, {
      withCredentials: true,
    });
    console.log(response.data);
  }
  addComment();
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={image} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
        {!postImg ? (
          ""
        ) : (
          <img style={{ width: "200px" }} src={postImg} alt="postImage" />
        )}
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpIcon} title="Like" color="#c74702" />
        <InputOptions
          Icon={SupportIcon}
          title="Comment"
          color="#B5A34E"
          onClick={handleComment}
        />
        <InputOptions Icon={SaveAltIcon} title="Save" color="#4E8FB5 " />
        <InputOptions Icon={ShareIcon} title="Share" color="#4E8FB5 " />
      </div>
    </div>
  );
}

export default Posts;
