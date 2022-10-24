import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography,
  ListItemButton,
} from "@mui/material";

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
                      <div key={friend.id}>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={friend.image}
                              style={{
                                width: "100px",
                                borderRadius: "100%",
                                padding: "15px",
                              }}
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
                          <ListItemButton>
                            <ListItemText
                              primary="Spam"
                              color="yellow"
                              width="2rem "
                            />
                          </ListItemButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </div>
                    );
                  })
                : null}
            </List>
          </Col>
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
