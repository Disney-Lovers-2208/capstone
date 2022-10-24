import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import UserCard from "../productCards/UserCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export class Friends extends React.Component {
  render() {
    const user = this.props.auth || {};
    let friends = user?.friend || [];

    console.log("friend", friends);
    return (
      <Container fluid className="friends" style={{ paddingLeft: "2rem" }}>
        <Row>
          <Col>
            <Banner user={user} />
          </Col>
        </Row>
        <h1>Friends</h1>
        <Row>
          <Col>
            <List
              sx={{
                width: "100%",
              }}
            >
              {friends
                ? friends.map((friend) => {
                    return (
                      <Link
                        to={`/users/${friend.id}`}
                        style={{ textDecoration: "none", color: "#03045e" }}
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={friend.image}
                              style={{ width: "100px" }}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  fontSize="1.8rem"
                                >
                                  {`${friend.firstName} ${friend.lastName}`}
                                </Typography>
                              </React.Fragment>
                            }
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  fontSize="1.2rem"
                                >
                                  {` — ${friend.bio}…`}
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </Link>
                    );
                  })
                : null}
            </List>
          </Col>
          {/* <Col className="friends-list">
            {friends
              ? friends.map((friend) => {
                  return (
                    <Link
                      to={`/friend/${friend.id}`}
                      key={friend.id}
                      style={{ textDecoration: "none", color: "#023E8A" }}
                    >
                      <UserCard friend={friend} />
                    </Link>
                  );
                })
              : null}
          </Col> */}
        </Row>
      </Container>
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
