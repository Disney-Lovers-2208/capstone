import axios from "axios";

// helper functions
function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

// action types
const GET_ACTIVITY_LOG = "GET_ACTIVITY_LOG";

// action creators
const _getActivityLog = (activityLog) => ({
  type: GET_ACTIVITY_LOG,
  activityLog,
});

// thunks
export const getActivityLog = (userId) => async (dispatch) => {
  try {
    const { data: friends } = await axios.get(`/api/friends/${userId}`);
    let friendIdArray = [];
    for (let i = 0; i < friends.length; i++) {
      friendIdArray.push(friends[i][friendId]);
    }

    const { data: allStarRatings } = await axios.get("/api/starRatings");
    let starRatings = [];
    for (let j = 0; j < starRatings; j++) {
      if (friendIdArray.includes(allStarRatings[j][userId])) {
        starRatings.push(allStarRatings[j]);
      }
    }

    const { data: allPosts } = await axios.get("/api/Posts");
    let posts = [];
    for (let k = 0; k < posts; k++) {
      if (friendIdArray.includes(allPosts[k][userId])) {
        posts.push(allPosts[k]);
      }
    }

    return merge(posts, starRatings);
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
