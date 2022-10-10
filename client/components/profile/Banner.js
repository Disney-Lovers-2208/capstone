import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const { user } = props;

  return (
    <div className="profile">
      <div className="upper">
        <img src="https://i.imgur.com/Qtrsrk5.jpg" alt="image" />
      </div>
      <Link to="/profile/friends">
        <button className="btn btn-sm btn-primary">Friends</button>
      </Link>

      <div className="user text-center">
        <div className="profileDetails">
          <img src={user.image} alt="image" />
        </div>
      </div>

      <div className="Below mt-5 text-center">
        <h4 className="name">
          {user.firstName} {user.lastName}
        </h4>
      </div>
    </div>
  );
};

export default Banner;
