import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Friends = () => {
  const user = useSelector((state) => state.auth);
  let friends = useSelector((state) => state.auth.friend);

  return (
    <Container fluid className="friend" style={{ paddingLeft: "2rem" }}>
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
                      <ListItem component={Link} to={`/friends/${friend.id}`}>
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
                                underline="none"
                                color="#03045e"
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
                    </div>
                  );
                })
              : null}
          </List>
        </Col>
      </Row>
    </Container>
  );
};

export default Friends;
