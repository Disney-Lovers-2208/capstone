import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import { getActivityLog } from "../store/activityLog";
import ActivityCard from "./activityLog/ActivityCard";

export const Home = () => {
  const userId = useSelector((state) => state.auth.id);
  let auth = useSelector((state) => state.auth);
  const count = useSelector((state) => state.count);
  let activityLog = useSelector((state) => state.activityLog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivityLog(userId));
  }, [dispatch]);

  return (
    <div>
      {count ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <ScrollToTop smooth color="#6f00ff" />
          <div className="activity-log">
            <h2
              style={{ textAlign: "center", fontWeight: 600, color: "#03045E" }}
            >
              {" "}
              Friend Activity
            </h2>
            {activityLog.length ? (
              activityLog
                .slice(0)
                .reverse()
                .map((activity, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <ActivityCard activity={activity} />
                  </div>
                ))
            ) : (
              <h1>No friend activity sorry</h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
