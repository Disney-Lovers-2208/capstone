import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { fetchUser } from "../../store/user";
import Profile from "./Profile";

const FriendsProfilePage = () => {
  const { pathname } = useLocation();
  const userId = pathname.split("/").pop();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  function helperFunc() {
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    dispatch(fetchUser(userId, helperFunc));
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Container fluid className="profile">
          {Object.keys(user).length !== 0 ? <Profile user={user} /> : null}
        </Container>
      )}
    </div>
  );
};

export default FriendsProfilePage;
