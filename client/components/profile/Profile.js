import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../../redux/user";
import Banner from "./Banner";

export class Profile extends React.Component {
  render() {
    const user = this.props.auth || [];
    let tvs = user?.tvs || [];

    console.log("tvs", tvs);
    return (
      <div className="profile">
        <Banner user={user} />
        <div className="favorites">
          /*{" "}
          {tvs
            ? tvs.map((tv) => {
                return (
                  <div className="product-card" key={tv.id}>
                    <img src={tv.imageUrl} alt="image" />
                  </div>
                );
              })
            : null}{" "}
          */
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatchToProps)(Profile);
