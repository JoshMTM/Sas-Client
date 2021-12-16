import { Avatar } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareIcon from "@mui/icons-material/Share";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";
import InputOptions from "./InputOptions";

function Posts(props) {
  const [showComment, setShowComment] = useState(false);
  const { name, description, message, image, postImg, id } = props;
  const [likeColor, setLikeColor] = useState("#C13A19");

  function handleComment() {
    setShowComment(!showComment);
  }
  function likeButton() {
    // console.log("color?? is this working????");
    setLikeColor("#319917");
  }

  // async function addComment(e) {
  //   e.preventDefault();
  //   const newComment = {
  //     text: e.target.value.text,
  //     date: e.target.value.date,
  //   };
  //   const response = await axios.post(`${API_URL}/comments/new`, newComment, {
  //     withCredentials: true,
  //   });
  //   console.log(response.data);
  // }
  // addComment();

  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={image} />
        <div className="post__info">
          <Link to={`/profile`}>
            <h2>{name}</h2>
          </Link>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
        {!postImg ? (
          ""
        ) : (
          <img
            style={{ width: "500px", borderRadius: "10px" }}
            src={postImg}
            alt="postImage"
          />
        )}
      </div>
      <div className="post__buttons">
        <InputOptions
          Icon={ThumbUpIcon}
          title="Sas"
          color={likeColor}
          onClick={likeButton}
        />
        <InputOptions
          Icon={CommentIcon}
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
