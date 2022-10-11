import React from "react";
import { connect } from "react-redux";
import Banner from "./Banner";

export class History extends React.Component {
  render() {
    const user = this.props.auth || {};
    let friends = user?.friend || [];

    return (
      <div className="history">
        <Banner user={user} />
        <div className="friends-list">History</div>
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

export default connect(mapState, mapDispatchToProps)(History);
