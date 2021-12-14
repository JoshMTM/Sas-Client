import React from "react";
import Button from "react-bootstrap/Button";
import "./Dream.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Dreams(props) {
  const user = useSelector(selectUser);
  const { dreams } = props;
  console.log(user);

  const myDreams = dreams.filter((dream) => {
    if (!user) {
      return "Please Login in first";
    } else {
      return dream.dreamer === user._id;
    }
  });
  return (
    <div>
      {!user ? (
        <signIn />
      ) : (
        <>
          <h1>Dream Space</h1>
          <div className="dreams">
            {myDreams.map((dream) => {
              return (
                <div className="dream_box">
                  <div>
                    <img alt="dreamImg" src={dream.image} />
                    <div className="dream_desc">
                      <h3>{dream.title}</h3>
                      <p>{dream.description}</p>
                      <h3>Item list:</h3>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="allDreams">
              {dreams.map((elem) => {
                return <p>{elem.title}</p>;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dreams;
