import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

// import { fetchEditedUser, fetchUser } from "../redux/user";

export class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   console.log("EDIT STUDENT: ", this.props);
  //   //const username = this.props.match.params.username;
  //   // const username = this.props.match.params.username;
  //   // this.props.setUser(username);
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.editUser({ ...this.props.user, ...this.state });
    window.location.reload(false);
  }

  render() {
    const { firstName, lastName, email, username } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Container>
        <h1>Edit Profile</h1>
        <hr />
        <Row>
          {/* Left side */}
          <Col lg={3}>
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                style={{ width: "100px" }}
                alt="image"
              />
              <h6>Upload a different photo...</h6>
              <input type="file" className="form-control" />
            </div>
          </Col>
          {/* Right side */}
          <Col lg={9}>
            <form className="edit-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName"> First Name: </label>
                <input
                  name="firstName"
                  onChange={handleChange}
                  value={firstName}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName"> Last Name: </label>
                <input
                  name="lastName"
                  onChange={handleChange}
                  value={lastName}
                  required
                />
              </div>
              <div>
                <label htmlFor="email"> Email: </label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={email}
                  required
                />
              </div>
              <div>
                <label htmlFor="username"> Username: </label>
                <input
                  name="username"
                  onChange={handleChange}
                  value={username}
                  required
                />
              </div>
              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    // editUser: (user) => dispatch(fetchEditedUser(user, history)),
    // setUser: (username) => dispatch(fetchUser(username)),
  };
};

export default connect(mapState, mapDispatch)(Edit);
