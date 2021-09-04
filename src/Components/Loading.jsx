import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <img
        className="loading-img"
        src="https://flevix.com/wp-content/uploads/2021/06/Neon-Loading.gif"
        alt="loading..."
      />
      <h3>Fetching Data ...</h3>
    </div>
  );
};

export default Loading;
