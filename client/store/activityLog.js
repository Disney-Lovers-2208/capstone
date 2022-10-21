import axios from "axios";

// action types
const GET_ACTIVITY_LOG = "GET_ACTIVITY_LOG";

// action creators
const _getActivityLog = (activityLog) => ({
  type: GET_ACTIVITY_LOG,
  activityLog,
});

// thunks
export const getActivityLog = (userId, helperFunc) => async (dispatch) => {
  try {
    const { data: friends } = await axios.get(`/api/friends/${userId}`);
    let friendIdArray = [];
    for (let i = 0; i < friends.length; i++) {
      friendIdArray.push(friends[i]["friendId"]);
    }

    const { data: allReviews } = await axios.get("/api/reviews");
    let reviews = [];
    for (let j = 0; j < allReviews.length; j++) {
      if (friendIdArray.includes(allReviews[j]["userId"])) {
        reviews.push(allReviews[j]);
      }
    }
    dispatch(_getActivityLog(reviews));
    helperFunc();
  } catch (error) {
    console.log(error);
  }
};

// reducer
export default function (state = [], action) {
  switch (action.type) {
    case GET_ACTIVITY_LOG:
      return action.activityLog;
    default:
      return state;
  }
}
