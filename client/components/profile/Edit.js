import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { updateUser, fetchUser } from "../../store/user";

export function Edit(props) {
  const user = useSelector((state) => state.user);
  const userId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch]);

  const [firstName, setFirstName] = useState(user.firstName);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Submitting form");
  };

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
            <h6>Upload a different profile photo...</h6>
            <input type="file" className="form-control" />
            <h6>Upload a different banner photo...</h6>
            <input type="file" className="form-control" />
          </div>
        </Col>
        <Col lg={9}>
          <label>
            Name:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
          <p>Name is {firstName}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Edit;

// export class Edit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       username: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     this.props.fetchUser(this.props.auth.id);
//     this.setState(this.props.user);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.user.id !== this.props.user.id) {
//       this.setState({
//         name: this.props.user.firstName || "",
//         price: this.props.user.lastName || "",
//         description: this.props.user.email || "",
//         inventory: this.props.user.username || "",
//       });
//     }
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.updateUser({ ...this.props.user, ...this.state });
//   }

//   render() {
//     const { firstName, lastName, email, username } = this.state;
//     const { handleChange, handleSubmit } = this;
//     console.log(this.state);
//     return (
//       <Container>
//         <h1>Edit Profile</h1>
//         <hr />
//         <Row>
//           {/* Left side */}
//           <Col lg={3}>
//             <div className="text-center">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//                 style={{ width: "100px" }}
//                 alt="image"
//               />
//               <h6>Upload a different profile photo...</h6>
//               <input type="file" className="form-control" />
//               <h6>Upload a different banner photo...</h6>
//               <input type="file" className="form-control" />
//             </div>
//           </Col>
//           {/* Right side */}
//           <Col lg={9}>
//             <form className="edit-form" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="firstName"> First Name: </label>
//                 <input
//                   name="firstName"
//                   onChange={handleChange}
//                   value={firstName}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="lastName"> Last Name: </label>
//                 <input
//                   name="lastName"
//                   onChange={handleChange}
//                   value={lastName}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email"> Email: </label>
//                 <input
//                   name="email"
//                   onChange={handleChange}
//                   value={email}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="username"> Username: </label>
//                 <input
//                   name="username"
//                   onChange={handleChange}
//                   value={username}
//                   required
//                 />
//               </div>
//               <div>
//                 <button type="submit">Update</button>
//               </div>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// const mapState = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

// const mapDispatch = (dispatch, { history }) => {
//   return {
//     updateUser: (userId) => dispatch(updateUser(userId, history)),
//     fetchUser: (userId) => dispatch(fetchUser(userId)),
//   };
// };

// export default connect(mapState, mapDispatch)(Edit);
