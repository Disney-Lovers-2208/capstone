import axios from "axios";

const GET_FRIENDS_STARS = "GET_FRIENDS_STARS";

const _getFriendsStars = (starRatings) => ({
  type: GET_FRIENDS_STARS,
  starRatings,
});

export const getFriendsStars = (userId) => async (dispatch) => {
  try {
    const { data: starRatings } = await axios.get("/api/starRatings");
    const { data: friends } = await axios.get(`/api/friends/${userId}`);
    friendIdArray = [];
    for (let i = 0; i < friends.length; i++) {
      friendIdArray.push(friends[i][friendId]);
    }
  } catch (error) {
    console.log(error);
  }
};
