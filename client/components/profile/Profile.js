import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../../redux/user";
import Banner from "./Banner";

export class Profile extends React.Component {
  componentDidMount() {
    const { auth } = this.props;
    this.props.getUser(auth.id);
  }

  render() {
    const { user } = this.props;
    const { books, tvs, movies } = user;

    console.log(" books", books);
    return (
      <div>
        <Banner user={user} />
        <h1>In profile home</h1>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("in map state", state);
  return {
    auth: state.auth,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mapState, mapDispatchToProps)(Profile);
