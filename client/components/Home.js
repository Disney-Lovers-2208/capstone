import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import { getActivityLog } from "../store/activityLog";
import ActivityCard from "./activityLog/ActivityCard";

export const Home = () => {
  const username = useSelector((state) => state.auth.username);
  const userId = useSelector((state) => state.auth.id);
  const users = useSelector((state) => state.users);
  let auth = useSelector((state) => state.auth);
  let activityLog = useSelector((state) => state.activityLog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivityLog(userId));
  }, [dispatch]);

  const scrollToTop = auth.books.filter(
    (book) => book.user_book.favorite === true
  )[0];

  return (
    <div>
      <ScrollToTop smooth color="#6f00ff" />
      <div className="activity-log">
        <h2 style={{ textAlign: "center", fontWeight: 600, color: "#03045E" }}>
          {" "}
          Friend Activity
        </h2>
        {activityLog.length ? (
          activityLog
            .slice(0)
            .reverse()
            .map((activity, index) => (
              <div key={index}>
                <ActivityCard activity={activity} />
              </div>
            ))
        ) : (
          <h1>No friend activity sorry</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
