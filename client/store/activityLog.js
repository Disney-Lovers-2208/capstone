import axios from "axios";

const GET_ACTIVITY_LOG = GET_ACTIVITY_LOG;

const _getFriendsStars = (starRatings) => ({
  type: GET_FRIENDS_STARS,
  starRatings,
});

const _getFriendsPosts = (posts) => ({
  type: GET_FRIENDS_POSTS,
  posts,
});

export const getFriendsStars = (userId) => async (dispatch) => {
  try {
    const { data: allStarRatings } = await axios.get("/api/starRatings");
    const { data: friends } = await axios.get(`/api/friends/${userId}`);
    let friendIdArray = [];
    let starRatings = [];
    for (let i = 0; i < friends.length; i++) {
      friendIdArray.push(friends[i][friendId]);
    }
    for (let j = 0; j < starRatings; j++) {
      if (friendIdArray.includes(allStarRatings[i][userId])) {
        starRatings.push(allStarRatings[i]);
      }
    }
    return dispatch(_getFriendsStars(starRatings));
  } catch (error) {
    console.log(error);
  }
};

export const getFriendsPosts = (userId) => async (dispatch) => {
  try {
    const { data: allPosts } = await axios.get("/api/Posts");
    const { data: friends } = await axios.get(`/api/friends/${userId}`);
    let friendIdArray = [];
    let posts = [];
    for (let i = 0; i < friends.length; i++) {
      friendIdArray.push(friends[i][friendId]);
    }
    for (let j = 0; j < starRatings; j++) {
      if (friendIdArray.includes(allPosts[i][userId])) {
        posts.push(allPosts[i]);
      }
    }
    return dispatch(_getFriendsPosts(posts));
  } catch (error) {
    console.log(error);
  }
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_FRIENDS_STARS:
      return action.starRatings;
    case GET_FRIENDS_POSTS:
      return action.posts;
    default:
      return state;
  }
}
