import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const { user } = props;

  return (
    <div className="banner">
      <div className="upper">
        <img src="https://i.imgur.com/Qtrsrk5.jpg" alt="image" />
      </div>
      <Link to="/profile/friends">
        <button>Friends</button>
        {/* btn btn-sm btn-primary */}
      </Link>

      <div className="user">
        <div className="profileDetails">
          <img src={user.image} alt="image" />
        </div>
      </div>

      <div className="below">
        <h4 className="name">
          {user.firstName} {user.lastName}
        </h4>
      </div>
    </div>
  );
};

export default Banner;
