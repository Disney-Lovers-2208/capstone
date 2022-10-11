import React from "react";
import { Link } from "react-router-dom";

const History = (props) => {
  const { user } = props;

  return (
    <div className="banner">
      <div className="overlay">
        Multi-line <br />
        text
      </div>
      <img src={user.image} alt="image" />
      <div className="banner-info">
        <h1 className="name">
          {user.firstName} {user.lastName}
        </h1>
        <div className="bio"> {user.bio}</div>
        <div className="buttons">
          <button class="btn btn-sm btn-primary  ml-2">History</button>
          <Link to="/profile/friends">
            <button class="btn btn-sm btn-primary ">Friends</button>
          </Link>
          <button class="btn btn-sm btn-outline-primary  ml-2">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default History;
