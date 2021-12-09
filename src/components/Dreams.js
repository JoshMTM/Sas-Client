import React from "react";

function Dreams(props) {
  const { dreams } = props;
  console.log(dreams);
  return (
    <div>
      <h1>Dreams</h1>
      {dreams.map((dream) => {
        return <h4>{dream.title}</h4>;
      })}
    </div>
  );
}

export default Dreams;
