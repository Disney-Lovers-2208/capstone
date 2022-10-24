import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography,
  ListItemButton,
  Link,
} from "@mui/material";

export class Friends extends React.Component {
  render() {
    const user = this.props.auth || {};
    let friends = user?.friend || [];

    console.log("friend", friends);
    return (
      <div>
        {this.props.count ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
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
                              <Link href={`/friend/${friend.id}`}>
                                <Row>
                                  <Col lg={3}>
                                    <ListItemAvatar>
                                      <img
                                        src={friend.image}
                                        style={{
                                          width: "120px",
                                          height: "120px",
                                          borderRadius: "100%",
                                          marginRight: "5px",
                                        }}
                                      />
                                    </ListItemAvatar>
                                  </Col>
                                  <Col lg={9} style={{ paddingTop: "1rem" }}>
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
                                  </Col>
                                </Row>
                              </Link>
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
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatchToProps)(Friends);
