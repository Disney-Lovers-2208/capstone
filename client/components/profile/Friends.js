import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/user";
import Banner from "./Banner";

export class Friends extends React.Component {
  render() {
    const user = this.props.auth || {};
    let friends = user?.friend || [];

    console.log("friends", friends);

    return (
      <div className="friends">
        <Banner user={user} />
        <div className="friends-list">
          {friends
            ? friends.map((friend) => {
                return (
                  <div className="friend-card" key={friend.id}>
                    <img src={friend.image} alt="image" />
                    {friend.firstName}
                  </div>
                );
              })
            : null}
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

export default connect(mapState, mapDispatchToProps)(Friends);
