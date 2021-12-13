import React from "react";

import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Dreams(props) {
  const user = selectUser(useSelector);
  const { dreams } = props;
  console.log(dreams);
  const myDreams = dreams.filter((dream) => {
    return dream._id === user._id;
  });
  return (
    <div>
      <h1>Dreams</h1>
      {myDreams.map((dream) => {
        return <h4>{dream.name}</h4>;
      })}
    </div>
  );
}

export default Dreams;
